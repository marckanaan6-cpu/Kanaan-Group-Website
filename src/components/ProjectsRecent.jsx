import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  RECENT PROJECTS — real, completed Kanaan work. These are photographs of
  finished interiors and woodwork, NOT renderings. Do not relabel them as
  concepts, mood images, or visualisations.

  Files are confirmed present in public/images/projects/, so a plain <img>
  is used (not PlaceholderImage, which is only for slots that may be empty).

  Composition is a deliberate editorial spread, never an equal grid:
   - a full-width landscape "lead" (Living Interior), then
   - two asymmetric rows, each pairing one landscape (7/12) with one
     portrait (5/12); the portrait alternates sides for rhythm.

  Native aspect ratios (box ratios below are picked to sit close to these so
  object-cover crops as little as possible; object-center keeps each frame's
  key subject safe):
   - living / kitchen / wall-panels : 1586x992  (~16/10 landscape)
   - door                          : 1086x1448 (~3/4  portrait)
   - bathroom                      : 1122x1402 (~4/5  portrait)
*/

const LEAD = {
  src: '/images/projects/real-project-living.jpg',
  label: 'Living Interior',
  alt: 'Completed Kanaan living interior with a green sofa, white chairs, a dining area, and a marble partition element',
  aspect: 'aspect-[16/10]',
}

const ROWS = [
  {
    landscape: {
      src: '/images/projects/real-project-kitchen.jpg',
      label: 'Kitchen',
      alt: 'Custom Kanaan kitchen with an island, warm vertical lighting, and beige cabinetry',
      aspect: 'aspect-[3/2]',
    },
    portrait: {
      src: '/images/projects/real-project-door.jpg',
      label: 'Door',
      alt: 'Entrance hallway with a custom wooden door, a marble wall, a green wall detail, and a built-in vanity',
      aspect: 'aspect-[4/5]',
    },
    portraitSide: 'right',
  },
  {
    landscape: {
      src: '/images/projects/real-project-wall-panels.jpg',
      label: 'Wall Panels',
      alt: 'Fluted wall panelling in a Kanaan interior, beside a green sofa',
      aspect: 'aspect-[3/2]',
    },
    portrait: {
      src: '/images/projects/real-project-bathroom.jpg',
      label: 'Bathroom Detail',
      alt: 'Bathroom mirror detail with warm lighting and a pendant light',
      aspect: 'aspect-[4/5]',
    },
    portraitSide: 'left',
  },
]

function ProjectCard({ item, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <figure className="group">
        <div className={`relative overflow-hidden bg-walnut/5 ${item.aspect}`}>
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-[1.04]"
          />
        </div>
        <figcaption className="mt-4 text-eyebrow uppercase text-walnut/60">
          {item.label}
        </figcaption>
      </figure>
    </Reveal>
  )
}

export default function ProjectsRecent() {
  return (
    <Section
      id="projects-recent"
      bg="ivory"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        {/* Section intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="02">RECENT PROJECTS</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              A first look at our work.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-5 max-w-xl font-serif text-[20px] leading-[1.4] text-walnut/75 sm:text-[22px]">
              A small selection of completed interiors, woodwork details, and
              built-in pieces. More project photography will be added over time.
            </p>
          </Reveal>
        </div>

        {/* Editorial gallery */}
        <div className="mt-14 flex flex-col gap-12 lg:mt-20 lg:gap-16">
          {/* Lead — full-width landscape */}
          <ProjectCard item={LEAD} />

          {/* Asymmetric landscape + portrait rows */}
          {ROWS.map((row) => (
            <div
              key={row.landscape.label}
              className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start md:gap-8"
            >
              {row.portraitSide === 'left' ? (
                <>
                  <div className="md:col-span-5">
                    <ProjectCard item={row.portrait} />
                  </div>
                  <div className="md:col-span-7">
                    <ProjectCard item={row.landscape} delay={0.12} />
                  </div>
                </>
              ) : (
                <>
                  <div className="md:col-span-7">
                    <ProjectCard item={row.landscape} />
                  </div>
                  <div className="md:col-span-5">
                    <ProjectCard item={row.portrait} delay={0.12} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
