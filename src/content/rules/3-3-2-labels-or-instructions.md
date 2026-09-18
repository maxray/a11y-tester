---
id: "3.3.2"
title: Labels or Instructions
level: A
principle: understandable
summary: Form inputs need labels or instructions describing what's expected, programmatically associated so assistive technology can announce them.
---
Every form field needs a label that's associated with it in code — usually a `<label>` linked by `for`/`id`, or `aria-label`/`aria-labelledby`. Placeholder text alone doesn't count: it disappears the moment the user starts typing, and many screen readers don't announce it reliably or at all.

Fields with formatting requirements (a date format, a password's minimum length) should also expose that instruction programmatically, not just as unlabeled placeholder or nearby text with no association.
