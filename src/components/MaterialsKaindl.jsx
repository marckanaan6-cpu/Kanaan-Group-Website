import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'
import KaindlSwatch from './KaindlSwatch.jsx'
import PartnerLockup from './PartnerLockup.jsx'
import { pickFinishes } from '../data/kaindlFinishes.js'

/*
  MATERIALS · KAINDL — homepage teaser.

  A short, graphical preview of the Kaindl partnership: one short line, a strip
  of four featured swatches (one per family), a small Kaindl lockup, and a link
  into the full catalogue. Controlled Kaindl-blue accent only (lockup rule +
  swatch codes); the section eyebrow stays olive. Real textures replace the
  placeholder cards later via kaindlFinishes.js.
*/
const FEATURED = pickFinishes('27049', '44374', '4398', '5414')

export default function MaterialsKaindl() {
  return (
    <Section
      id="materials"
      bg="ivory"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        {/* Intro */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel number="04">MATERIALS</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              A partnership in surfaces.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 text-[15px] leading-[1.7] text-charcoal/80">
              Exclusive Kaindl partner in Lebanon — solid, concrete, metal, and
              wood surfaces, selected for interiors that last.
            </p>
          </Reveal>
        </div>

        {/* Featured swatch strip */}
        <div className="mx-auto mt-12 max-w-5xl lg:mt-16">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-8">
            {FEATURED.map((finish, i) => (
              <KaindlSwatch
                key={finish.code}
                finish={finish}
                category={finish.family}
                delay={0.1 + i * 0.08}
              />
            ))}
          </div>
        </div>

        {/* Lockup + catalogue link */}
        <div className="mt-12 flex flex-col items-center gap-8 lg:mt-14">
          <Reveal>
            <PartnerLockup
              logo="/images/brands/kaindl-logo-transparent.png"
              alt="Kaindl"
              label="Exclusive Kaindl partner in Lebanon"
              align="center"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <Link
              to="/catalogue"
              className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-editorial text-bronze transition-colors duration-500 ease-luxury hover:text-walnut"
            >
              <span className="relative">
                Explore the catalogue
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
      </Container>
    </Section>
  )
}
