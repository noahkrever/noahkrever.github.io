---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}


<div class="publications">
<h2>Published Papers</h2>
{% bibliography --query @article %}
</div>

<div class="manuscripts">
<h2>Unsubmitted and WIP Manuscripts</h2>
{% bibliography --query @unpublished %}
</div>