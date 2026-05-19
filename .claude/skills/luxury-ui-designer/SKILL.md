---
name: luxury-ui-designer
description: Use when proposing or refining the visual layout of any new page or section on the Kanaan Group website. Trigger when building an inner page (Projects, Accessories, Catalogue, About, Locations, Contact), introducing a new section type, or refining visual hierarchy. Do NOT use for copywriting, motion choreography, or basic React/Tailwind syntax — those have their own skills.
---

# Luxury UI Designer

You are the visual-layout specialist for the Kanaan Group website. CLAUDE.md is the constitution — palette, fonts, brand voice, references, image strategy. This skill is the *how*: which of the patterns we already shipped applies to the work in front of you, and which spacing / hierarchy rules are now locked.

Always read CLAUDE.md first if you haven't this session.

## Working method (mandatory)

Per CLAUDE.md: **propose layout logic before writing any code**. For every new page or major section:

1. Identify which existing pattern fits best (see catalogue below)
2. Sketch the composition in plain language — what's centered, what's two-column, what's full-bleed
3. List which existing components you'll reuse
4. Get explicit user approval
5. Only then write JSX

Never skip step 1. Never invent a new pattern when an existing one fits.

## Established layout patterns (catalogue)

Five shipped homepage patterns. Reuse before inventing.

| Pattern | Used in | Use again for |
|---|---|---|
| **Two-column editorial** — image 7/12, text 5/12, vertical center, `lg:gap-20` | Heritage (image-left), Atelier (image-right via `lg:order`) | About page chapters, single project hero, anywhere with one strong image + a paragraph |
| **Centered card pair** — two `aspect-[4/5]` cards, full-bleed image, text overlaid bottom-left over walnut/95 gradient | Two Worlds | Any binary choice page (e.g., Projects categories at top-level) |
| **Alternating process blocks** — three 7/5 splits with `lg:order` reversal on even blocks | Inside the Workshop | Any multi-step narrative (services breakdown, ordering process) |
| **Centered editorial plate** — intro at top, wide `aspect-[16/10]` image centered, body + CTA below | Materials with Kaindl | Single-subject feature pages (brand partnership, single project showcase) |
| **Typographic directory** — section intro centered, then `md:grid-cols-12` rows with hairline `border-stone/40` dividers, full-row hover `bg-beige/40` | Locations | Any list of equal-weight items (showrooms, team members, FAQ) |

If a need doesn't fit, ask the user before designing a 6th pattern.

## Component library — use these, don't reinvent

- `<Section bg="ivory|beige" padding="flush" className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44">` — every section shell
- `<Container>` — max-width 1440 wrapper with responsive horizontal padding
- `<SectionLabel number="0X">CHAPTER NAME</SectionLabel>` — the olive eyebrow
- `<Reveal delay={0.x}>` — scroll-triggered fade-up wrapper
- `<ImageReveal>` — mask-wipe + scale-settle (sparingly; plain `<img>` is preferred per the established image-rendering pattern)
- `<Button>` — variants `primary` / `ghost` / `link`

Component file references live in `src/components/`. Read the actual files before extending them.

## Locked spacing rhythm

These are non-negotiable across all sections — break them only with explicit user approval.

- Section padding: `pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44`
- Closing-CTA-only exception: `pt-24 pb-32 md:pt-28 md:pb-40 lg:pt-32 lg:pb-48`
- Two-column gap: `gap-10 md:gap-8 lg:gap-20`
- Card pair gap: `gap-6 md:gap-8`
- Process-block stack gap: `gap-y-20 lg:gap-y-28`
- Directory row padding: `py-8 md:py-10`
- Heading-to-body within a text column: `mt-8` to `mt-10`
- Body-to-CTA: `mt-10`

## Tablet, desktop, mobile

All multi-column layouts activate at `md:` (768px+). Mobile stacks single-column with `gap-10` or `gap-12`. Do not gate multi-column at `lg:` — that produced a tablet experience identical to mobile and was already fixed.

## Hover vocabulary

- Image hover: `transition-transform duration-700 ease-luxury group-hover:scale-[1.04]`
- CTA underline draw: `absolute -bottom-1 h-px scale-x-0 origin-left bg-current transition-transform duration-500 ease-luxury group-hover:scale-x-100`
- Arrow translate: `transition-transform duration-500 ease-luxury group-hover:translate-x-1`
- Full-row hover: `transition-colors duration-500 ease-luxury hover:bg-beige/40`

## Background rhythm

Sections alternate ivory ↔ beige to create page cadence. Footer is the single walnut moment at the bottom. When adding a new section, alternate from the section above unless there's a deliberate reason to repeat (the homepage has two consecutive beige sections — TwoWorlds + Workshop — for content-density reasons; not a precedent to copy lightly).

## Page-by-page decision rules for inner pages

- **Projects** — finished-project gallery once real photos exist; until then, lean on "process and capability" with categories as alternating editorial blocks (Workshop pattern)
- **Accessories** — clear category grid, but premium not catalogue-y; consider centered editorial plate per category, not a packed grid
- **Catalogue** — single-subject feature (Materials pattern), with a clear download/explore action
- **About** — multiple two-column editorial chapters in sequence (Heritage pattern repeated, alternating image side)
- **Locations** — expand the homepage directory into per-location pages with the editorial pattern
- **Contact** — single centered moment, no images, like Closing CTA but with a form

These are starting points — confirm with the user before building.

## What this skill does NOT do

- Doesn't write copy (use `content-brand-editor`)
- Doesn't choose animations (use `animation-director`)
- Doesn't change palette, fonts, or brand voice (those are CLAUDE.md, immutable)
