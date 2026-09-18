---
ruleId: "3.3.2"
type: pass
title: "Properly associated label"
snippetLang: html
snippet: |
  <label for="email">Email address</label>
  <input type="email" id="email">
correctAnswer: "The for/id pairing programmatically associates the label with the input, so a screen reader announces \"Email address, edit text\" when it receives focus."
distractors:
  - This passes only because the label text matches the field's purpose.
  - The label must come after the input, not before it.
  - This still fails because it also needs a placeholder.
---
