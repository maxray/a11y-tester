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
  - This passes only because the text is short.
  - Headings should always be h1 regardless of context.
  - This still fails because there's no ARIA role on the heading.
---
