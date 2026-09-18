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
  - The alt text is too long and should be shortened to one word.
  - This still fails because images should never be used for data.
  - The image needs a caption element instead of alt text.
---
