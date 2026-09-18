---
ruleId: "2.4.7"
type: fail
title: "Outline removed with no replacement"
snippetLang: css
snippet: |
  button:focus {
    outline: none;
  }
correctAnswer: "This removes the browser's default focus ring and replaces it with nothing, so a keyboard user tabbing through the page can't see which button is focused."
distractors:
  - The selector should be button:hover instead of button:focus.
  - outline should be set with a pixel value, not the keyword none.
  - Nothing is wrong with this example.
---
