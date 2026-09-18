---
ruleId: "2.4.4"
type: fail
title: "Vague 'click here' link"
snippetLang: html
snippet: |
  <p>Our 2024 annual report is now available.
  <a href="/reports/2024.pdf">Click here</a> to view it.</p>
correctAnswer: "Out of context — such as in a screen reader's links list — \"Click here\" gives no clue about where the link goes."
distractors:
  - The link should open in a new tab.
  - The file is a PDF instead of an HTML page.
  - Nothing is wrong with this example.
---
