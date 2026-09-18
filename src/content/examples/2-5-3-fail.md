---
ruleId: "2.5.3"
type: fail
title: "aria-label doesn't match visible text"
snippetLang: html
snippet: |
  <button aria-label="Submit your order now">Search</button>
correctAnswer: "The visible label reads \"Search,\" but the accessible name is completely different text, so a speech-input user saying \"click Search\" won't match this control."
distractors:
  - The button has no type attribute set.
  - aria-label should never be used on a button element.
  - Nothing is wrong with this example.
---
