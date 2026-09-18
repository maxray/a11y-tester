---
ruleId: "2.4.4"
type: pass
title: "Descriptive link text"
snippetLang: html
snippet: |
  <p>Our 2024 annual report is now available.
  <a href="/reports/2024.pdf">Download the 2024 annual report (PDF)</a>.</p>
correctAnswer: "The link text alone tells the user exactly what they'll get, even read out of context in a links list."
distractors:
  - This passes only because the link points to a PDF.
  - Links should never include file format information.
  - This still fails because the link text is too long.
---
