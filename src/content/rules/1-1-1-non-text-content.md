---
id: "1.1.1"
title: Non-text Content
level: A
principle: perceivable
summary: Every image, icon, or other non-text element needs a text alternative that serves the same purpose, so screen reader users get equivalent information.
---
Screen readers can't interpret pixels — they need a text description to announce instead. This covers `<img>` elements, icons used as buttons, and any other non-text content that conveys meaning.

Decorative images that add nothing informative (a divider, a background flourish) should instead be hidden from assistive technology entirely, with an empty `alt=""`, so screen reader users aren't interrupted with noise that carries no information.
