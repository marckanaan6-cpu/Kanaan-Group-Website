import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'
import KaindlSwatch from './KaindlSwatch.jsx'
import { KAINDL_FAMILIES } from '../data/kaindlFinishes.js'

/*
  INSIDE THE CATALOGUE — material swatch library.

  Graphical, low-text presentation of the 9 featured Kaindl finishes, grouped
  into four families. Each family is a labelled cluster (olive eyebrow + a thin
  Kaindl-blue rule) above a grid of uniform square swatches. Tiles are
  placeholder material cards until real decor scans are added (see KaindlSwatch
  / kaindlFinishes.js). This is a deliberate material grid, not a project-photo
  grid.
*/
export default function CatalogueInside() {
  return (
    <Section
      id="catalogue-inside"
      bg="ivory"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="01">INSIDE THE CATALOGUE</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              A library of surfaces.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 font-serif text-[20px] leading-[1.35] text-walnut/75 sm:text-[22px]">
              Nine finishes across four families.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-y-16 lg:mt-20 lg:gap-y-24">
          {KAINDL_FAMILIES.map((group) => (
            <div key={group.family}>
              {/* Family marker — olive eyebrow + a thin controlled Kaindl rule */}
              <Reveal>
                <div className="flex items-center gap-5">
                  <span className="whitespace-nowrap text-eyebrow uppercase text-olive">
                    {group.family}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-kaindl/30"
                  />
                </div>
              </Reveal>

              {/* Uniform swatch grid — same tile size across every family */}
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:mt-10 lg:grid-cols-3 lg:gap-x-8">
                {group.finishes.map((finish, i) => (
                  <KaindlSwatch
                    key={finish.code}
                    finish={finish}
                    delay={Math.min(i, 3) * 0.08}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
