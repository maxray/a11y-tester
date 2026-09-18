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
  - This passes only because the background color is pure white rather than an off-white or cream tone.
  - This still fails because 14px is considered too small for anyone to read comfortably, regardless of contrast.
  - This passes because grey text is always considered accessible as long as it isn't pure white on white.
---
