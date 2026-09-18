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
  - This passes only because the title happens to include the company name at the end, not because of its overall structure.
  - The em dash character used to separate the two parts of the title isn't announced correctly by screen readers.
  - This still fails because the title should exactly match the page's visible h1 heading, word for word.
---
