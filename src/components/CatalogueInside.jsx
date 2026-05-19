import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  CATALOGUE FAMILY DATA — four surface families curated from Kaindl's range.
  Edit descriptions if specific product lines change.
*/
const FAMILIES = [
  {
    name: 'Solid lacquers',
    description:
      'Premium lacquered surfaces in a curated range of solid tones.',
  },
  {
    name: 'Stone effects',
    description:
      'Realistic stone-like decors for kitchens, bathrooms, and feature surfaces.',
  },
  {
    name: 'Natural wood decors',
    description:
      'Wood-look surfaces with authentic grain and finish texture.',
  },
  {
    name: 'Specialty surfaces',
    description:
      'Textured and unique finishes for accent walls, panels, and details.',
  },
]

function FamilyRow({ family, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="group grid grid-cols-1 gap-3 border-t border-stone/40 py-8 transition-colors duration-500 ease-luxury hover:bg-beige/40 md:grid-cols-12 md:items-baseline md:gap-6 md:py-10 lg:gap-8">
        <div className="md:col-span-4">
          <h3 className="font-serif text-[clamp(1.875rem,2.6vw,2.5rem)] leading-[1.05] text-walnut">
            {family.name}
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="text-[15px] leading-[1.65] text-charcoal/80">
            {family.description}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

export default function CatalogueInside() {
  return (
    <Section
      id="catalogue-inside"
      bg="ivory"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="01">INSIDE THE CATALOGUE</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              Four families of surfaces.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 font-serif text-[20px] leading-[1.35] text-walnut/75 sm:text-[22px]">
              Each family curated for residential and commercial interiors.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-b border-stone/40 lg:mt-20">
          {FAMILIES.map((family, i) => (
            <FamilyRow
              key={family.name}
              family={family}
              delay={0.15 + i * 0.08}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
