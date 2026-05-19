import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  REAL KANAAN PHOTO — Image A (hammer striking wood).
  This section uses real workshop archive photography, not a mood image.

  Place the file at: public/images/workshop/heritage-hammer.jpg
  Recommended crop: landscape ~4:3, ~1600px+ wide, documentary feel.

  Image rendering is intentionally kept as a plain <img> so the real photo
  appears reliably. The mask-wipe reveal can be reintroduced later once
  the layout is finalized.
*/
const HERITAGE_IMAGE_SRC = '/images/workshop/heritage-hammer.jpg'

export default function Heritage() {
  return (
    <Section
      id="heritage"
      bg="ivory"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8 lg:gap-20">
          {/* Image — left column, dominant */}
          <div className="md:col-span-7">
            <Reveal>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={HERITAGE_IMAGE_SRC}
                  alt="Craftsman striking wood with a hammer in a warm workshop"
                  className="block h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Text — right column, editorial column */}
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <SectionLabel number="01">HERITAGE</SectionLabel>
            </Reveal>

            <Reveal delay={0.25}>
              <h2 className="mt-8 font-serif text-display-sm leading-[1.1] text-walnut">
                Family-owned for three generations.
              </h2>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-5 font-serif text-[20px] leading-[1.35] text-walnut/75 sm:text-[22px]">
                Keeping tradition alive while moving with new trends.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <p className="mt-9 max-w-prose text-[15px] leading-[1.75] text-charcoal/80">
                Kanaan Group began in 1980 as a small woodworking shop in
                Antelias. Three generations later, the same family continues
                to build custom interiors, kitchens, bedrooms, doors, and
                complete woodwork solutions — while supplying the hardware
                professionals rely on.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
