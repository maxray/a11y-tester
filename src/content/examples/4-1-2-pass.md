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
  - This passes only because the aria-label happens to use the specific phrase "Dark mode" rather than any other wording.
  - The role="switch" attribute is redundant on a button element and should be removed since buttons already have an implicit role.
  - This still fails because interactive controls like this should always be built with a div instead of a native button element.
---
