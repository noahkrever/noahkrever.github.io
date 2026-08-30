---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
_styles: >
  .post-header { display: none; }
  .post-title { font-size: 2.1rem !important; font-weight: 700 !important; margin-bottom: 0 !important; }
  .publication-section + .publication-section { margin-top: 3rem; }
  .publication-section .publications { margin-top: 1.5rem !important; }
  .publication-section--published .publications { margin-top: 0 !important; }
  .publications h2.bibliography:first-child { margin-top: 0.5rem !important; }
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<section class="publication-section" aria-labelledby="working-papers-heading">
  <h1 id="working-papers-heading" class="post-title">Working Papers</h1>

  <div class="publications">
    {% bibliography --group_by none --query @*[working_paper=true]* %}
  </div>
</section>

<section class="publication-section publication-section--published" aria-labelledby="publications-heading">
  <h1 id="publications-heading" class="post-title">Publications</h1>

  <div class="publications">
    {% bibliography --query @*[working_paper=false]* %}
  </div>
</section>
