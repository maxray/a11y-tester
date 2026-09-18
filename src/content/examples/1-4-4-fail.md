---
ruleId: "1.4.4"
type: fail
title: "Fixed-height container clips zoomed text"
snippetLang: css
snippet: |
  .card {
    height: 80px;
    overflow: hidden;
    font-size: 16px;
  }
correctAnswer: "The fixed pixel height combined with overflow: hidden means text gets cut off once the user zooms to 200% and the content grows taller than 80px."
distractors:
  - The font-size should be set in pixels, not rem.
  - Cards should never have a background color.
  - Nothing is wrong with this example.
---
