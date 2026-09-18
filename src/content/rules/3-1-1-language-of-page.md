---
id: "3.1.1"
title: Language of Page
level: A
principle: understandable
summary: The page's primary language must be set programmatically via the html lang attribute, so screen readers use the correct pronunciation rules.
---
Screen readers use the declared language to choose voice, pronunciation, and reading rules. Without `lang` on the `<html>` element (or with the wrong value), a screen reader may read English content with a different language's pronunciation, making it hard or impossible to understand.

The value should be a valid BCP 47 language tag — `lang="en"` for English, `lang="fr"` for French, and so on.
