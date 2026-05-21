# Kanaan Group Website

## Project Name
Kanaan Group Website

## Business
Kanaan Group is a Lebanese family business specializing in custom woodwork projects, interiors, and accessories/hardware/tools.

## Main Brand Idea
> "From the smallest hinge to the whole house."

## Website Goal
Create a premium digital showroom website that presents both sides of the business:
1. Woodwork projects and interiors
2. Accessories, hardware, tools, and professional supplies

## Visual Direction
- Warm luxury interior design website
- Not dark
- Not pure bright white
- Use ivory, beige, warm stone, walnut wood, bronze, and subtle olive
- Large attractive images
- Spacious editorial layout
- Elegant serif typography for titles
- Clean sans-serif typography for body text
- Modern UI/UX
- Realistic and professional
- Not generic AI-looking
- Avoid small crowded image grids
- Avoid overusing animations
- Avoid childish effects, bouncing, spinning, or floating elements

## Homepage Style
The homepage should feel similar to a high-end interior design studio or architecture portfolio:
- Large hero image or video
- Strong typography
- Calm luxury feeling
- Big image sections
- Editorial spacing
- Warm material palette
- Clear navigation

## Reference Websites (inspiration only — never copy)

### 1. Tredi Interiors — https://www.trediinteriors.com/
**Take:** clear category structure (kitchens, bathrooms, closets, doors); showroom-led model where locations are first-class content; multiple soft CTAs spread across the page without feeling sales-y; the idea of an architect/B2B pathway alongside the consumer journey.
**Avoid:** crowded 40+ link footer; deep 3-level menu nesting; identical layout template repeated for every product category; repeated aspirational quotes that flatten brand voice.

### 2. Wix Carpenter Template — https://www.wix.com/website-template/view/html/2099
**Take:** service-led clarity (visitor understands what we do within three seconds); active language about the craft itself ("cutting, shaping, building, installing"); single clear path from work → contact.
**Avoid:** stock-photography feel; handyman/contractor tropes (Kanaan is a luxury workshop, not a handyman service); blocky primary-colored CTAs; sans-only typography stacks.

## Translation Principles for Kanaan Group

How references map to our own style:

1. **Tredi's category logic, our editorial space.** Adopt clear product/project categories on Projects and Accessories pages — but each one gets its own large editorial image and asymmetric layout, never a uniform grid.
2. **Wix's service clarity, our premium restraint.** Same one-glance comprehension — but expressed through serif typography, ivory whitespace, and thin outline/underline-draw buttons.
3. **Tredi's showroom-first model, our typographic restraint.** Locations stay first-class on the homepage, but presented as a serif typographic directory until real showroom photography exists — never weak placeholder photo cards.
4. **Neither's hero — ours is cinematic.** Full-viewport image-led hero with Apple-style smooth scroll (Lenis) and slow framer-motion reveals. More film still than category landing.
5. **Trust through craft.** Earn trust via real Kanaan workshop photography (Heritage, Workshop, Atelier sections) interleaved with polished mood imagery (Hero, Two Worlds, Materials) — per the approved mixed image strategy.

## Style guardrails (informed by both references)
- Density: closer to a museum monograph than a product catalogue
- Color: warmer than Tredi's white-dominant palette; never as wood-brown-heavy as a Wix carpenter template
- Typography: serif display + sans body — never sans-only
- Buttons: thin outlines and underline-draw links — never bold primary fills
- Navigation: one level deep, never three
- Footer: maximum four columns, scannable in one glance

## Main Pages
- Home
- Projects
- Accessories
- Catalogue
- About
- Locations
- Contact

## Homepage Sections
1. Header
2. Hero
3. Heritage Intro
4. Two Worlds
5. Inside the Workshop
6. Materials with Kaindl
7. The Atelier
8. Showrooms & Locations
9. Closing CTA
10. Footer

## Approved Homepage Copy

**Hero headline:**
> "From the smallest hinge to the whole house."

**Hero subheadline:**
> "A family house of woodwork, custom interiors, and professional hardware since 1980."

**Accessories card body:**
> "Handles, hinges, fittings, tools, and professional supplies — for craftsmen, contractors, and homes built with care."

**Keep this line:**
> "The hands have changed. The standards haven't."

## Tech Stack
Use **Vite + React + Tailwind CSS**.

### Libraries
- `framer-motion` — for elegant UI reveal animations
- `gsap` — for important scroll-based animations only
- `lenis` — for smooth scrolling
- `lucide-react` — for icons
- `react-router-dom` — for pages

## Animation Rules
- Slow, calm, premium animations
- 400–800ms transitions
- Subtle fade-up
- Gentle image reveal
- Soft hover states
- No bouncing
- No spinning
- No childish effects

## Image Rules
- Use large images
- One strong image per section
- Do not randomly use all images
- Do not create many tiny thumbnails
- Craft/process photos should be used editorially until finished project photos are available
- If using placeholder images, clearly comment where I should replace them

## Working Method
- Before building any major page, first propose the layout logic.
- When coding, keep files clean and organized.
- Use reusable components.
- Make the website responsive for desktop, tablet, and mobile.
- Always keep the design close to the approved warm luxury reference.

## Brand System Addendum (four strengths + partner accents)

The detailed governance lives in the `kanaan-brand-system` skill. This section records the law.

### The four strengths of Kanaan Group
The website exists to communicate four strengths. Every major section should advance one:
1. **Custom woodwork and interiors** — bespoke kitchens, bedrooms, doors, wall panels, full interiors.
2. **Advanced workshop, machines, and production capability** — real machinery and precision (trust through documented craft + technology).
3. **Large stock / wood distribution through two branches** — Antelias and Mazraat Yachouh as supply hubs (state only confirmed facts; never invent inventory or claims).
4. **Official brand distribution** — **Kaindl** for boards/surfaces; **Kolity** for accessories.

### Partner accent rules (controlled accents, never dominant themes)
- The warm core (ivory / walnut / bronze / stone / olive) is always primary. Partner colors are **accents only — never dominant themes**, never page or section backgrounds.
- **Kaindl blue** is allowed only in **Catalogue / wood-materials / Kaindl-specific** moments.
- **Kolity green** is allowed only in **Accessories / Kolity-specific** moments.
- **Never turn the whole website (or a whole section) blue or green.** Accents stay subtle, controlled, and small (≤ ~5% of any viewport).
- **Never use both partner accents strongly in the same section** — one partner per context.
- Section eyebrows/labels stay **olive** sitewide; the partner accent is reserved for explicitly partner-owned elements (lockups, badges, a thin divider, small swatch/spec tags, in-section hover).
- Tailwind tokens `kaindl` and `kolity` are **defined but not yet applied** to the site. Current values are temporary muted placeholders pending official brand colors.

### Partner presentation
- Use official partner wording only when confirmed; do not invent "official/exclusive/authorized" claims.
- Logos shown only if provided/allowed, per the partner's usage rules (don't recolor or distort).
- Logo assets (added, not yet used on the site):
  - `public/images/brands/kaindl-logo.jpg`
  - `public/images/brands/kolity-logo.jpg`
