import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'
import BranchGallery from './BranchGallery.jsx'

/*
  CAPACITY & TWO BRANCHES — homepage section (07).

  Communicates that Kanaan is a serious, capable company with physical capacity:
  a client-facing showroom branch and a workshop / depot / stock branch. Reuses
  the Two Worlds card vocabulary (tall walnut cards, text over a gradient) but as
  two real branches. Warm only — ivory / walnut / bronze / ivory text. No Kaindl
  blue, no Kolity green, no icons or generic business graphics.

  The homepage shows only TWO clean cards. Each card is clickable ("Explore
  branch →") and opens a premium BranchGallery bottom sheet showing that branch's
  photos (warm 2-column editorial grid with captions). The card's own image is
  the first item in its gallery. All branch photos live under
  public/images/home/branches/.
*/
const BRANCHES = [
  {
    image: '/images/home/branches/branch-antelias-floor-1.jpg',
    alt: 'Antelias branch — tools and the service counter',
    eyebrow: 'ANTELIAS',
    title: 'Showroom & selection.',
    body: 'Where clients meet the work — design consultation, materials, and the full accessories range.',
    tags: 'Showroom · Consultation · Materials',
    gallery: [
      { image: '/images/home/branches/branch-antelias-floor-1.jpg', caption: 'Tools & service counter' },
      { image: '/images/home/branches/branch-antelias-floor-2.jpg', caption: 'Handles showroom' },
      { image: '/images/accessories/antelias/antelias-handle-display-1.png', caption: 'Handle selection' },
      { image: '/images/accessories/antelias/antelias-tool-wall-1.png', caption: 'Tool wall' },
      { image: '/images/accessories/antelias/antelias-screwdriver-display.png', caption: 'Screwdrivers' },
      { image: '/images/accessories/antelias/antelias-scraper-display.png', caption: 'Finishing tools' },
    ],
  },
  {
    image: '/images/home/branches/branch-mazraat-workshop-cnc-main.jpg',
    alt: 'Mazraat Yachouh branch — CNC machine on the workshop floor',
    eyebrow: 'MAZRAAT YACHOUH',
    title: 'Workshop & stock.',
    body: 'Production, machinery, and depot — the stock and distribution capacity behind every project.',
    tags: 'Production · Depot · Distribution',
    gallery: [
      { image: '/images/home/branches/branch-mazraat-workshop-cnc-main.jpg', caption: 'CNC machining' },
      { image: '/images/home/branches/branch-mazraat-workshop-panel-saw.jpg', caption: 'Panel saw' },
      { image: '/images/home/branches/branch-mazraat-workshop-cnc-detail.jpg', caption: 'Machining detail' },
      { image: '/images/home/branches/branch-mazraat-stock-warehouse.jpg', caption: 'Board stock' },
      { image: '/images/home/branches/branch-mazraat-stock-forklift.jpg', caption: 'Depot & handling' },
      { image: '/images/home/branches/branch-mazraat-stock-timber-detail.jpg', caption: 'Timber detail' },
    ],
  },
]

function BranchCard({ branch, delay, onOpen }) {
  const [imgOk, setImgOk] = useState(true)

  return (
    <Reveal delay={delay}>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Explore the ${branch.eyebrow} branch`}
        className="group relative block aspect-[4/5] w-full overflow-hidden bg-walnut text-left"
      >
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

          {/* Interaction cue */}
          <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-editorial text-ivory">
            <span className="relative">
              Explore branch
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ivory transition-transform duration-500 ease-luxury group-hover:scale-x-100" />
            </span>
            <ArrowRight
              size={13}
              strokeWidth={1.4}
              className="transition-transform duration-500 ease-luxury group-hover:translate-x-1"
            />
          </span>
        </div>
      </button>
    </Reveal>
  )
}

export default function Capacity() {
  const [openBranch, setOpenBranch] = useState(null) // index | null

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
          <BranchCard branch={BRANCHES[0]} delay={0.1} onOpen={() => setOpenBranch(0)} />
          <BranchCard branch={BRANCHES[1]} delay={0.25} onOpen={() => setOpenBranch(1)} />
        </div>
      </Container>

      <BranchGallery
        branch={openBranch !== null ? BRANCHES[openBranch] : null}
        onClose={() => setOpenBranch(null)}
      />
    </Section>
  )
}
