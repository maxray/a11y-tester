---
ruleId: "1.4.4"
type: pass
title: "Flexible container with relative units"
snippetLang: css
snippet: |
  .card {
    min-height: 5rem;
    font-size: 1rem;
  }
correctAnswer: "min-height and rem-based font-size let the card grow naturally as text scales, so nothing is clipped at 200% zoom."
distractors:
  - This passes only because there's no overflow property at all.
  - rem units are purely a coding-style choice with no accessibility effect.
  - This still fails because min-height should be a fixed pixel value.
---
