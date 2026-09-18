---
ruleId: "1.3.1"
type: pass
title: "Real heading element"
snippetLang: html
snippet: |
  <h2>Shipping Details</h2>
  <p>Enter your address below.</p>
correctAnswer: "A real <h2> element exposes the section as a heading to assistive technology, so it shows up in a screen reader's headings list."
distractors:
  - This passes only because the heading text is short enough to read quickly, not because of the element used.
  - Headings should always be marked up as h1 regardless of where they sit in the page's structure or hierarchy.
  - This still fails because a heading also needs an explicit role="heading" attribute even when using a real heading element.
---
