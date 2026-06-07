import { ArrowRight } from 'lucide-react'
import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'
import { PROJECT_CATEGORIES as CATEGORIES } from '../data/projects.js'
import { useScrollTo } from './SmoothScrollProvider.jsx'

/*
  A simple editorial directory of what we build — names only, no per-row
  descriptions. The full filterable gallery below carries the actual showing.

  Each row is a real button (intentionally styled as plain text, not as a
  button frame): tapping a category name smooth-scrolls to the gallery and
  activates that category's chip. The directory and the gallery exchange the
  selected key via a tiny window-level event channel so they remain decoupled.

  Category list is sourced from src/data/projects.js so this directory and the
  gallery can never drift apart.
*/

// Public event name used by ProjectsGallery to listen for directory taps.
export const PROJECT_FILTER_EVENT = 'kanaan:projects:set-filter'

function CategoryRow({ category, delay, onSelect }) {
  return (
    <Reveal delay={delay}>
      <button
        type="button"
        onClick={() => onSelect(category.key)}
        aria-label={`Show ${category.name} in the project gallery`}
        className="group flex w-full items-baseline justify-between gap-6 border-t border-stone/40 py-6 text-left transition-colors duration-500 ease-luxury hover:bg-beige/40 md:py-7 lg:py-8"
      >
        <h3 className="relative font-serif text-[clamp(1.625rem,2.2vw,2.125rem)] leading-[1.05] text-walnut">
          <span className="relative inline-block">
            {category.name}
            {/* Subtle hover-only underline-draw — no permanent box. */}
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-bronze/60 transition-transform duration-500 ease-luxury group-hover:scale-x-100"
            />
          </span>
        </h3>
        <ArrowRight
          size={16}
          strokeWidth={1.4}
          className="shrink-0 text-walnut/25 transition-all duration-500 ease-luxury group-hover:translate-x-1 group-hover:text-bronze"
          aria-hidden="true"
        />
      </button>
    </Reveal>
  )
}

export default function ProjectsCategories() {
  const scrollTo = useScrollTo()

  function handleSelect(key) {
    // Tell the gallery to switch filter…
    window.dispatchEvent(
      new CustomEvent(PROJECT_FILTER_EVENT, { detail: { key } }),
    )
    // …and smooth-scroll to the gallery section heading.
    scrollTo('#projects-gallery')
  }

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

        {/* Directory — clickable names, two columns on desktop */}
        <Reveal delay={0.3}>
          <div className="mx-auto mt-12 max-w-5xl border-b border-stone/40 sm:grid sm:grid-cols-2 sm:gap-x-16 lg:mt-16 lg:gap-x-24">
            {CATEGORIES.map((category, i) => (
              <CategoryRow
                key={category.key}
                category={category}
                onSelect={handleSelect}
                delay={0.05 + Math.min(i, 4) * 0.05}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
