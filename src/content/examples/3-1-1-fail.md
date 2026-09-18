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
  - The title element appears before the html tag is opened, which isn't valid placement according to the HTML specification.
  - The doctype declaration has been left out of this snippet, which can cause browsers to render the page in quirks mode.
  - Nothing is wrong here — screen readers can usually detect a page's language automatically from its text content.
---
