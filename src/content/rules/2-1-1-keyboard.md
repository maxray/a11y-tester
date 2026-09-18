---
id: "2.1.1"
title: Keyboard
level: A
principle: operable
summary: All functionality must be operable through a keyboard alone, with no interaction that requires a mouse, touch, or other pointer.
---
Many people can't use a mouse at all — because of a motor impairment, because they're using a switch device, or because they rely on a screen reader, which is driven by the keyboard. Every interactive element (links, buttons, form controls, custom widgets) must be reachable with Tab and operable with Enter/Space/arrow keys as appropriate.

A frequent failure is a `<div>` or `<span>` wired up with a click handler to act as a button. It looks and works fine with a mouse, but it's invisible to keyboard navigation — it can't receive focus and has no keyboard event handling.
