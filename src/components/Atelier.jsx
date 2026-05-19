import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  REAL KANAAN PHOTO — Image J (wide Biesse CNC with the Kanaan name visible).
  This is the "proof of capability" shot — real workshop, real machine, real
  brand presence. Do not substitute with a mood image.

  Place file at: public/images/workshop/atelier-biesse.jpg
  Recommended crop: landscape ~3:2 or 16:10, ~1600px+ wide. The Kanaan name
  on the machine should be readable in the frame.

  Until the file is present, a soft bg-walnut/10 placeholder shows in the
  image slot so the layout stays intact.

  Image treatment:
   - object-cover + object-[center_45%] crops the frame slightly low so the
     ceiling lights have less visual weight; the machine and Kanaan branding
     stay anchored in the center.
   - ATELIER_FILTER is a subtle warm pass that pulls the cool/green industrial
     cast back into the ivory/walnut/bronze palette without making the photo
     look filtered. Mirrors the approach used in Inside the Workshop.
*/
const ATELIER_IMAGE_SRC = '/images/workshop/atelier-biesse.jpg'
const ATELIER_FILTER = 'sepia(0.26) saturate(0.8) hue-rotate(-9deg) brightness(0.95) contrast(1.02)'

export default function Atelier() {
  return (
    <Section
      id="atelier"
      bg="beige"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8 lg:gap-20">
          {/* Image — appears first on mobile (top), pushed to right column on desktop */}
          <div className="md:col-span-7 md:order-2">
            <Reveal>
              <div className="aspect-[3/2] overflow-hidden bg-walnut/10">
                <img
                  src={ATELIER_IMAGE_SRC}
                  alt="A wide view of the Kanaan workshop with the Biesse CNC at work"
                  style={{ filter: ATELIER_FILTER }}
                  className="block h-full w-full object-cover object-[center_62%]"
                />
              </div>
            </Reveal>
          </div>

          {/* Text — left column on desktop, below image on mobile */}
          <div className="md:col-span-5 md:order-1">
            <Reveal delay={0.1}>
              <SectionLabel number="05">THE ATELIER</SectionLabel>
            </Reveal>

            <Reveal delay={0.25}>
              <h2 className="mt-8 font-serif text-display-sm leading-[1.1] text-walnut">
                Where the work happens.
              </h2>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-8 max-w-prose text-[15px] leading-[1.75] text-charcoal/80">
                Behind every surface is a workshop built for precision. Kanaan
                Group brings together hand craftsmanship, modern machinery,
                and material knowledge to turn boards, fittings, and ideas
                into finished interiors.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="mt-10">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-editorial text-bronze transition-colors duration-500 ease-luxury hover:text-walnut"
                >
                  <span className="relative">
                    About the family
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
        </div>
      </Container>
    </Section>
  )
}
