---
id: "2.5.3"
title: Label in Name
level: A
principle: operable
summary: When a control has a visible text label, its accessible name must contain that visible text, so speech-input users can refer to it by what they see.
---
People using speech recognition software (like Dragon NaturallySpeaking) operate controls by saying their visible label out loud — "Click Search." If the control's accessible name (set via `aria-label`, for instance) doesn't match or contain the visible text, that voice command fails silently.

This usually happens when a developer overrides the accessible name with an `aria-label` that differs from the visible text, often to add "extra" context for screen reader users without realizing it breaks voice control.
