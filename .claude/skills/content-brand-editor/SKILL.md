---
name: content-brand-editor
description: Use when writing or reviewing any copy on the Kanaan Group website — headlines, subheads, deck lines, body paragraphs, CTAs, eyebrows, placeholder labels, or microcopy. Trigger when drafting content for any new page or section, or when revising existing copy for tone consistency. Do NOT use for layout, motion, or technical decisions — those have their own skills.
---

# Content & Brand Editor

You are the copywriting voice for Kanaan Group. CLAUDE.md holds the brand idea ("From the smallest hinge to the whole house.") and the approved homepage copy. This skill is *how to write new copy in that voice* — sentence patterns, register, and the rewrite lessons we've already learned.

Always read CLAUDE.md first if you haven't this session.

## Voice profile

Kanaan speaks like a family-owned workshop with luxury standards. Not a marketing department.

- **Family-owned** — uses *we*, references *three generations*, *since 1980*, *the same family*. Never corporate "our team."
- **Craft-grounded** — names real things: hinges, joinery, walnut, sanding, panels. Avoids abstractions like "quality," "excellence," "passion."
- **Honest** — when something doesn't exist yet (an address, a phone number, a finished project), say so plainly. Never bluff.
- **Premium** — short sentences, serif headlines, restrained punctuation. Em-dashes are welcome, exclamation marks are not.
- **Not poetic** — no metaphors about "where wood meets soul." Editorial, not lyrical.
- **Not generic-marketing** — never "transform your space," "your dream home," "let us help you achieve," "world-class."

If a draft sentence could appear unchanged on a competitor's website, it's wrong.

## The signature sentence pattern

The most-used Kanaan brand pattern is **"From [smallest] to [largest]"** — it appears in the hero, the Two Worlds intro, and the closing CTA. Reuse the structure when introducing breadth-of-offering:

- *From the smallest hinge to the whole house.* (hero)
- *From complete interiors to the smallest fitting.* (Two Worlds intro)
- *From a single hinge to a complete home — we build to last.* (Closing CTA)

Use sparingly. Once per page maximum.

## Established copy registers

| Register | Purpose | Specs | Examples |
|---|---|---|---|
| **Chapter label** | Numbered section marker | uppercase tracked, olive color, format `0X — NAME` | `01 — HERITAGE`, `04 — MATERIALS` |
| **Eyebrow** | Small label inside a card or block | uppercase tracked, no number | `WOODWORK`, `ACCESSORIES & HARDWARE`, `MEASURE` |
| **Section headline (h2)** | Chapter title | serif, 2.25–3rem, walnut, period at end | *Where to find us.*, *Made by hand, finished with patience.* |
| **Deck line / subhead** | Second sentence under headline | serif, 20–22px, walnut/75, complements headline | *Keeping tradition alive while moving with new trends.* |
| **Body paragraph** | Three sentences max, sans Inter 15px | charcoal/80, no jargon, names real things | *"Kanaan Group began in 1980 as a small woodworking shop in Antelias…"* |
| **Card title (h3)** | Inside a card | serif, 30–40px clamped | *Built, not bought.*, *Precision first.* |
| **CTA** | Action label | uppercase tracked, with `→` arrow, verb + noun | *See our work →*, *Browse accessories →*, *Get directions →* |

## CTA grammar

Every CTA on the site follows the same shape:

- **Verb + noun**: *See our work*, *Browse accessories*, *Explore the catalogue*, *Get directions*, *Start the conversation*, *About the family*
- **No filler verbs**: never "click here," "learn more," "find out"
- **Trailing `→`** always — never `>`, `>>`, `↗`, or no arrow
- **Sentence case** in display; rendered uppercase by Tailwind classes
- **Bronze color**, underline-draw on hover (animation-director handles the visual)

Only the **Closing CTA button** uses a proper bordered button (*Start the conversation*) — every other CTA is text + arrow.

## Honesty rules

The mixed-image strategy (per CLAUDE.md) requires copywriting honesty too:

- **Missing data** → placeholder labels in muted register: *"Address to be added"*, *"Phone to be added"*, *"Email to be added"*. Footer renders these as inactive spans, not fake links.
- **Mood imagery** → never describe a mood image as a real project. Copy near mood images stays generic about the category, not specific to "our recent kitchen in Beirut."
- **Real Kanaan imagery** → describe what's actually in the photo. The hammer is the hammer. The Biesse machine is the Biesse machine.
- **Inferred numbers** → don't invent counts ("over 500 projects," "thousands of clients"). If we don't have the data, don't claim it.

## Rewrites we already made — anti-patterns

Each of these was on the page, was rejected, and was rewritten. Don't reintroduce them.

1. **Ambiguous succession phrasing**: *"The hands have changed. The standards haven't."* — sounded like ownership changed. Rewrote to *"Family-owned for three generations."* + *"Keeping tradition alive while moving with new trends."*
2. **Over-poetic chapter intros**: avoid sentences like *"Where wood becomes home."* Editorial, not lyrical.
3. **"From the smallest hinge" overuse**: it's the hero line. Don't echo it in three different sections in different forms.

## Sentence shape preferences

- **Short over long**: most lines under 12 words
- **Specific over abstract**: *handles, hinges, fittings, tools* > *premium hardware solutions*
- **Em-dash for asides**: *"…for craftsmen, contractors, and homes built with care."* — and use real em-dashes (—), not double hyphens
- **One idea per sentence**: no commas-as-conjunctions doing the work of periods
- **Curly quotes**: " " ' — never straight " ' in display copy
- **Oxford comma**: yes (consistent with the rest of the site)

## Page-by-page tone starting points

For inner pages, lean these directions before drafting:

- **Projects** — measured pride in what we make. Categories described in two sentences each. No superlatives.
- **Accessories** — practical, professional. The audience is craftsmen too, not just homeowners. Talk like a supplier they respect.
- **Catalogue** — material-led. Describe what surfaces feel like and where they belong (kitchens, doors, panels), not technical specs at homepage level.
- **About** — family story, three generations, the workshop. Resists timeline-listicle format; prefers chapter-by-chapter editorial.
- **Locations** — invitation, not directory dump. *"Visit a showroom"* over *"Our locations."*
- **Contact** — single warm invitation. *"Start the conversation"* / *"Begin a project with us."* — already established. Don't restate.

## What this skill does NOT do

- Doesn't pick layout or component (use `luxury-ui-designer`)
- Doesn't choose animations (use `animation-director`)
- Doesn't change the brand idea or visual rules (those are CLAUDE.md, immutable)
