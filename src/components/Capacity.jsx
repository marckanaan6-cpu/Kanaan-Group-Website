import { useState } from 'react'
import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  CAPACITY & TWO BRANCHES — homepage section (07).

  Communicates that Kanaan is a serious, capable company with physical capacity:
  a client-facing showroom branch and a workshop / depot / stock branch. Reuses
  the Two Worlds card vocabulary (tall walnut cards, text over a gradient) but as
  two real branches. Warm only — ivory / walnut / bronze / ivory text. No Kaindl
  blue, no Kolity green, no icons or generic business graphics.

  TEMPORARY MOOD IMAGES — replace with real branch / workshop / depot photos.
  Each card is a dark walnut card with the photo layered on top; if the file is
  missing the image simply hides (state-driven onError), leaving an elegant dark
  card with readable text — no broken-image icons.

  Place files at:
   - public/images/branches/antelias-showroom.jpg
   - public/images/branches/mazraat-yachouh-workshop.jpg

  Briefs:
   - Antelias: a warm, editorial showroom / display interior — materials and
     finishes on show. AD-style, no people. ~1600px+ wide, visual weight toward
     the upper-right so the bottom-left text reads cleanly.
   - Mazraat Yachouh: the workshop floor / machinery / stacked board stock —
     real production and depot capacity. Same framing guidance.
*/
const BRANCHES = [
  {
    image: '/images/branches/antelias-showroom.jpg',
    alt: 'Antelias showroom interior — mood image',
    eyebrow: 'ANTELIAS',
    title: 'Showroom & selection.',
    body: 'Where clients meet the work — design consultation, materials, and the full accessories range.',
    tags: 'Showroom · Consultation · Materials',
  },
  {
    image: '/images/branches/mazraat-yachouh-workshop.jpg',
    alt: 'Mazraat Yachouh workshop and stock — mood image',
    eyebrow: 'MAZRAAT YACHOUH',
    title: 'Workshop & stock.',
    body: 'Production, machinery, and depot — the stock and distribution capacity behind every project.',
    tags: 'Production · Depot · Distribution',
  },
]

function BranchCard({ branch, delay }) {
  const [imgOk, setImgOk] = useState(true)

  return (
    <Reveal delay={delay}>
      <div className="group relative aspect-[4/5] overflow-hidden bg-walnut">
        <img
          src={branch.image}
          alt={branch.alt}
          loading="lazy"
          onError={() => setImgOk(false)}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.04] ${
            imgOk ? '' : 'hidden'
          }`}
        />

        {/* Two-stage warm gradient for legibility over any image (or the bare
            walnut card when the photo is missing). */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-walnut/95 from-0% via-walnut/45 via-35% to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-walnut/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-8 text-ivory sm:p-10 lg:p-12">
          <span className="text-eyebrow uppercase text-ivory">
            {branch.eyebrow}
          </span>

          <h3 className="mt-5 font-serif text-[clamp(1.875rem,2.6vw,2.5rem)] font-medium leading-[1.1] text-ivory">
            {branch.title}
          </h3>

          <p className="mt-5 max-w-md text-[14px] leading-[1.65] text-ivory/95">
            {branch.body}
          </p>

          <div className="mt-7 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-bronze" />
            <span className="text-[11px] uppercase tracking-editorial text-ivory/80">
              {branch.tags}
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Capacity() {
  return (
    <Section
      id="capacity"
      bg="ivory"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        {/* Section intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="07">CAPACITY</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              Room to design, build, and supply.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 font-serif text-[20px] leading-[1.35] text-walnut/75 sm:text-[22px]">
              Showroom and consultation, material and accessories supply,
              workshop production, and stock held across two branches.
            </p>
          </Reveal>
        </div>

        {/* Branch cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:mt-20">
          <BranchCard branch={BRANCHES[0]} delay={0.1} />
          <BranchCard branch={BRANCHES[1]} delay={0.25} />
        </div>
      </Container>
    </Section>
  )
}
