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
  - This passes only because the color chosen is blue.
  - focus-visible is not supported by any browser.
  - This still fails because outline-offset should be 0.
---
