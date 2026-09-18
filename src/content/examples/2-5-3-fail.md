---
ruleId: "2.5.3"
type: fail
title: "aria-label doesn't match visible text"
snippetLang: html
snippet: |
  <button aria-label="Submit your order now">Search</button>
correctAnswer: "The visible label reads \"Search,\" but the accessible name is completely different text, so a speech-input user saying \"click Search\" won't match this control."
distractors:
  - The button doesn't declare an explicit type attribute, which can cause it to behave like a submit button by default.
  - Using aria-label on a button element is never appropriate, since buttons should rely only on their visible text content.
  - Nothing is wrong here — aria-label is meant to provide extra context in addition to whatever text is already visible on screen.
---
