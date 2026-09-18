---
ruleId: "3.3.2"
type: fail
title: "Placeholder used instead of a label"
snippetLang: html
snippet: |
  <input type="email" placeholder="Email address">
correctAnswer: "There's no associated <label>, so the field has no accessible name once the placeholder disappears — a screen reader may announce nothing more than \"edit text.\""
distractors:
  - The input should use type="text" instead of type="email".
  - Placeholder text should always be lowercase.
  - Nothing is wrong with this example.
---
