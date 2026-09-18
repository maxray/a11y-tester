---
ruleId: "2.4.7"
type: pass
title: "Custom, visible focus style"
snippetLang: css
snippet: |
  button:focus-visible {
    outline: 3px solid #1d4ed8;
    outline-offset: 2px;
  }
correctAnswer: "The default outline is replaced with a clearly visible custom style, so keyboard focus is still obvious — it's restyled, not removed."
distractors:
  - This passes only because the color chosen for the outline happens to be blue rather than another color.
  - The focus-visible pseudo-class isn't supported in any modern browser, so this style will never actually be applied.
  - This still fails because the outline-offset value should always be set to zero instead of a positive number.
---
