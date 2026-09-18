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
  - The class name "looks-like-h2" is bad practice.
  - The paragraph should come before the heading.
  - Nothing is wrong with this example.
---
