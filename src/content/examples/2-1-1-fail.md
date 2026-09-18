---
ruleId: "2.1.1"
type: fail
title: "Clickable div acting as a button"
snippetLang: html
snippet: |
  <div class="btn" onclick="submitForm()">Submit</div>
correctAnswer: "A <div> isn't focusable or keyboard-operable by default — a keyboard-only user can't tab to it or activate it, no matter how it's styled."
distractors:
  - The onclick attribute is written as an inline handler instead of using addEventListener, which is considered outdated JavaScript practice.
  - The class name "btn" is too generic and likely conflicts with class names used by common CSS frameworks like Bootstrap.
  - Nothing is wrong here — as long as the div is styled to look like a button, users will know how to interact with it.
---
