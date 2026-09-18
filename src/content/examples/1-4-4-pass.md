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
  - This passes only because there's no overflow property set at all, not because of the units used for sizing.
  - Using rem units is purely a matter of coding style here and has no real effect on accessibility or zoom behavior.
  - This still fails because min-height should always be set as a fixed pixel value rather than a relative unit.
---
