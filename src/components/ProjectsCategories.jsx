import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  CATEGORY DATA — edit this array to change names or descriptions.
  Rows are intentionally NOT clickable yet — per-category pages don't exist.
  When they do, wrap each row in <Link to="/projects/kitchens"> etc. and the
  whole-row hover bg will become a meaningful "press" affordance.
*/
const CATEGORIES = [
  {
    name: 'Kitchens',
    description:
      'Fully custom kitchens, from cabinetry to island, fitted to the room.',
  },
  {
    name: 'Bedrooms',
    description:
      'Wardrobes, headboards, and built-in storage shaped to the wall.',
  },
  {
    name: 'Doors',
    description:
      'Solid and veneered interior doors — including pivoting and concealed-frame options.',
  },
  {
    name: 'Wall panels',
    description:
      'Floor-to-ceiling cladding, fluting, and decorative panels in matched veneers.',
  },
  {
    name: 'Custom interiors',
    description:
      'Living rooms, studies, bathrooms — every fixed surface bespoke.',
  },
  {
    name: 'Villas & houses',
    description:
      'Whole-home woodwork packages, coordinated across every room.',
  },
  {
    name: 'Galleries & commercial spaces',
    description:
      'Receptions, retail interiors, and bespoke commercial fit-outs.',
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

export default function ProjectsCategories() {
  return (
    <Section
      id="projects-categories"
      bg="beige"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        {/* Section intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="01">WHAT WE BUILD</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              Custom across the house.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 font-serif text-[20px] leading-[1.35] text-walnut/75 sm:text-[22px]">
              Seven categories of work. One workshop behind all of them.
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
