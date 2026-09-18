---
ruleId: "4.1.2"
type: fail
title: "Custom toggle with no role or state"
snippetLang: html
snippet: |
  <div class="toggle" onclick="toggleDarkMode()"></div>
correctAnswer: "This div has no role, no accessible name, and no exposed state — a screen reader announces nothing useful, and there's no way to tell if it's on or off."
distractors:
  - The onclick handler should be renamed to something shorter.
  - The class name "toggle" is a reserved CSS keyword.
  - Nothing is wrong with this example.
---
