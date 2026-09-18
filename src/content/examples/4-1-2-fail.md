---
ruleId: "4.1.2"
type: fail
title: "Custom toggle with no role or state"
snippetLang: html
snippet: |
  <div class="toggle" onclick="toggleDarkMode()"></div>
correctAnswer: "This div has no role, no accessible name, and no exposed state — a screen reader announces nothing useful, and there's no way to tell if it's on or off."
distractors:
  - The onclick handler function has a long, descriptive name instead of a short one, which is inconsistent with common conventions.
  - The class name "toggle" is technically a reserved CSS keyword that shouldn't be used for custom class names.
  - Nothing is wrong here — a styled div is a perfectly acceptable way to build a toggle switch as long as it's clickable.
---
