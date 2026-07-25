# Design conventions

Reference doc. Load when the prompt is about visible copy, colours,
typography, or layout.

## Em dashes in copy

At most **one em dash** per page across rendered text (including
`document.title`). Page titles use plain ASCII hyphen
("About - Ben Young"), reserving the em-dash budget for body copy
where it can carry rhetorical weight.

Doesn't apply to code comments, commit messages, or this doc itself.

## Accessibility — WCAG 2.1 AA baseline

Every colour pairing that carries text or meaningful UI must meet
WCAG 2.1 AA:

- **Normal text**: contrast ≥ 4.5:1 against its background
- **Large text** (≥ 18pt regular, or 14pt+ bold): contrast ≥ 3:1
- **UI elements and non-text meaning**: contrast ≥ 3:1

Every form input needs a `<label htmlFor>` or `aria-label`.
Icon-only buttons need `aria-label`. Modals need focus lock,
escape-to-close, and `role="dialog" aria-modal="true"`.

## Standard text-block arrangement

For a section that opens with a thesis (H2), plants a supporting
line, and expands in body paragraphs, use a centred three-part
stack:

- H2 in the primary text colour
- Subheading in the secondary text colour at `text-lg leading-relaxed`
- Body paragraphs underneath

Spacing: `mb-4` between H2 and subheading; `mb-10` between subheading
and body; `gap-6` between body paragraphs.

## Palette

TBD — populate once the visual identity is decided. Do not reuse
the Bookbag `iw-*` palette; that's a separate brand.

Once decided, colour tokens live in a `src/styles/theme.css` file
exposed to Tailwind v4 via `@theme inline`. Use utility names
(e.g. `bg-brand-primary`) instead of inline hex codes.
