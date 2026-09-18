---
ruleId: "1.1.1"
type: fail
title: "Missing alt text on an informative image"
snippetLang: html
snippet: |
  <img src="quarterly-sales-chart.png">
correctAnswer: Missing alt text — a screen reader announces only "image," giving no information about what the chart shows.
distractors:
  - The image is saved as a PNG instead of an SVG, and PNG images can't be resized without losing quality on high-density screens.
  - The image is missing explicit width and height attributes, which causes a layout shift as the page finishes loading.
  - Nothing is wrong here — chart images are considered decorative, and WCAG doesn't require alt text for decorative content.
---
