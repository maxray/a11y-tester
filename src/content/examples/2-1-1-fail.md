---
ruleId: "2.1.1"
type: fail
title: "Clickable div acting as a button"
snippetLang: html
snippet: |
  <div class="btn" onclick="submitForm()">Submit</div>
correctAnswer: "A <div> isn't focusable or keyboard-operable by default — a keyboard-only user can't tab to it or activate it, no matter how it's styled."
distractors:
  - The onclick attribute should be an addEventListener call instead.
  - The class name "btn" conflicts with common CSS frameworks.
  - Nothing is wrong with this example.
---
