---
ruleId: "1.4.3"
type: fail
title: "Light grey text on white"
snippetLang: css
snippet: |
  .footer-text {
    color: #b3b3b3;
    background: #ffffff;
    font-size: 14px;
  }
correctAnswer: "The contrast ratio between #b3b3b3 and #ffffff is roughly 2:1 — well below the 4.5:1 minimum required for normal-sized text."
distractors:
  - The font-size is set in pixels instead of rem units.
  - The class name should describe color, not location.
  - Nothing is wrong with this example.
---
