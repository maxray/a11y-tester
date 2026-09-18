---
id: "1.4.4"
title: Resize Text
level: AA
principle: perceivable
summary: Text must be able to be resized up to 200% without assistive technology, and without losing content or functionality.
---
People with low vision often zoom the browser to 200% to read comfortably. If a layout breaks, text gets clipped, or content overlaps at that zoom level, those users are locked out.

The most common cause is text or containers sized in fixed pixel units with `overflow: hidden`, and layouts that assume a fixed viewport rather than using relative units (`rem`, `em`, `%`) that scale with the user's browser zoom or font-size settings.
