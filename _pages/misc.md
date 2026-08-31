---
layout: page
title: Misc.
permalink: /misc/
nav: true
nav_order: 5
_styles: |
  .post-header { display: none; }
  @media (min-width: 576px) { .chess-gif-column { transform: translateY(-2.5%); } }
  .letterboxd-widget { width: 100%; }
  .letterboxd-section + .letterboxd-section { margin-top: 1rem; }
  .letterboxd-heading-row {
    align-items: center;
    border-bottom: 1px solid var(--global-divider-color);
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.65rem;
    padding-bottom: 0.3rem;
  }
  .letterboxd-heading,
  .letterboxd-all-link {
    color: var(--global-text-color-light);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-decoration: none;
    text-transform: uppercase;
  }
  .letterboxd-heading:hover,
  .letterboxd-all-link:hover { color: var(--global-theme-color); }
  .letterboxd-grid {
    display: grid;
    gap: 0.45rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .letterboxd-card { min-width: 0; }
  .letterboxd-poster-link { display: block; }
  .letterboxd-poster {
    aspect-ratio: 2 / 3;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.3rem;
    display: block;
    height: auto;
    object-fit: contain;
    transition: border-color 150ms ease, transform 150ms ease;
    width: 100%;
  }
  .letterboxd-poster-link:hover .letterboxd-poster {
    border-color: var(--global-theme-color);
    transform: translateY(-2px);
  }
  .letterboxd-meta {
    align-items: center;
    color: var(--global-text-color-light);
    display: flex;
    font-size: 0.66rem;
    gap: 0.18rem;
    line-height: 1;
    min-height: 1rem;
    padding-top: 0.3rem;
    white-space: nowrap;
  }
  .letterboxd-rating { letter-spacing: -0.08em; }
  .letterboxd-liked,
  .letterboxd-reviewed { font-size: 0.7rem; }
  .chess-gif-caption { font-size: 0.7rem; line-height: 1.25; }
  @media (min-width: 992px) {
    .letterboxd-widget { margin-left: auto; max-width: 24rem; }
  }
  @media (max-width: 991.98px) {
    .letterboxd-widget { margin-left: auto; margin-right: auto; max-width: 34rem; }
  }
---

<h1 style="font-size: 2.1rem; font-weight: 700; margin-bottom: 0.25rem;">Miscellaneous Things</h1>

<hr>

## Poker

<div class="row align-items-center mt-3">
  <div class="col-sm-6">
    {% include figure.liquid loading="eager" path="assets/img/poker.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Running deep in the 2025 Venetian $1,100 MSPT in Las Vegas" %}
  </div>
  <div class="col-sm-6" markdown="1">
I've been playing poker seriously for several years, with a focus on [No-Limit Texas Hold'em](https://en.wikipedia.org/wiki/Texas_hold_%27em) cash games. I founded the [Columbia Poker Club](https://www.columbiapoker.club/) as an undergraduate, have been a semi-professional player, and have coached many eager students. While I don't play or study nearly as many tournaments as cash games, you can check out my live [MTT](https://upswingpoker.com/glossary/mtt/) results on my [Hendon Mob](https://pokerdb.thehendonmob.com/player.php?a=r&n=1104607) profile.

Poker is a microcosm of the most fascinating elements of computational, economic, and strategic thinking surrounding the major areas of my research. I'm always excited to analyze and solve problems that deal with decisions and uncertainty; poker is simply an opportunity to enjoy this framework of structured, algorithmic thinking in real life.

  </div>
</div>

<div class="row align-items-center mt-1">
  <div class="col-sm-6" markdown="1">
I play both live and online, and I've spent a lot of time studying game theory optimal [(GTO)](https://upswingpoker.com/glossary/game-theory-optimal-gto/) strategy and solver outputs. I've always been fascinated by superhuman performance in strategy games, and my poker philosophy integrates objective theory with human elements like table dynamics, reads, and opponent-based adjustments. I often think about how and why exploitative strategies may outperform GTO, and this theme of reality deviating from the theoretical has also become a common subject in my research.

For coaching, hand-reviews, database analysis, heads-up challenges, or anything poker-related, feel free to reach out.

  </div>
  <div class="col-sm-6">
    {% include figure.liquid loading="eager" path="assets/img/pokerhu.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="Heads-up (final 2) at the 2022 Collegiate Series of Poker" %}
  </div>
</div>

<div class="row align-items-center mt-3">
  <div class="col-sm-6">
    {% include figure.liquid loading="eager" path="assets/img/ft.jpeg" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm-6">
    {% include figure.liquid loading="eager" path="assets/img/winner.jpeg" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-12">
    <div class="caption">Final table of the 2026 \$1,100 Wynn Summer Classic, celebrating a \$25k score</div>
  </div>
</div>

---

## Chess

<div class="row align-items-center mt-3">
  <div class="col-sm-8" markdown="1">

Chess is another game I've played for most of my life. Like poker, I find it satisfying as a domain where you can make progress through studying, refining your pattern-recognition, and logical thinking. I particularly enjoy online speed chess. These days, my ratings on [lichess.org](https://lichess.org) typically hover around 2100 in blitz, and 2200 in bullet. I'm always down for a challenge!

My favorite opening is the [Smith-Morra Gambit](https://en.wikipedia.org/wiki/Smith%E2%80%93Morra_Gambit) (1.e4 c5 2.d4 cxd4 3.c3). While unassuming on the surface, it's capable of generating a thick maze of sharp, double-edged complications that put Black under serious pressure very quickly. It has produced some remarkable games, with [IM Marc Esserman vs. GM Loek van Wely](https://www.chessgames.com/perl/chessgame?gid=1630005) being a personal favorite. For fans of romantic, tactical chess who are looking for a weapon against the Sicilian, I'd strongly recommend Esserman's book [Mayhem in the Morra](https://forwardchess.com/product/mayhem-in-the-morra), which provides both comprehensive opening theory and plenty of funny stories.

  </div>
  <div class="chess-gif-column col-sm-4 mt-3 mt-sm-0">
    <img
      src="{{ '/assets/img/chess_game.gif' | relative_url }}"
      class="img-fluid rounded z-depth-1"
      alt="Animated replay of a chess game on Lichess"
      loading="eager"
    >
    <div class="caption chess-gif-caption">Fun Smith-Morra blitz game I played in 2024</div>
  </div>
</div>

---

<div class="row align-items-start">
  <div class="col-lg-7" markdown="1">

## Movies

In addition to playing and studying games, I also love to watch and write about movies. I'm an AMC A-Lister and you'll catch me at all the big new releases, but I also really love the classics and generally expanding my film horizons. Recently, I've been on a huge Asian cinema kick. A few favorites: [_Cure_](https://letterboxd.com/n2theoah/film/cure/) (my all-time favorite film), [_Pulse_](https://letterboxd.com/n2theoah/film/pulse-2001/), [_Memories of Murder_](https://letterboxd.com/n2theoah/film/memories-of-murder/), and [_Chungking Express_](https://letterboxd.com/n2theoah/film/chungking-express/). I try to log and review everything I watch on my [Letterboxd](https://boxd.it/8NtDd).

In the world of STEM research, I find having a hobby that engages with the arts and involves some non-academic writing is a healthy way to stay grounded.

  </div>
  <div class="col-lg-5 mt-4 mt-lg-0">
    <div class="letterboxd-widget" aria-label="Letterboxd favorites and recent activity">
      <section class="letterboxd-section" aria-labelledby="letterboxd-favorites-heading">
        <div class="letterboxd-heading-row">
          <a
            id="letterboxd-favorites-heading"
            class="letterboxd-heading"
            href="{{ site.data.letterboxd.profile_url }}"
            target="_blank"
            rel="noopener noreferrer"
          >Favorite Films</a>
        </div>
        <div class="letterboxd-grid">
          {% for film in site.data.letterboxd.favorites %}
            <div class="letterboxd-card">
              <a
                class="letterboxd-poster-link"
                href="{{ film.link }}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View {{ film.title | escape }} on Letterboxd"
                title="{{ film.title | escape }}"
              >
                <img
                  class="letterboxd-poster"
                  src="{{ film.poster | relative_url }}"
                  alt="Poster for {{ film.title | escape }}"
                  loading="lazy"
                  width="300"
                  height="450"
                >
              </a>
            </div>
          {% endfor %}
        </div>
      </section>

      <section class="letterboxd-section" aria-labelledby="letterboxd-recent-heading">
        <div class="letterboxd-heading-row">
          <a
            id="letterboxd-recent-heading"
            class="letterboxd-heading"
            href="{{ site.data.letterboxd.profile_url }}"
            target="_blank"
            rel="noopener noreferrer"
          >Recent Activity</a>
          <a
            class="letterboxd-all-link"
            href="{{ site.data.letterboxd.profile_url | append: 'films/' }}"
            target="_blank"
            rel="noopener noreferrer"
          >All</a>
        </div>
        <div class="letterboxd-grid">
          {% for film in site.data.letterboxd.recent %}
            <div class="letterboxd-card">
              <a
                class="letterboxd-poster-link"
                href="{{ film.link }}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View {{ film.title | escape }} on Letterboxd"
                title="{{ film.title | escape }}"
              >
                <img
                  class="letterboxd-poster"
                  src="{{ film.poster | relative_url }}"
                  alt="Poster for {{ film.title | escape }}"
                  loading="lazy"
                  width="300"
                  height="450"
                >
              </a>
              <div class="letterboxd-meta" aria-label="Activity for {{ film.title | escape }}">
                {% if film.rating != '' %}<span class="letterboxd-rating" title="Rated {{ film.rating }}">{{ film.rating }}</span>{% endif %}
                {% if film.liked %}<span class="letterboxd-liked" title="Liked" aria-label="Liked">♥</span>{% endif %}
                {% if film.reviewed %}<span class="letterboxd-reviewed" title="Reviewed" aria-label="Reviewed">≡</span>{% endif %}
              </div>
            </div>
          {% endfor %}
        </div>
      </section>
    </div>

  </div>
</div>

---

## Research Assistants

<div class="row mt-3">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cookie.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="Cookie" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/franklin.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="Franklin" %}
  </div>
</div>
