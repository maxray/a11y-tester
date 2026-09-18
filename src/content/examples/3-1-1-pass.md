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
  - This passes only because "en" happens to be the most widely used language code on the web.
  - The lang attribute should be set on the body element instead of the html element for it to take effect.
  - This still fails because the lang attribute needs to include a region code, such as en-US, to be valid.
---
