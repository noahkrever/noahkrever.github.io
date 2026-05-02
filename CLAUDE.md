# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Jekyll-based academic portfolio website using the **al-folio** theme, hosted on GitHub Pages at `noahkrever.github.io`. Content is authored in Markdown/Liquid; Jekyll compiles to static HTML.

## Development Commands

**Recommended (Docker):**
```bash
docker compose pull   # pull latest image
docker compose up     # serve at http://localhost:8080
docker compose up --build  # rebuild after Gemfile changes
```

**Alternate slim image:**
```bash
docker compose -f docker-compose-slim.yml up
```

There are no test commands. CI is handled by GitHub Actions (`.github/workflows/`): deploy, Prettier formatting, broken-links check, Lighthouse, and CodeQL.

**Code formatting:**
```bash
npx prettier --write .   # formats Liquid/HTML/SCSS/JS/JSON via Prettier + Shopify plugin
```

## Architecture & Content Model

### Where to edit content

| What | Where |
|------|-------|
| Homepage bio, announcements | `_pages/about.md` |
| CV data | `_data/cv.yml` |
| Publications | `_bibliography/papers.bib` (BibTeX) |
| News items | `_news/*.md` |
| Blog posts | `_posts/YYYY-MM-DD-title.md` |
| Projects | `_projects/*.md` |
| Social links | `_data/socials.yml` |
| Co-author link config | `_data/coauthors.yml` |
| Site-wide settings | `_config.yml` |

### Key architectural points

- **Publications** are auto-rendered from `_bibliography/papers.bib` via `jekyll-scholar`. The `_pages/publications.md` page uses Liquid tags like `{% bibliography %}` — no manual HTML needed.
- **CV** is generated from `_data/cv.yml` (and optionally `assets/json/resume.json`). Edit the YAML, not the layout.
- **Layouts** live in `_layouts/*.liquid`. The hierarchy is: `default.liquid` → `page.liquid` → content-specific layouts (`about.liquid`, `post.liquid`, `bib.liquid`, `distill.liquid`, `cv.liquid`).
- **Custom plugins** in `_plugins/` extend Jekyll: citation counts from Google Scholar/InspireHEP, responsive image generation (requires ImageMagick), cache-busting, external post fetching.
- **Third-party JS/CSS** is downloaded at build time by `_plugins/download-3rd-party.rb` based on config in `_config.yml` under `third_party_libraries`.
- **Dark mode** is built-in and toggled client-side; avoid hardcoding colors that only work in one mode — use the theme's CSS variables.

### Front matter conventions

Pages in `_pages/` require at minimum:
```yaml
---
layout: about   # or page, post, distill, cv, etc.
title: My Title
permalink: /url-path/
---
```

Posts in `_posts/` follow `YYYY-MM-DD-slug.md` naming. Projects in `_projects/` use numeric or named filenames.

## Config Notes

- `_config.yml` controls nearly everything: profile image, social links, academic metadata, enabled plugins, third-party library versions, and publication badge visibility (Altmetric, Dimensions, Google Scholar, Inspire HEP).
- Changes to `_config.yml` require a server restart (Jekyll does not hot-reload it).
- The `exclude:` list in `_config.yml` keeps build artifacts and docs out of the compiled site.
