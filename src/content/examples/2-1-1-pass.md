---
ruleId: "2.1.1"
type: pass
title: "Real button element"
snippetLang: html
snippet: |
  <button type="button" onclick="submitForm()">Submit</button>
correctAnswer: "A native <button> is focusable by default and already handles Enter and Space to activate it, with no extra keyboard code needed."
distractors:
  - This passes only because the visible label happens to say "Submit," not because of the underlying element that was used.
  - The type="button" attribute is unnecessary here and could be removed without changing how the button behaves in any way.
  - This still fails because native buttons also need an explicit tabindex attribute to be reachable by keyboard.
---
