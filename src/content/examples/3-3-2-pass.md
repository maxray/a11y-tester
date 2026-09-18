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
  - This passes only because the visible label text happens to match the purpose of the field being described.
  - The label element needs to come after the input it describes, not before it, for the association to work.
  - This still fails because a placeholder should also be added alongside the label to hint at the expected input format.
---
