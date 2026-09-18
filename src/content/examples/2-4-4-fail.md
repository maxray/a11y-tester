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
  - The link should be set to open in a new browser tab so users don't lose their place on the page.
  - The linked file is a PDF rather than an HTML page, and PDFs are never considered an accessible file format.
  - Nothing is wrong here — "click here" is a widely recognized convention that most users immediately understand.
---
