---
ruleId: "2.5.3"
type: pass
title: "Accessible name includes the visible text"
snippetLang: html
snippet: |
  <button aria-label="Search products">Search</button>
correctAnswer: "The accessible name \"Search products\" starts with the visible text \"Search,\" so a speech-input command like \"click Search\" still matches."
distractors:
  - This passes only because the extra word added to the accessible name happens to be "products" specifically.
  - The aria-label attribute isn't needed here at all and should be removed since the button already has visible text.
  - This still fails because the accessible name and the visible label need to match character-for-character with no extra words.
---
