---
name: kanaan-brand-system
description: Use when making any decision about color beyond the warm core palette, presenting partner brands (Kaindl, Kolity), telling Kanaan's four-strength story, or governing where accent colors may appear. Trigger when building or reviewing Catalogue / wood-materials sections (Kaindl), Accessories sections (Kolity), partner lockups/badges, or any section that communicates woodwork, workshop capability, stock/distribution, or official distribution. Do NOT use for layout patterns (use luxury-ui-designer), motion (use animation-director), or copywriting voice (use content-brand-editor).
---

# Kanaan Brand System

You are the brand-and-color governor for the Kanaan Group website. CLAUDE.md is the constitution (palette, fonts, references, image strategy). The three sibling skills own *how* things look, move, and read. This skill owns the things none of them do: **what Kanaan stands for**, and **how non-warm color is allowed to enter a warm system** when partner brands appear.

Always read CLAUDE.md first if you haven't this session. This skill never overrides it — it extends it.

## Core identity (never compromise)

Kanaan Group is **warm, premium, architectural, professional** — a family woodwork house with luxury standards, since 1980.

- Palette anchor: **ivory, beige, stone, walnut, charcoal, bronze, olive**. This is the website. Everything reads warm first.
- Feel: museum monograph, not product catalogue. Editorial whitespace, serif display, restrained motion.
- The warm core is the brand. Partner accents are guests in it — never co-owners of the page.

## The four strengths

Every major section should, directly or indirectly, advance one of these. They are the story spine — not slogans to print.

1. **Custom woodwork & interiors** — bespoke kitchens, bedrooms, doors, wall panels, full interiors. Built, not bought.
2. **Advanced workshop, machines & production capability** — real machinery (e.g. Biesse CNC), precision, capacity. Trust earned through documented craft + technology.
3. **Large stock / wood distribution through two branches** — Antelias and Mazraat Yachouh as supply hubs holding real stock, serving trade and retail. (State only confirmed facts — never invent inventory numbers or claims.)
4. **Official brand distribution** —
   - **Kaindl** — wood boards and surfaces. Lives in **Catalogue / wood-materials** contexts.
   - **Kolity** — accessories and hardware. Lives in **Accessories** contexts.

When unsure which strength a section serves, ask before building it.

## Accent color rules (the core restraint mechanism)

The principle: **the accent marks the partner, not the page.** Color governance is what prevents the site from ever turning blue or green.

| | Warm core (default) | Kaindl accent (`kaindl`) | Kolity accent (`kolity`) |
|---|---|---|---|
| Where allowed | the whole site | **Catalogue + wood-materials / Kaindl moments only** | **Accessories / Kolity moments only** |
| Allowed on | everything | partner lockup/badge, one thin divider rule, small swatch/spec tags, in-section card hover, a small icon | the same, for accessories |
| **Never** on | — | page/section backgrounds, hero, headlines, body text, nav, footer, primary CTAs | same |
| Per-viewport budget | — | **≤ ~5% of visible area** | ≤ ~5% |

Hard rules:
- **Never turn the whole website (or a whole section) blue or green.** Accents are subtle, controlled, and small.
- **Never use both partner accents strongly in the same section.** One partner per context.
- **Section eyebrows/labels stay `olive` sitewide** — including Catalogue and Accessories. The partner accent is reserved for *explicitly partner-owned* elements, not general section chrome.
- Prefer accent via **low-opacity modifiers** (`border-kaindl/30`, `text-kaindl`, `bg-kolity/10`) for hairlines and tags rather than solid fills.
- If a change would make a casual visitor describe the page as "the blue page" or "the green page," it is wrong.

### Tokens (defined in `tailwind.config.js`)
- `kaindl` — muted deep slate blue (temporary value `#3E5366`, pending official Kaindl brand color).
- `kolity` — muted deep green (temporary value `#3F5141`, pending official Kolity brand color), deliberately distinct from the warmer/yellower `olive`.

These are **defined but not yet applied** anywhere on the site. Replace the hex values with official brand colors when provided, then desaturate if needed to keep them warm-compatible.

## Partner presentation rules

- **Official wording only when confirmed.** Do not write "Official Kaindl Distributor" / "Exclusive partner" / "Authorized dealer" unless the exact, approved wording has been given. Until then use neutral, honest phrasing ("We work with Kaindl surfaces").
- **Do not invent claims** — no exclusivity, coverage, volume, or "official" status that hasn't been confirmed.
- **Logos only if provided/allowed**, and shown per the partner's usage rules (don't recolor, distort, or crowd a logo). Present a logo in a calm warm container, never on a loud accent panel.
- **Current logo assets (added, NOT yet used on the site):**
  - `public/images/brands/kaindl-logo.jpg`
  - `public/images/brands/kolity-logo.jpg`

## Layout rules

(Defer to `luxury-ui-designer` for the actual patterns — these are brand-level guardrails.)
- **No random / uniform image grids.** Use editorial, premium, architectural compositions — asymmetric rows, full-width leads, alternating splits.
- **Photos must support a story**, one of: craft, technology/machines, stock/supply, material quality, finished interiors. A photo that doesn't advance a strength doesn't belong.
- One strong image per moment; avoid tiny thumbnails and crowded galleries.
- Partner sections use the **same warm layout system** as the rest of the site — they are not visually separate microsites.

## Accessibility basics

- **Contrast:** any accent used as text or a meaningful rule must stay legible on ivory/beige; verify accent-on-warm contrast before shipping. Don't put light accent text on light backgrounds.
- **Tap targets:** keep mobile hit areas comfortable (~44px) using padding/min-height, not larger visual text (see the burger/footer link pattern already shipped).
- **Mobile drawer:** preserve the `inert` + `aria-hidden` + `pointer-events-none` closed-state pattern — closed menus must never leave focusable off-screen content.
- **Motion:** keep it calm (per animation-director). No motion that hinders reading, causes layout shift, or fights scrolling.

## What this skill does NOT do

- Doesn't choose layout patterns or spacing (use `luxury-ui-designer`)
- Doesn't set animation timings (use `animation-director`)
- Doesn't write copy (use `content-brand-editor`)
- Doesn't override CLAUDE.md — it extends it with color governance and the four-strength story
