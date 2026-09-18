---
id: "2.4.7"
title: Focus Visible
level: AA
principle: operable
summary: Whichever element currently has keyboard focus must have a visible indicator, so keyboard users can always tell where they are on the page.
---
Keyboard and switch-device users navigate by tabbing between interactive elements. Without a visible focus indicator, they lose track of where they are entirely — they're essentially navigating blind.

The most common failure is a global `outline: none` (or `:focus { outline: 0; }`) applied for aesthetic reasons, removing the browser's default focus ring without providing any visible replacement.
