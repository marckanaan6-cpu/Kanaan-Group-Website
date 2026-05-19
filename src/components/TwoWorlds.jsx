import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  TEMPORARY MOOD IMAGES — replace with real Kanaan project/product photos later.
  Not real Kanaan completed projects. They exist to create the homepage's
  premium first impression while real photography is sourced.

  Place files at:
   - public/images/projects/two-worlds-woodwork.jpg
   - public/images/products/two-worlds-hardware.jpg

  Briefs:
   - Woodwork: warm walnut / oak interior detail (kitchen, wall panel,
     cabinetry). AD-style editorial. No people. ~1600px+ wide. Visual weight
     toward the upper-right so the bottom-left text overlay reads cleanly.
   - Hardware: single premium handle / hinge on warm linen or oiled walnut.
     Soft directional light. Jewelry-grade detail. ~1600px+ wide. Visual
     weight toward the upper-right for the same reason.
*/
const WOODWORK_IMAGE_SRC = '/images/projects/two-worlds-woodwork.jpg'
const HARDWARE_IMAGE_SRC = '/images/products/two-worlds-hardware.jpg'

const CARDS = [
  {
    image: WOODWORK_IMAGE_SRC,
    alt: 'Warm walnut interior — woodwork mood image',
    eyebrow: 'WOODWORK',
    title: 'Built, not bought.',
    body: 'Custom interiors, kitchens, doors, wall panels, and joinery — fabricated in our workshop, fitted on site.',
    cta: 'See our work',
    to: '/projects',
  },
  {
    image: HARDWARE_IMAGE_SRC,
    alt: 'Premium hardware detail — accessories mood image',
    eyebrow: 'ACCESSORIES & HARDWARE',
    title: 'From the smallest part.',
    body: 'Handles, hinges, fittings, tools, and professional supplies — for craftsmen, contractors, and homes built with care.',
    cta: 'Browse accessories',
    to: '/accessories',
  },
]

function TwoWorldsCard({ card, delay }) {
  return (
    <Reveal delay={delay}>
      <Link
        to={card.to}
        className="group relative block aspect-[4/5] overflow-hidden bg-walnut"
      >
        <img
          src={card.image}
          alt={card.alt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.04]"
        />

        {/* Two-stage gradient for legibility:
            - main: warm walnut wash, opaque at bottom (where text sits), fading to clear above
            - localized: a tighter, deeper band immediately behind the text so titles are readable
              regardless of how busy the underlying image is */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-walnut/95 from-0% via-walnut/45 via-35% to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-walnut/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-8 text-ivory sm:p-10 lg:p-12">
          <span className="text-eyebrow uppercase text-ivory">
            {card.eyebrow}
          </span>

          <h3 className="mt-5 font-serif text-[clamp(1.875rem,2.6vw,2.5rem)] font-medium leading-[1.1] text-ivory">
            {card.title}
          </h3>

          <p className="mt-5 max-w-md text-[14px] leading-[1.65] text-ivory/95">
            {card.body}
          </p>

          <span className="mt-7 inline-flex items-center gap-2 text-[12px] uppercase tracking-editorial text-ivory">
            <span className="relative">
              {card.cta}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ivory transition-transform duration-500 ease-luxury group-hover:scale-x-100" />
            </span>
            <ArrowRight
              size={14}
              strokeWidth={1.4}
              className="transition-transform duration-500 ease-luxury group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </Reveal>
  )
}

export default function TwoWorlds() {
  return (
    <Section
      id="two-worlds"
      bg="beige"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        {/* Section intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="02">TWO WORLDS</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              From complete interiors to the smallest fitting.
            </h2>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:mt-20">
          <TwoWorldsCard card={CARDS[0]} delay={0.1} />
          <TwoWorldsCard card={CARDS[1]} delay={0.25} />
        </div>
      </Container>
    </Section>
  )
}
