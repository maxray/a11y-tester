---
ruleId: "4.1.2"
type: pass
title: "Toggle exposes role, name, and state"
snippetLang: html
snippet: |
  <button role="switch" aria-checked="false" aria-label="Dark mode"
          onclick="toggleDarkMode()"></button>
correctAnswer: "role=\"switch\" declares what it is, aria-label gives it a name, and aria-checked exposes its current state — everything a screen reader needs to announce and track it."
distractors:
  - This passes only because aria-label uses the phrase "Dark mode".
  - role="switch" is redundant on a button element and should be removed.
  - This still fails because it should use a div instead of a button.
---
