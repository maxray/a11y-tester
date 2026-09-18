---
ruleId: "3.3.2"
type: fail
title: "Placeholder used instead of a label"
snippetLang: html
snippet: |
  <input type="email" placeholder="Email address">
correctAnswer: "There's no associated <label>, so the field has no accessible name once the placeholder disappears — a screen reader may announce nothing more than \"edit text.\""
distractors:
  - The input uses type="email" instead of type="text", which restricts what kind of values a user is able to type into the field.
  - Placeholder text is written with a capital letter instead of being lowercase, which is inconsistent with typical form conventions.
  - Nothing is wrong here — placeholder text is commonly used instead of a label to keep forms looking clean and minimal.
---
