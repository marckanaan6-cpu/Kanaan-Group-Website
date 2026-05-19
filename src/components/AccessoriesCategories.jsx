import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  CATEGORY DATA — descriptions are deliberately general so the page reads as
  a curated supplier overview, not a specific product catalogue. The dedicated
  Catalogue page will hold real product detail when ready.

  Rows are NOT clickable yet — per-category pages don't exist. When they do,
  wrap each row in <Link to="/accessories/handles"> etc. and the whole-row
  hover bg will become a meaningful "press" affordance.
*/
const CATEGORIES = [
  {
    name: 'Handles',
    description:
      'Cabinet, drawer, and door handles in a range of finishes and styles.',
  },
  {
    name: 'Hinges',
    description:
      'Concealed, soft-close, and standard hinge solutions for furniture and doors.',
  },
  {
    name: 'Sliding systems',
    description:
      'Sliding solutions for wardrobes, cabinets, and interior applications.',
  },
  {
    name: 'Drawer systems',
    description:
      'Runners, soft-close mechanisms, and practical drawer hardware.',
  },
  {
    name: 'Screws & fixings',
    description:
      'Fixings, connectors, and everyday hardware for woodwork installation.',
  },
  {
    name: 'Tools',
    description:
      'Workshop and installation tools for craftsmen and professionals.',
  },
  {
    name: 'Decorative fittings',
    description:
      'Profiles, trims, and finishing details that complete the piece.',
  },
  {
    name: 'Professional supplies',
    description:
      'Adhesives, abrasives, finishes, and consumables for daily workshop use.',
  },
]

function CategoryRow({ category, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="group grid grid-cols-1 gap-3 border-t border-stone/40 py-8 transition-colors duration-500 ease-luxury hover:bg-beige/40 md:grid-cols-12 md:items-baseline md:gap-6 md:py-10 lg:gap-8">
        {/* Name */}
        <div className="md:col-span-4">
          <h3 className="font-serif text-[clamp(1.875rem,2.6vw,2.5rem)] leading-[1.05] text-walnut">
            {category.name}
          </h3>
        </div>

        {/* Description */}
        <div className="md:col-span-8">
          <p className="text-[15px] leading-[1.65] text-charcoal/80">
            {category.description}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

export default function AccessoriesCategories() {
  return (
    <Section
      id="accessories-categories"
      bg="ivory"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        {/* Section intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="01">WHAT WE SUPPLY</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              A curated range, not a catalogue.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 font-serif text-[20px] leading-[1.35] text-walnut/75 sm:text-[22px]">
              Eight categories of hardware, stocked and sourced for craftsmen,
              contractors, furniture makers, and homes built with care.
            </p>
          </Reveal>
        </div>

        {/* Directory */}
        <div className="mt-14 border-b border-stone/40 lg:mt-20">
          {CATEGORIES.map((category, i) => (
            <CategoryRow
              key={category.name}
              category={category}
              // Cap stagger at the 5th row so the bottom rows don't drag in
              delay={0.15 + Math.min(i, 4) * 0.08}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
