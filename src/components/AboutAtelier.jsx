import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  REUSED REAL KANAAN PHOTO — Image J (wide Biesse CNC, Kanaan visible).
  Already in the repo at this path from the homepage Atelier section.
  Reused here intentionally: About is the canonical deep-dive page for
  workshop capability; the iconic atelier shot belongs in both places.

  Subtle warm filter mirrors the Atelier section's treatment so the photo
  sits in the ivory/walnut/bronze palette.
*/
const ATELIER_IMAGE_SRC = '/images/workshop/atelier-biesse.jpg'
const ATELIER_FILTER = 'sepia(0.26) saturate(0.8) hue-rotate(-9deg) brightness(0.95) contrast(1.02)'

export default function AboutAtelier() {
  return (
    <Section
      id="about-atelier"
      bg="ivory"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8 lg:gap-20">
          {/* Image — right (mirrored from Family section) */}
          <div className="md:col-span-7 md:order-2">
            <Reveal>
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={ATELIER_IMAGE_SRC}
                  alt="A wide view of the Kanaan workshop with the Biesse CNC at work"
                  style={{ filter: ATELIER_FILTER }}
                  className="block h-full w-full object-cover object-[center_62%]"
                />
              </div>
            </Reveal>
          </div>

          {/* Text — left */}
          <div className="md:col-span-5 md:order-1">
            <Reveal delay={0.1}>
              <SectionLabel number="02">THE ATELIER TODAY</SectionLabel>
            </Reveal>

            <Reveal delay={0.25}>
              <h2 className="mt-8 font-serif text-display-sm leading-[1.1] text-walnut">
                Built on tradition, equipped for today.
              </h2>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-8 max-w-prose text-[15px] leading-[1.75] text-charcoal/80">
                The atelier outside Antelias houses the full workshop — from
                hand tools to a Biesse CNC, with material storage, finishing
                rooms, and assembly bays under one roof.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <p className="mt-6 max-w-prose text-[15px] leading-[1.75] text-charcoal/80">
                Modern machinery handles the precision; the hands behind the
                bench handle everything else. Every commission moves through
                the same workshop, supervised by the family that's run it for
                forty years.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
