# Energy lines carousel template

The engine behind the 3 Nov 2026 crystals carousel (layout B "Grade", end page "a different room").

- `carousel.html?d=B&p=1..7` draws one page at 1080×1350. Copy lives in the array `S` (title, side/sub note, form, footer source). `|` = a hand-written line break.
- Forms (line drawings) live in `F`. `wane` = row of moons from tonight to the next new moon.
- Render: `node render.js` from this folder (Playwright) → `out-1..7.png`, and it logs any text overflow.
- Rules: the `lune-social-style` skill.
