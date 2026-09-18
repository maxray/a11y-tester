---
ruleId: "2.5.3"
type: pass
title: "Accessible name includes the visible text"
snippetLang: html
snippet: |
  <button aria-label="Search products">Search</button>
correctAnswer: "The accessible name \"Search products\" starts with the visible text \"Search,\" so a speech-input command like \"click Search\" still matches."
distractors:
  - This passes only because the extra word is "products".
  - aria-label is unnecessary here and should be removed entirely.
  - This still fails because the strings aren't character-for-character identical.
---
