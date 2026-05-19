import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  REUSED REAL KANAAN PHOTO — Image A (hammer striking wood).
  Already in the repo at this path from the homepage Heritage section.
  Reused here intentionally: About is the canonical "deep dive" page for
  the family story; reusing the iconic heritage image creates continuity
  rather than feeling like duplication.
*/
const FAMILY_IMAGE_SRC = '/images/workshop/heritage-hammer.jpg'

export default function AboutFamily() {
  return (
    <Section
      id="about-family"
      bg="beige"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8 lg:gap-20">
          {/* Image — left */}
          <div className="md:col-span-7">
            <Reveal>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={FAMILY_IMAGE_SRC}
                  alt="A craftsman's hammer striking wood in the Kanaan workshop"
                  className="block h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Text — right */}
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <SectionLabel number="01">THREE GENERATIONS</SectionLabel>
            </Reveal>

            <Reveal delay={0.25}>
              <h2 className="mt-8 font-serif text-display-sm leading-[1.1] text-walnut">
                From a small shop in Antelias.
              </h2>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-8 max-w-prose text-[15px] leading-[1.75] text-charcoal/80">
                Kanaan Group began in 1980 as a small woodworking shop founded
                by the family in Antelias. Three generations later, the same
                family still runs the workshop — refining the craft, expanding
                the range, and supplying the hardware that other professionals
                rely on across Lebanon.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <p className="mt-6 max-w-prose text-[15px] leading-[1.75] text-charcoal/80">
                What started as one bench has become a modern atelier, two
                showrooms, and a supply business — but the standards, and the
                hands that set them, have stayed in the family.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
