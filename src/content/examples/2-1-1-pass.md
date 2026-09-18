---
ruleId: "2.1.1"
type: pass
title: "Real button element"
snippetLang: html
snippet: |
  <button type="button" onclick="submitForm()">Submit</button>
correctAnswer: "A native <button> is focusable by default and already handles Enter and Space to activate it, with no extra keyboard code needed."
distractors:
  - This passes only because the word "Submit" is used.
  - The type="button" attribute is unnecessary and does nothing.
  - This still fails because it needs an explicit tabindex.
---
