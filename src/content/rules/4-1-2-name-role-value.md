---
id: "4.1.2"
title: "Name, Role, Value"
level: A
principle: robust
summary: Custom UI components must expose a name, role, and current value/state to assistive technology, usually through correct semantic HTML or ARIA.
---
When native HTML elements aren't used for a custom widget — a `<div>`-based dropdown, a custom checkbox, a toggle switch — the browser has no built-in way to tell assistive technology what the thing is (its role), what it's called (its name), or its current state (its value, e.g. checked/expanded). ARIA attributes (`role`, `aria-label`, `aria-checked`, `aria-expanded`, etc.) have to fill that gap explicitly.

Wherever possible, using a native element (`<button>`, `<input type="checkbox">`, `<select>`) is simpler and more robust than reconstructing its semantics with ARIA on a generic element.
