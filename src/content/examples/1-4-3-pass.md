---
ruleId: "1.4.3"
type: pass
title: "Dark grey text on white"
snippetLang: css
snippet: |
  .footer-text {
    color: #595959;
    background: #ffffff;
    font-size: 14px;
  }
correctAnswer: "#595959 on #ffffff gives roughly a 7:1 contrast ratio, comfortably above the 4.5:1 minimum for normal text."
distractors:
  - This passes only because the background is pure white.
  - This still fails because 14px is too small to read.
  - This passes because grey text is always accessible.
---
