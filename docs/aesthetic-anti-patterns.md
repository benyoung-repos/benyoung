# Aesthetic anti-patterns for this site

Compiled 2026-07-25 after two rounds of palette proposals were caught
as "very Claude". The purpose of this document is to make the pattern
explicit so the next agent picking up this repo does not silently
drift back into it. Everything below is verifiable — no interpretation
of intent, no extrapolation about other AI tools or other sessions.

## What the pattern actually is (with source)

The visual identity of Anthropic — the company that ships this
assistant — is built from a specific palette and type combination.
The evidence is Anthropic's own public brand stylesheet, fetched
directly from `www.anthropic.com` on 2026-07-25:

```
https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/css/
  ant-brand.shared.67f55a9666b2ae2332f5f893.3a81f32e1.min.css
```

The `--swatch--*` custom properties in that stylesheet are the
verifiable ground truth for what "Anthropic looks like":

### Ivory / paper backgrounds (verbatim from anthropic.com CSS)

| Variable | Hex |
|---|---|
| `--swatch--ivory-light` | `#faf9f5` |
| `--swatch--ivory-medium` | `#f0eee6` |
| `--swatch--ivory-dark` | `#e8e6dc` |
| `--swatch--oat` | `#e3dacc` |
| `--swatch--manilla` | `#ebdbbc` |

### Slate / ink text

| Variable | Hex |
|---|---|
| `--swatch--slate-dark` | `#141413` |
| `--swatch--slate-medium` | `#3d3d3a` |
| `--swatch--slate-light` | `#5e5d59` |

### Warm neutrals

| Variable | Hex |
|---|---|
| `--swatch--cloud-light` | `#d1cfc5` |
| `--swatch--cloud-medium` | `#b0aea5` |
| `--swatch--cloud-dark` | `#87867f` |

### Primary accent (the "Anthropic terracotta" signature)

| Variable | Hex |
|---|---|
| `--swatch--clay` | `#d97757` |
| `--swatch--accent` | `#c6613f` |
| `--swatch--kraft` | `#d4a27f` |

### Secondary accents — muted, coordinated by low saturation

| Variable | Hex |
|---|---|
| `--swatch--olive` | `#788c5d` |
| `--swatch--cactus` | `#bcd1ca` |
| `--swatch--sky` | `#6a9bcc` |
| `--swatch--heather` | `#cbcadb` |
| `--swatch--coral` | `#ebcece` |
| `--swatch--fig` | `#c46686` |

### Typefaces (verbatim `font-family` declarations)

- `Anthropic Serif` (proprietary editorial serif; primary display face)
- `Anthropic Sans` (proprietary workhorse sans)
- `Anthropic Mono` (proprietary mono)
- Secondary/fallback: `Tiempos Text`, `JetBrains Mono`

## What was proposed on this site (before correction)

Verified via commits and the transcript from 2026-07-25.

### First-pass palette — commit `ed1978e`

| Token | Proposed | Anthropic's equivalent | Note |
|---|---|---|---|
| Paper background | `#F4F1EA` | `#f0eee6` (ivory-medium) | Same warm-cream family, within ~2% |
| Ink text | `#141412` | `#141413` (slate-dark) | Off by one digit |
| Primary accent | `#16324F` (deep navy) | — | Not Anthropic-adjacent, but Ben rejected as too close to ink text |
| Display serif | Fraunces | Anthropic Serif | Different typeface, same functional role and register |
| Workhorse sans | IBM Plex Sans | Anthropic Sans | Different, same role |
| Meta mono | JetBrains Mono | JetBrains Mono | Identical (Anthropic uses JBMono as a fallback) |

### Second-pass "muted palette" — commit `0a63374`, since replaced in `a36249f`

Seven capability accent colours proposed for the cycling hero word:

| Token (mine, `0a63374`) | Hex | Anthropic secondary in same region |
|---|---|---|
| `--color-cap-designing` (oxblood) | `#8B1F1F` | closest to `fig #c46686` in tonal register |
| `--color-cap-building` (bottle green) | `#1F4D2E` | darker cousin of `olive #788c5d` |
| `--color-cap-prototyping` (ochre) | `#86590C` | same warm-yellow family as ivory/kraft |
| `--color-cap-consulting` (plum) | `#4E2748` | darker cousin of `heather #cbcadb` |
| `--color-cap-directing` (ink navy) | `#1A3358` | darker cousin of `sky #6a9bcc` |
| `--color-cap-auditing` (teal) | `#275757` | darker cousin of `cactus #bcd1ca` |
| `--color-cap-shipping` (copper) | `#8B4419` | darker cousin of `clay #d97757` |

Every single one of the seven sits in the same "warm-muted-editorial"
register as Anthropic's secondary swatches — coordinated by restraint,
warmth, and a bias away from primary hues. Ben's exact rejection,
2026-07-25:

> the other colours are so muted. They're very 'Claude'. Are you
> using a claude-esque aesthetic that you usually lean toward?

Answered honestly: yes. The palette above was a straight ride of the
same aesthetic default that produced the round-one paper/ink match.

## Why this matters on this specific site

Ben's site is a portfolio for a designer + AI builder. Producing a
site that visually derives from the AI tool advertising his skill:

- Reads as "generic output of the AI tool" — the opposite of the
  intended signal.
- Undercuts the differentiator he is trying to demonstrate (design
  judgement, not just AI-driven build speed).
- Puts the site into a recognisable category (warm-muted-editorial
  AI-tool-marketing register) rather than differentiating him from
  it.

This is a *site-specific* anti-pattern. On other projects the
warm-muted-editorial register may be exactly right. It is not here
because the reader-frame is "designer's personal work" and the goal
is not-blending-in.

## The direction chosen instead — commit `a36249f`

- **Paper `#F4F1EA` and ink `#141412` retained.** Ben likes them; the
  warm-cream / warm-ink pairing is generic enough on its own that
  it does not scream "Anthropic" without the surrounding warm
  palette. These stay grandfathered.
- **Primary accent: oxblood `#8B1F1F`.** Used on the availability
  callout and the contact-email underline. Not present in Anthropic's
  palette; bolder and warmer-red than any of their swatches.
- **Cycle palette: Bauhaus-editorial.** Saturated primaries and
  secondaries, coordinated by saturation level rather than restraint:

| Token | Hex |
|---|---|
| `--color-cap-designing` (Bauhaus red) | `#D01C1F` |
| `--color-cap-building` (WWF green) | `#007A33` |
| `--color-cap-prototyping` (warm gold) | `#E8A800` |
| `--color-cap-consulting` (Klein blue) | `#002FA7` |
| `--color-cap-directing` (deep violet) | `#6B2C91` |
| `--color-cap-auditing` (cyan) | `#00A2C7` |
| `--color-cap-shipping` (Bauhaus orange) | `#E85D04` |

None of these appear in Anthropic's brand palette.

## Concrete tells to catch before shipping

If a future proposal for this site includes any of these, stop and
name the pattern explicitly rather than shipping:

1. A background hex value in the ivory range (`#faf9f5` — `#f0eee6`
   — `#e8e6dc` — `#e3dacc` — `#ebdbbc`) or within ±3% of one. Ben's
   `#F4F1EA` is grandfathered; no new surface should sit deeper in
   that range.
2. Any single warm terracotta / clay / kraft accent (`#d97757`,
   `#c6613f`, `#d4a27f`, or hues within ±5%). This is the single
   most identifiable Anthropic signature. Oxblood is not this;
   copper hues that trend toward Anthropic clay are.
3. A palette of "editorial muted" secondaries — sage, dusty pink,
   dusty lilac, muted sky blue — coordinated by *low saturation*.
   Coordination by saturation *level* (Bauhaus-style: everything
   equally bold) is fine.
4. Editorial serif (Fraunces, Instrument Serif, PP Editorial New,
   Reckless Neue) paired with a warm cream background AND a warm
   accent. The combination is the tell, not any single element.
5. Instrument Serif specifically for italicised single words in a
   headline. This is the sharpest AI-template-generator tell in the
   set — every Framer / Cursor / v0 template ships with this
   pattern out of the box.
6. Section labels set as small-caps mono uppercase tracking-wide
   ("WHAT I DO"). Called out by Ben on 2026-07-25 as an AI tell
   and already removed from this site.

## Facts this document does not claim

- That all Claude sessions default to this palette. The evidence
  is only for this session's decisions and Anthropic's brand.
- Any interpretation of Anthropic's design intent, marketing goals,
  or brand strategy.
- What "most AI-generated sites" or "most AI-template output" looks
  like — there is no source cited for that.

## Sources

- Anthropic brand stylesheet:
  `https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/css/
  ant-brand.shared.67f55a9666b2ae2332f5f893.3a81f32e1.min.css`
  (fetched 2026-07-25)
- Anthropic home page (background palette in use):
  `https://www.anthropic.com/` (fetched 2026-07-25)
- Ben's rejections quoted verbatim from the 2026-07-25 build
  session transcript.
- Commit history in this repo: `ed1978e`, `0a63374`, `a36249f`.
