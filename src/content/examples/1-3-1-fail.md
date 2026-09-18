---
ruleId: "1.3.1"
type: fail
title: "Heading styled with CSS instead of a heading element"
snippetLang: html
snippet: |
  <div class="looks-like-h2">Shipping Details</div>
  <p>Enter your address below.</p>
correctAnswer: "Visually it looks like a heading, but it's a plain <div> — screen reader users navigating by headings will never find it."
distractors:
  - The class name "looks-like-h2" is misleading and should be renamed to something that doesn't reference a heading level at all.
  - The paragraph appears after the heading-styled div, and body text should always come before the heading that introduces it.
  - Nothing is wrong here — as long as a heading is styled to look distinct, screen readers can still detect it visually.
---
