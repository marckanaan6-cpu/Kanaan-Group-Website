import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  THE WORKSHOP — homepage capability chapter.

  This merges the former "Inside the Workshop" (process essay) and "The Atelier"
  (machine / proof-of-capability beat) into one chapter, per the approved
  "The Reveal" homepage spec. It is the site's single industrial-precision
  register: precise and professional, but still warm.

  REAL KANAAN PHOTOS — documentary craft + machinery, NOT mood images. Do not
  substitute with stock photography.
   - public/images/workshop/workshop-measure.jpg    (hand measuring wood)
   - public/images/workshop/workshop-assemble.jpg   (hands clamping a joint)
   - public/images/workshop/workshop-finish.jpg     (sanding a frame)
   - public/images/workshop/atelier-biesse.jpg      (wide Biesse CNC, Kanaan name visible)

  Subtle warm filters keep the photos in the ivory/walnut/bronze palette
  without losing authenticity; each carries its own pass to compensate for
  image-specific color casts.

  Copy is preserved verbatim from the two approved sections — only the chapter
  label and structure changed. More machine names / capability facts will be
  added later once provided (no invented numbers).
*/

const FILTER_BASE = 'sepia(0.12) saturate(0.95) brightness(0.98) contrast(1.02)'
const FILTER_ASSEMBLE =
  'sepia(0.18) saturate(0.85) hue-rotate(-4deg) brightness(0.97) contrast(1.03)'
const FILTER_FINISH = 'sepia(0.18) saturate(0.92) brightness(0.93) contrast(1.05)'

const ATELIER_IMAGE_SRC = '/images/workshop/atelier-biesse.jpg'
const ATELIER_FILTER =
  'sepia(0.26) saturate(0.8) hue-rotate(-9deg) brightness(0.95) contrast(1.02)'

const BLOCKS = [
  {
    image: '/images/workshop/workshop-measure.jpg',
    alt: 'A hand carefully measuring wood in the Kanaan workshop',
    eyebrow: 'MEASURE',
    title: 'Precision first.',
    body: 'Every project begins with careful measurements and a clear understanding of the space.',
    filter: FILTER_BASE,
  },
  {
    image: '/images/workshop/workshop-assemble.jpg',
    alt: 'Hands clamping wood as a joint is held in place',
    eyebrow: 'ASSEMBLE',
    title: 'Held until it holds itself.',
    body: 'Wood is cut, joined, clamped, and assembled with the patience that good joinery requires.',
    filter: FILTER_ASSEMBLE,
  },
  {
    image: '/images/workshop/workshop-finish.jpg',
    alt: 'A craftsman sanding a wooden frame to its final finish',
    eyebrow: 'FINISH',
    title: 'The last details matter.',
    body: 'Sanding, finishing, and surface treatment turn raw wood into work that belongs in a home.',
    filter: FILTER_FINISH,
  },
]

function ProcessBlock({ block, imageLeft }) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8 lg:gap-20">
      {/* Image */}
      <div className={`md:col-span-7 ${imageLeft ? '' : 'md:order-2'}`}>
        <Reveal>
          <div className="aspect-[4/3] overflow-hidden bg-walnut/10">
            <img
              src={block.image}
              alt={block.alt}
              style={{ filter: block.filter }}
              className="block h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      {/* Text */}
      <div className={`md:col-span-5 ${imageLeft ? '' : 'md:order-1'}`}>
        <Reveal delay={0.15}>
          <span className="text-eyebrow uppercase text-olive">
            {block.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.3}>
          <h3 className="mt-6 font-serif text-[clamp(1.75rem,2.4vw,2.25rem)] leading-[1.15] text-walnut">
            {block.title}
          </h3>
        </Reveal>

        <Reveal delay={0.45}>
          <p className="mt-6 max-w-prose text-[15px] leading-[1.75] text-charcoal/80">
            {block.body}
          </p>
        </Reveal>
      </div>
    </div>
  )
}

export default function WorkshopCapability() {
  return (
    <Section
      id="workshop"
      bg="beige"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        {/* Chapter intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="04">THE WORKSHOP</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              Made by hand, finished with patience.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 font-serif text-[20px] leading-[1.35] text-walnut/75 sm:text-[22px]">
              Every project moves through the same three principles.
            </p>
          </Reveal>
        </div>

        {/* Process essay */}
        <div className="mt-14 flex flex-col gap-y-20 lg:mt-20 lg:gap-y-28">
          {BLOCKS.map((block, i) => (
            <ProcessBlock
              key={block.eyebrow}
              block={block}
              imageLeft={i % 2 === 0}
            />
          ))}
        </div>

        {/* Machinery / atelier beat — proof of capability */}
        <div className="mt-20 lg:mt-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8 lg:gap-20">
            {/* Image — top on mobile, right column on desktop */}
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
                <span className="text-eyebrow uppercase text-olive">
                  The Atelier
                </span>
              </Reveal>

              <Reveal delay={0.25}>
                <h3 className="mt-6 font-serif text-[clamp(1.75rem,2.4vw,2.25rem)] leading-[1.15] text-walnut">
                  Where the work happens.
                </h3>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="mt-6 max-w-prose text-[15px] leading-[1.75] text-charcoal/80">
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
        </div>
      </Container>
    </Section>
  )
}
