---
ruleId: "2.4.2"
type: fail
title: "Generic, non-descriptive title"
snippetLang: html
snippet: |
  <head>
    <title>Untitled Document</title>
  </head>
correctAnswer: "The title gives no indication of what the page is about, so a screen reader user hears nothing useful when it loads, and it's indistinguishable from every other tab."
distractors:
  - The title tag is placed inside the head element instead of the body, which is not where browsers expect to find it.
  - Descriptive titles are only necessary on a site's homepage, since that's the page most likely to be bookmarked or shared.
  - Nothing is wrong here — generic titles like this are fine as long as the page also has a clear, descriptive heading near the top.
---
