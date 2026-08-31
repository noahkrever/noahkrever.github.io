#!/usr/bin/env python3
"""Refresh the public Letterboxd data used by the Misc. page."""

from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import subprocess
import tempfile
import urllib.request
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin


LETTERBOXD_ORIGIN = "https://letterboxd.com"
DEFAULT_PROFILE_URL = f"{LETTERBOXD_ORIGIN}/n2theoah/"
USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/140.0.0.0 Safari/537.36"
)
VOID_ELEMENTS = {
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
}


class ProfileParser(HTMLParser):
    """Extract the four cards from Letterboxd's two public profile grids."""

    SECTION_IDS = {
        "favourites": "favorites",
        "recent-activity": "recent",
    }

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.depth = 0
        self.section: str | None = None
        self.section_depth: int | None = None
        self.item: dict[str, object] | None = None
        self.item_depth: int | None = None
        self.rating_depth: int | None = None
        self.rating_text: list[str] = []
        self.results: dict[str, list[dict[str, object]]] = {
            "favorites": [],
            "recent": [],
        }

    @staticmethod
    def _classes(attributes: dict[str, str]) -> set[str]:
        return set(attributes.get("class", "").split())

    @staticmethod
    def _best_image(attributes: dict[str, str]) -> str:
        srcset = attributes.get("srcset", "").strip()
        if srcset:
            candidates = [candidate.strip() for candidate in srcset.split(",")]
            return candidates[-1].split()[0]
        return attributes.get("src", "").strip()

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag not in VOID_ELEMENTS:
            self.depth += 1

        attributes = {key: value or "" for key, value in attrs}

        if tag == "section" and attributes.get("id") in self.SECTION_IDS:
            self.section = self.SECTION_IDS[attributes["id"]]
            self.section_depth = self.depth
            return

        if not self.section:
            return

        if tag == "li" and "griditem" in self._classes(attributes):
            self.item = {
                "slug": "",
                "title": "",
                "link": "",
                "poster_url": "",
                "rating": "",
                "liked": False,
                "reviewed": False,
            }
            self.item_depth = self.depth
            return

        if self.item is None:
            return

        classes = self._classes(attributes)

        if tag == "div" and "react-component" in classes and attributes.get("data-item-slug"):
            self.item["slug"] = attributes["data-item-slug"]
            self.item["title"] = attributes.get("data-item-full-display-name", "")
            self.item["link"] = urljoin(
                LETTERBOXD_ORIGIN,
                attributes.get("data-target-link") or attributes.get("data-item-link", ""),
            )
        elif tag == "img" and not self.item["poster_url"]:
            self.item["poster_url"] = self._best_image(attributes)
        elif tag == "span" and "rating" in classes:
            if any(class_name.startswith("rated-") for class_name in classes):
                self.rating_depth = self.depth
                self.rating_text = []
            if "liked" in classes:
                self.item["liked"] = True
        elif tag == "a" and "icon-review" in classes:
            self.item["reviewed"] = True

    def handle_data(self, data: str) -> None:
        if self.rating_depth is not None:
            self.rating_text.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag == "span" and self.rating_depth == self.depth and self.item is not None:
            self.item["rating"] = " ".join(self.rating_text).strip()
            self.rating_depth = None
            self.rating_text = []

        if tag == "li" and self.item_depth == self.depth and self.item is not None:
            if all(self.item[key] for key in ("slug", "title", "link", "poster_url")):
                self.results[self.section or "recent"].append(self.item)
            self.item = None
            self.item_depth = None

        if tag == "section" and self.section_depth == self.depth:
            self.section = None
            self.section_depth = None

        if tag not in VOID_ELEMENTS:
            self.depth -= 1


def locate_chrome() -> str:
    configured = os.environ.get("CHROME_PATH")
    candidates = [
        configured,
        shutil.which("google-chrome"),
        shutil.which("google-chrome-stable"),
        shutil.which("chromium"),
        shutil.which("chromium-browser"),
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    ]
    for candidate in candidates:
        if candidate and Path(candidate).is_file():
            return candidate
    raise RuntimeError("Chrome was not found; set CHROME_PATH to its executable")


def fetch_profile_html(profile_url: str) -> str:
    command = [
        locate_chrome(),
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--disable-blink-features=AutomationControlled",
        f"--user-agent={USER_AGENT}",
        "--virtual-time-budget=10000",
        "--dump-dom",
        profile_url,
    ]
    completed = subprocess.run(command, check=True, capture_output=True, text=True, timeout=60)
    return completed.stdout


def parse_profile(html: str) -> dict[str, list[dict[str, object]]]:
    parser = ProfileParser()
    parser.feed(html)
    for section in ("favorites", "recent"):
        films = parser.results[section][:4]
        if len(films) != 4:
            raise RuntimeError(f"Expected four {section} films, found {len(films)}")
        parser.results[section] = films
    return parser.results


def safe_slug(value: str) -> str:
    slug = re.sub(r"[^a-z0-9-]+", "-", value.lower()).strip("-")
    if not slug:
        raise RuntimeError(f"Could not create a filename for Letterboxd slug: {value!r}")
    return slug


def download_image(url: str, destination: Path) -> None:
    request = urllib.request.Request(
        url,
        headers={"User-Agent": USER_AGENT, "Referer": f"{LETTERBOXD_ORIGIN}/"},
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        content_type = response.headers.get_content_type()
        data = response.read()
    if not content_type.startswith("image/") or len(data) < 1_000:
        raise RuntimeError(f"Letterboxd poster download was not a valid image: {url}")
    destination.write_bytes(data)


def write_output(
    parsed: dict[str, list[dict[str, object]]],
    profile_url: str,
    data_path: Path,
    poster_directory: Path,
) -> None:
    poster_directory.parent.mkdir(parents=True, exist_ok=True)
    data_path.parent.mkdir(parents=True, exist_ok=True)
    temporary_posters = Path(
        tempfile.mkdtemp(prefix="letterboxd-posters-", dir=poster_directory.parent)
    )

    output: dict[str, object] = {"profile_url": profile_url}
    try:
        for section, films in parsed.items():
            section_directory = temporary_posters / section
            section_directory.mkdir(parents=True)
            output_films: list[dict[str, object]] = []
            for film in films:
                filename = f"{safe_slug(str(film['slug']))}.jpg"
                download_image(str(film["poster_url"]), section_directory / filename)
                output_films.append(
                    {
                        "slug": film["slug"],
                        "title": film["title"],
                        "link": film["link"],
                        "poster": f"/assets/img/letterboxd/{section}/{filename}",
                        "rating": film["rating"],
                        "liked": film["liked"],
                        "reviewed": film["reviewed"],
                    }
                )
            output[section] = output_films

        temporary_data = data_path.with_suffix(f"{data_path.suffix}.tmp")
        temporary_data.write_text(
            json.dumps(output, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )

        backup_directory = poster_directory.with_name(f"{poster_directory.name}-backup")
        if backup_directory.exists():
            shutil.rmtree(backup_directory)
        if poster_directory.exists():
            poster_directory.replace(backup_directory)
        installed_new_posters = False
        try:
            temporary_posters.replace(poster_directory)
            installed_new_posters = True
            temporary_data.replace(data_path)
        except Exception:
            if installed_new_posters and poster_directory.exists():
                shutil.rmtree(poster_directory)
            if backup_directory.exists():
                backup_directory.replace(poster_directory)
            raise
        if backup_directory.exists():
            shutil.rmtree(backup_directory)
    except Exception:
        if temporary_posters.exists():
            shutil.rmtree(temporary_posters)
        temporary_data = data_path.with_suffix(f"{data_path.suffix}.tmp")
        if temporary_data.exists():
            temporary_data.unlink()
        raise


def parse_arguments() -> argparse.Namespace:
    repository_root = Path(__file__).resolve().parents[1]
    parser = argparse.ArgumentParser()
    parser.add_argument("--profile-url", default=DEFAULT_PROFILE_URL)
    parser.add_argument(
        "--html-file",
        type=Path,
        help="Parse a saved profile fragment instead of launching Chrome",
    )
    parser.add_argument(
        "--output-data",
        type=Path,
        default=repository_root / "_data" / "letterboxd.json",
    )
    parser.add_argument(
        "--poster-directory",
        type=Path,
        default=repository_root / "assets" / "img" / "letterboxd",
    )
    return parser.parse_args()


def main() -> None:
    arguments = parse_arguments()
    html = (
        arguments.html_file.read_text(encoding="utf-8")
        if arguments.html_file
        else fetch_profile_html(arguments.profile_url)
    )
    parsed = parse_profile(html)
    write_output(parsed, arguments.profile_url, arguments.output_data, arguments.poster_directory)
    print("Updated four Letterboxd favorites and four recent films")


if __name__ == "__main__":
    main()
