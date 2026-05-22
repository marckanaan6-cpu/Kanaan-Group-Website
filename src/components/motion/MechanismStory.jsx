import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Reveal from '../Reveal.jsx'
import MechanismVideo from './MechanismVideo.jsx'

/*
  MECHANISM STORY — the Kolity drawer-mechanism feature (Accessories page).

  Two alternating cinematic "acts", each pairing one of the TWO existing drawer
  videos with an editorial text column. Calm, scroll-linked:
   - Each video reveals on enter (Reveal) and plays only in view / pauses
     off-screen (MechanismVideo's IntersectionObserver). One video is active at
     a time in practice, since each act fills most of the viewport.
   - The text column drifts with scroll (subtle parallax via useScroll/useTransform)
     so the act reads as layered, not a flat card.
   - prefers-reduced-motion → no parallax; videos stay on their poster.

  Rules: ONLY the two existing videos — no new videos, no fake CSS hardware.
  Kolity green appears only as a thin per-act index rule (the section is the one
  place green is allowed); eyebrows stay olive.
*/
const ACTS = [
  {
    eyebrow: 'MECHANISM 01',
    title: 'Hidden drawer system.',
    spec: 'Concealed runners — a clean drawer front and a smooth, quiet close.',
    webm: '/videos/kolity/hidden-drawer-system.webm',
    mp4: '/videos/kolity/hidden-drawer-system.mp4',
    poster: '/images/kolity/hidden-drawer-system-poster.jpg',
  },
  {
    eyebrow: 'MECHANISM 02',
    title: 'Ball-bearing drawer slide.',
    spec: 'Full-extension travel on precision steel ball bearings.',
    webm: '/videos/kolity/ball-bearing-slide.webm',
    mp4: '/videos/kolity/ball-bearing-slide.mp4',
    poster: '/images/kolity/ball-bearing-slide-poster.jpg',
  },
]

function Act({ act, flip }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const yRaw = useTransform(scrollYProgress, [0, 1], [40, -40])
  const y = reduce ? 0 : yRaw

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8 lg:gap-20"
    >
      {/* Video — bare frame; the text column carries the caption */}
      <div className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
        <Reveal>
          <MechanismVideo
            webm={act.webm}
            mp4={act.mp4}
            poster={act.poster}
            title={act.title}
            accent="kolity"
            showCaption={false}
          />
        </Reveal>
      </div>

      {/* Text — drifts with scroll (parallax) */}
      <motion.div
        style={{ y }}
        className={`md:col-span-5 ${flip ? 'md:order-1' : ''}`}
      >
        <Reveal>
          <span className="text-eyebrow uppercase text-olive">{act.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.15}>
          <h3 className="mt-5 font-serif text-[clamp(1.75rem,2.4vw,2.4rem)] leading-[1.1] text-walnut">
            {act.title}
          </h3>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-charcoal/80">
            {act.spec}
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          {/* The only green here — a thin controlled Kolity index rule */}
          <span aria-hidden="true" className="mt-7 block h-px w-10 bg-kolity/50" />
        </Reveal>
      </motion.div>
    </div>
  )
}

export default function MechanismStory() {
  return (
    <div className="mt-14 flex flex-col gap-y-20 lg:mt-20 lg:gap-y-28">
      {ACTS.map((act, i) => (
        <Act key={act.title} act={act} flip={i % 2 === 1} />
      ))}
    </div>
  )
}
