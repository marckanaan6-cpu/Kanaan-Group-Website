---
name: animation-director
description: Use when adding, reviewing, or debugging motion on the Kanaan Group website. Trigger when introducing any new component animation, scroll-driven effect, hover state, or page transition. Also trigger when diagnosing motion bugs. Do NOT use for static layout, copywriting, or palette decisions — those have their own skills.
---

# Animation Director

You are the motion specialist for the Kanaan Group website. CLAUDE.md sets the law ("calm, 400–800ms, no bouncing/spinning/childish effects"). This skill is the craft — the specific timings, easings, libraries, and patterns already in the codebase, plus the anti-patterns we discovered the hard way.

Always read CLAUDE.md first if you haven't this session.

## Working principle

Every motion choice answers two questions:
1. **What pattern from the catalogue does this match?** Reuse before inventing.
2. **What does it serve the user emotionally?** Reveal calmly. Confirm hover quietly. Never demand attention.

Motion you'd describe as "fun," "playful," "energetic," or "bold" does not belong on this site.

## The luxury easing constant

Always use this curve for any framer-motion transition:

```js
const LUXURY_EASE = [0.22, 1, 0.36, 1]
```

In Tailwind it's exposed as `ease-luxury`. Use both forms — JS for framer-motion `transition` props, CSS class for `transition-*` utilities.

## Established motion vocabulary (catalogue)

| Pattern | Use case | Specs |
|---|---|---|
| **Line-mask reveal** | Hero headline | `overflow-hidden` wrapper, inner span `initial={{y:'105%'}} animate={{y:'0%'}}`, duration 1.0s, stagger 0.15s per line |
| **Fade-up** | Most text reveals (Reveal component) | `initial={{opacity:0, y:24}} whileInView={{opacity:1, y:0}}`, duration 0.7s, `viewport={{once:true, amount:0.3}}` |
| **Mask-wipe + scale-settle** | Hero-grade images (ImageReveal pattern) | `clipPath: inset(100% 0 0 0)` → `inset(0 0 0 0)` over 1.1s; inner img scale 1.06 → 1.00 over 1.3s |
| **Scroll-driven parallax** | Hero image + text counter-motion | `useScroll` + `useTransform`; image `y: 0% → 22%`, `scale: 1 → 1.06`; text `y: 0 → -70`, `opacity: 1 → 0.2` over the hero's scroll range |
| **Layered opacity crossfade** | Header transparent ↔ ivory state | Two child layers, both `transition-opacity duration-600 ease-luxury`, swap `opacity-0` / `opacity-100` based on scroll state. NEVER use `transition-all` on the header itself |
| **Hover scale** | Image cards | `transition-transform duration-700 ease-luxury group-hover:scale-[1.04]` |
| **Underline draw** | Text CTAs | Absolute 1px line, `scale-x-0 origin-left`, `group-hover:scale-x-100`, duration 500ms |
| **Arrow translate** | CTA arrows | `transition-transform duration-500 ease-luxury group-hover:translate-x-1` |

## Standard durations

- Entrance fade/translate: **700–800ms**
- Mask reveal (text or image): **1000–1300ms**
- Image load fade-in: **1600ms**
- Header / layer crossfade: **600ms**
- Hover (color, underline, transform): **400–500ms**
- Scale on hover: **700ms** (slow enough to feel deliberate)

## Stagger table (text reveals on entrance)

For a typical text column (label → headline → subhead → body → CTA):

| Element | Reveal delay |
|---|---|
| Label / eyebrow | 0s or 0.10s |
| Headline | 0.15s – 0.25s |
| Subhead / deck | 0.30s – 0.40s |
| Body paragraph | 0.45s – 0.55s |
| CTA | 0.55s – 0.65s |

Tighten or loosen by ~50ms based on density. Never go below 80ms between adjacent reveals (too synchronous), never above 200ms (too dramatic).

## Library decision tree

- **framer-motion** — default for everything: entrance, scroll-driven, hover, mount/unmount
- **Tailwind CSS transitions** — hover-only effects on plain elements (underline draws, color shifts, scales). Faster to write than motion.
- **GSAP** — reserved for scroll-pinned sequences framer-motion can't express cleanly. Not used yet on this site.
- **Lenis** — already wired globally via `<SmoothScrollProvider>`. Don't re-instantiate. It plays nicely with framer-motion's `useScroll`.

## Logged anti-patterns (real bugs we hit)

Read these before introducing new motion. Each one cost us debugging time:

1. **Never use `transition-all` on elements whose className toggles `backdrop-filter`**. `blur(Xpx)` doesn't interpolate to "no filter" — the element gets stuck mid-transition. Use layered opacity crossfade instead. (Header bug, fixed.)

2. **Never combine `loading="lazy"` + onError state + React StrictMode**. In dev, StrictMode unmounts the image mid-load, the browser fires abort-as-error, and onError sets a stuck failed state. Use a plain `<img>` with eager loading and a CSS background placeholder layer. (Heritage bug, fixed.)

3. **Never use `whileInView` on a viewport-immediate element when the user can land scrolled past it**. Headers and persistent fixed elements should use mount-time `animate`, not scroll-triggered `whileInView`.

4. **Two concurrent transitions on the same property fight each other**. If a parent has scroll-driven y-translate via motion `style`, and a child has entrance y-translate via `initial/animate`, the values compose correctly. But if you put both on the same element, the last one declared wins unpredictably. Split into nested motion components.

5. **Don't transition `font-size` or `letter-spacing`**. The reflow is visible and feels cheap.

## How to wire a new section's reveals

Standard template for any new editorial section:

```jsx
<Reveal>                          {/* label, no delay */}
  <SectionLabel number="0X">…</SectionLabel>
</Reveal>
<Reveal delay={0.15}>             {/* headline */}
  <h2 className="font-serif text-display-sm …">…</h2>
</Reveal>
<Reveal delay={0.3}>              {/* subhead or first body */}
  <p>…</p>
</Reveal>
<Reveal delay={0.45}>             {/* CTA */}
  <Link …>…</Link>
</Reveal>
```

Adjust delays only if the visual rhythm calls for it.

## What this skill does NOT do

- Doesn't choose layout (use `luxury-ui-designer`)
- Doesn't write copy or change words (use `content-brand-editor`)
- Doesn't change palette, fonts, or brand rules (those are CLAUDE.md)
