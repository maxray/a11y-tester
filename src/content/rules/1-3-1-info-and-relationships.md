---
id: "1.3.1"
title: Info and Relationships
level: A
principle: perceivable
summary: Structure and relationships conveyed visually (headings, lists, table headers, form labels) must also be conveyed programmatically, not just through layout or styling.
---
Sighted users infer structure from visual cues — a bigger, bolder line reads as a heading; items lined up with bullets read as a list. Assistive technology can't see those cues; it needs the underlying markup (`<h1>`–`<h6>`, `<ul>`/`<ol>`, `<table>` with `<th>`, `<label>`) to expose the same structure programmatically.

A common failure is using CSS alone to make text "look like" a heading or a table, when the underlying markup is just generic `<div>`s or `<p>`s with no semantic meaning.
