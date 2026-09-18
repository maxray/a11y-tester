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
  - The selector targets the focus state instead of the hover state, which is the wrong state to style for this purpose.
  - The outline property is set using the keyword none instead of a pixel value like 0px, which browsers interpret differently.
  - Nothing is wrong here — removing the default outline is a common way to achieve a cleaner, more modern visual look for buttons.
---
