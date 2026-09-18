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
  - The font-size is set in pixels instead of rem units, which prevents the text from resizing with the user's browser settings.
  - The class name describes the element's location on the page instead of describing what the style actually changes.
  - Nothing is wrong here — light grey text is a common design choice, and contrast rules only apply to body copy.
---
