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
  - The font-size should be set in pixels rather than rem, since pixel values are more predictable across different browsers and devices.
  - Cards like this should never include a background color, since background colors can reduce the contrast of text placed on top.
  - "Nothing is wrong here — overflow: hidden is just a normal way to keep card layouts looking clean and consistent."
---
