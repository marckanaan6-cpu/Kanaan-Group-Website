import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'
import { PROJECT_CATEGORIES as CATEGORIES } from '../data/projects.js'

/*
  A simple editorial directory of what we build — names only, no per-row
  descriptions. The full filterable gallery below carries the actual showing.

  Category list is sourced from src/data/projects.js so this directory and the
  gallery can never drift apart.
*/
function CategoryRow({ category, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="group flex items-baseline justify-between gap-6 border-t border-stone/40 py-6 transition-colors duration-500 ease-luxury hover:bg-beige/30 md:py-7 lg:py-8">
        <h3 className="font-serif text-[clamp(1.625rem,2.2vw,2.125rem)] leading-[1.05] text-walnut">
          {category.name}
        </h3>
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
      className="pt-20 pb-24 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32"
    >
      <Container>
        {/* Intro — short on copy on purpose */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="01">WHAT WE BUILD</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              Custom across the house.
            </h2>
          </Reveal>
        </div>

        {/* Directory — names only, two columns on desktop */}
        <Reveal delay={0.3}>
          <div className="mx-auto mt-12 max-w-5xl border-b border-stone/40 sm:grid sm:grid-cols-2 sm:gap-x-16 lg:mt-16 lg:gap-x-24">
            {CATEGORIES.map((category, i) => (
              <CategoryRow
                key={category.key}
                category={category}
                delay={0.05 + Math.min(i, 4) * 0.05}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
