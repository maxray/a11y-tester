---
ruleId: "2.4.2"
type: pass
title: "Descriptive, unique title"
snippetLang: html
snippet: |
  <head>
    <title>Contact Us – Acme Co</title>
  </head>
correctAnswer: "The title describes both the page's purpose (Contact Us) and the site it belongs to, so it's meaningful when announced or shown in a tab."
distractors:
  - This passes only because it includes the company name.
  - The em dash character is not accessible to screen readers.
  - This still fails because the title should match the H1 exactly.
---
