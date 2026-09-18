---
ruleId: "3.1.1"
type: pass
title: "lang attribute set correctly"
snippetLang: html
snippet: |
  <html lang="en">
    <head><title>Welcome</title></head>
    <body>...</body>
  </html>
correctAnswer: "lang=\"en\" tells assistive technology the page's primary language, so it applies the correct pronunciation and voice."
distractors:
  - This passes only because "en" is the most common language code.
  - The lang attribute should be on the body element, not html.
  - This still fails because lang must include a region, like en-US.
---
