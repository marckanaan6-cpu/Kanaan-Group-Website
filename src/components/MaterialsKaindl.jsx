import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  TEMPORARY MOOD IMAGE — replace with real Kanaan/Kaindl material photography later.
  Not a real Kanaan catalogue shoot. Do not present as the official catalogue.

  Place file at: public/images/products/kaindl-materials.jpg

  Brief:
   - A flat-lay or close-crop of Kaindl panel swatches and material samples
     arranged on a warm linen or ivory surface, editorial composition, soft
     daylight. Could also be a close-crop of stacked panel edges showing
     wood/stone/lacquer texture variety. ~1600px+ wide, landscape ~16:10.
   - Should evoke a curated material library, not a hardware-store sample rack.

  Until the file is present, a warm bg-walnut/10 placeholder shows in the
  image slot so the section layout stays intact.
*/
const KAINDL_IMAGE_SRC = '/images/products/kaindl-materials.jpg'

export default function MaterialsKaindl() {
  return (
    <Section
      id="materials"
      bg="ivory"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        {/* Intro — label + headline */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel number="04">MATERIALS</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              A partnership in surfaces.
            </h2>
          </Reveal>
        </div>

        {/* Main material image */}
        <Reveal delay={0.25}>
          <div className="mx-auto mt-12 max-w-5xl lg:mt-16">
            <div className="aspect-[16/10] overflow-hidden bg-walnut/10">
              <img
                src={KAINDL_IMAGE_SRC}
                alt="Kaindl panel swatches and material samples arranged for selection"
                className="block h-full w-full object-cover object-[center_35%]"
              />
            </div>
          </div>
        </Reveal>

        {/* Body + CTA */}
        <div className="mx-auto mt-10 max-w-2xl text-center lg:mt-14">
          <Reveal>
            <p className="text-[15px] leading-[1.75] text-charcoal/80">
              As the exclusive Lebanese partner of Kaindl, Kanaan Group works
              with a focused range of solid lacquers, stone effects, and
              natural wood decors — selected for interiors that need both
              beauty and durability.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10">
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
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
