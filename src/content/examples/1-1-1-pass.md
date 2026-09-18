---
ruleId: "1.1.1"
type: pass
title: "Descriptive alt text on an informative image"
snippetLang: html
snippet: |
  <img src="quarterly-sales-chart.png"
       alt="Bar chart: quarterly sales rose from $2M in Q1 to $3.4M in Q4">
correctAnswer: The alt text describes the actual content and meaning of the chart, not just that an image exists.
distractors:
  - This still fails because alt text should never exceed a couple of words, and this description is far too long to be useful.
  - This still fails because charts and graphs should always be built with an accessible data table instead of an image.
  - This passes only because the image also has a visible caption underneath it describing the same information.
---
