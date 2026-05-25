import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'
import PlaceholderImage from './PlaceholderImage.jsx'

/*
  ACCESSORIES · KOLITY — homepage teaser (05).

  A calm two-column editorial moment introducing Kanaan's accessories & supplies
  world and leading to /accessories. NOT a product grid and NOT a repeat of the
  Accessories page — one strong image + a few lines + a link.

  Kolity is named in the copy as a distributor partner, but the homepage stays
  warm: the ONLY green is a single thin hairline divider (bg-kolity/40). No
  Kolity logo here — partner color is kept off the homepage by design.

  Image is the real Antelias accessories shot (shared with the Accessories hero).
*/
const TEASER_IMAGE_SRC =
  '/images/accessories/antelias/antelias-accessories-hero.png'

export default function AccessoriesKolity() {
  return (
    <Section
      id="accessories-teaser"
      bg="beige"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8 lg:gap-20">
          {/* Image — left column on desktop */}
          <div className="md:col-span-7">
            <PlaceholderImage
              src={TEASER_IMAGE_SRC}
              alt="A curated arrangement of woodwork hardware, tools, and supplies"
              aspectClassName="aspect-[4/3]"
            />
          </div>

          {/* Text — right column on desktop */}
          <div className="md:col-span-5">
            <Reveal>
              <SectionLabel number="06">ACCESSORIES</SectionLabel>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
                The details that complete the work.
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-8 text-[15px] leading-[1.7] text-charcoal/80">
                Hinges and drawer systems as distributor of Kolity hardware in
                Lebanon. Handles, tools, and professional supplies from our own
                range.
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              {/* Controlled green divider — the only green on the homepage */}
              <span
                aria-hidden="true"
                className="mt-8 block h-px w-10 bg-kolity/40"
              />
            </Reveal>

            <Reveal delay={0.55}>
              <Link
                to="/accessories"
                className="group mt-8 inline-flex items-center gap-3 text-[12px] uppercase tracking-editorial text-bronze transition-colors duration-500 ease-luxury hover:text-walnut"
              >
                <span className="relative">
                  Explore accessories
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-luxury group-hover:scale-x-100" />
                </span>
                <ArrowRight
                  size={14}
                  strokeWidth={1.4}
                  className="transition-transform duration-500 ease-luxury group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
