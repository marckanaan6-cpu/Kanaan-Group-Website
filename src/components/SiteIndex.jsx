import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Section from './Section.jsx'
import Container from './Container.jsx'
import Reveal from './Reveal.jsx'
import { useScrollTo } from './SmoothScrollProvider.jsx'

/*
  SITE INDEX — an editorial "contents" navigator placed just after the Heritage
  intro. Instead of buttons, it reads like a monograph index: serif labels on a
  ruled grid, with an underline-draw + arrow on hover.

  Two kinds of destinations:
   - `anchor` items smooth-scroll to a section on this homepage (ArrowDown cue),
   - `to` items route to a dedicated page (ArrowUpRight cue).
*/
const ITEMS = [
  { label: 'Branches', anchor: '#capacity' },
  { label: 'Workshop', anchor: '#workshop' },
  { label: 'Materials', anchor: '#materials' },
  { label: 'Accessories', anchor: '#accessories-teaser' },
  { label: 'Projects', to: '/projects' },
  { label: 'Catalogue', to: '/catalogue' },
  { label: 'Contact', to: '/contact' },
]

function RowInner({ label, isAnchor }) {
  const Arrow = isAnchor ? ArrowDown : ArrowUpRight
  return (
    <span className="group flex items-center justify-between gap-6 border-b border-stone/40 py-5">
      <span className="relative font-serif text-[clamp(1.25rem,2.2vw,1.6rem)] leading-none text-walnut">
        {label}
        <span
          aria-hidden="true"
          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-bronze/50 transition-transform duration-500 ease-luxury group-hover:scale-x-100"
        />
      </span>
      <Arrow
        size={18}
        strokeWidth={1.4}
        className="shrink-0 text-walnut/35 transition-all duration-500 ease-luxury group-hover:text-bronze group-hover:translate-x-0.5"
      />
    </span>
  )
}

export default function SiteIndex() {
  const scrollTo = useScrollTo()

  return (
    <Section
      id="explore"
      bg="ivory"
      padding="flush"
      className="pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28"
    >
      <Container>
        <Reveal>
          <span className="text-eyebrow uppercase text-olive">Explore</span>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="mt-5 max-w-2xl font-serif text-display-sm leading-[1.15] text-walnut">
            Find your way around.
          </h2>
        </Reveal>

        <Reveal delay={0.24}>
          <nav
            aria-label="Explore the site"
            className="mt-10 grid grid-cols-1 border-t border-stone/40 sm:grid-cols-2 sm:gap-x-12 lg:mt-12 lg:gap-x-20"
          >
            {ITEMS.map((item) =>
              item.to ? (
                <Link key={item.label} to={item.to} className="block">
                  <RowInner label={item.label} isAnchor={false} />
                </Link>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => scrollTo(item.anchor)}
                  className="block w-full text-left"
                >
                  <RowInner label={item.label} isAnchor={true} />
                </button>
              ),
            )}
          </nav>
        </Reveal>
      </Container>
    </Section>
  )
}
