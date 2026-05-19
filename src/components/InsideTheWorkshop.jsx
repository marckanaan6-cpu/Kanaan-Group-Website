import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  REAL KANAAN PHOTOS — workshop process essay (Images F, B, D from the archive).
  These are documentary craft photos, NOT mood images. Do not substitute with
  stock photography — the section's entire purpose is to ground the brand in
  real workshop reality.

  Place files at:
   - public/images/workshop/workshop-measure.jpg   (Image F — hand measuring wood)
   - public/images/workshop/workshop-assemble.jpg  (Image B — hands clamping wood)
   - public/images/workshop/workshop-finish.jpg    (Image D — sanding a frame)

  Recommended crop: landscape ~4:3, ~1600px+ wide, documentary feel.
  Until the files are present, each block's container shows a soft warm
  rectangle so the page layout stays intact.
*/

// Subtle warm color treatment for the workshop photos so they sit
// comfortably in the ivory/walnut/bronze palette without losing authenticity.
// Each block carries its own filter so we can compensate for image-specific
// quirks (a cold drill, an over-bright finish shot) without affecting others.
const FILTER_BASE = 'sepia(0.12) saturate(0.95) brightness(0.98) contrast(1.02)'
const FILTER_ASSEMBLE = 'sepia(0.18) saturate(0.85) hue-rotate(-4deg) brightness(0.97) contrast(1.03)'
const FILTER_FINISH = 'sepia(0.18) saturate(0.92) brightness(0.93) contrast(1.05)'

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

export default function InsideTheWorkshop() {
  return (
    <Section
      id="workshop"
      bg="beige"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        {/* Section intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="03">INSIDE THE WORKSHOP</SectionLabel>
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

        {/* Process blocks */}
        <div className="mt-14 flex flex-col gap-y-20 lg:mt-20 lg:gap-y-28">
          {BLOCKS.map((block, i) => (
            <ProcessBlock
              key={block.eyebrow}
              block={block}
              imageLeft={i % 2 === 0}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
