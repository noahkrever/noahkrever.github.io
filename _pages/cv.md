---
layout: cv
permalink: /cv/
title: cv
nav: true
nav_order: 3
cv_pdf: cv.pdf
---

<script>
  window.location.href = "{{ '/assets/pdf/' | append: page.cv_pdf | relative_url }}";
</script>

<p>
  If you are not redirected automatically,
  <a href="{{ '/assets/pdf/' | append: page.cv_pdf | relative_url }}">
    click here to open my CV (PDF).
  </a>
</p>