import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  FIRE-RATED DOORS — a focused capability section on the Projects page.

  Layout: short centered intro + two large images side-by-side at their NATURAL
  aspect ratio (no forced 16:9 crop — the previous version chopped the top and
  bottom off portrait door photos). Each image fills its column width and lets
  its own height come through, so the full door is always visible.

  Files (optimized .webp; PNG originals archived under originals/):
    public/images/fire-rated-doors/fire-rated-door-01.webp
    public/images/fire-rated-doors/fire-rated-door-02.webp

  Wording is intentionally neutral. Do NOT introduce certification claims
  (EI30 / EI60 / certified / approved / compliant) until confirmed official
  details are provided by the user.
*/
const IMAGE_01 = '/images/fire-rated-doors/fire-rated-door-01.webp'
const IMAGE_02 = '/images/fire-rated-doors/fire-rated-door-02.webp'

function DoorImage({ src, alt, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      {/* bg-beige paints immediately so the door area never reads as blank
          while the WebP streams in on a slow connection. */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full rounded-sm bg-beige shadow-[0_1px_2px_rgba(59,36,24,0.06)] ring-1 ring-walnut/5"
      />
    </Reveal>
  )
}

export default function FireRatedDoors() {
  return (
    <Section
      id="projects-fire-rated"
      bg="ivory"
      padding="flush"
      className="pt-20 pb-24 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32"
    >
      <Container>
        {/* Intro — title + one short sentence */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel number="02">SPECIALTY</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              Custom doors — including fire-rated.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-5 font-serif text-[20px] leading-[1.4] text-walnut/75 sm:text-[22px]">
              Alongside our regular custom doors, we also build fire-rated
              solutions to project specifications.
            </p>
          </Reveal>
        </div>

        {/* Two large images, natural aspect, side-by-side on tablet+ */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 items-start gap-8 sm:grid-cols-2 sm:gap-10 lg:mt-20 lg:gap-12">
          <DoorImage src={IMAGE_01} alt="Custom fire-rated door — Kanaan Group" />
          <DoorImage src={IMAGE_02} alt="Custom fire-rated door — Kanaan Group" delay={0.12} />
        </div>

        {/* Quiet trailing line — kept brief on purpose */}
        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl text-center text-[14px] leading-[1.7] text-charcoal/70 lg:mt-14">
            Sizes, finishes, and engineering tailored on request — get in touch
            for project-specific details.
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}
