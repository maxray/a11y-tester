---
ruleId: "3.1.1"
type: fail
title: "Missing lang attribute"
snippetLang: html
snippet: |
  <html>
    <head><title>Welcome</title></head>
    <body>...</body>
  </html>
correctAnswer: "There's no lang attribute on the html element, so a screen reader has no reliable way to know which pronunciation rules to use for the page's content."
distractors:
  - The title element should come before the html tag.
  - The doctype declaration is missing from this snippet.
  - Nothing is wrong with this example.
---
