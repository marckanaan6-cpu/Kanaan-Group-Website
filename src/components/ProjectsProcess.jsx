import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'
import PlaceholderImage from './PlaceholderImage.jsx'

/*
  REAL KANAAN PHOTOS — needed for the project-process essay.

  Place files at:
   - public/images/workshop/projects-design.jpg    (drawing / measuring / blueprint)
   - public/images/workshop/projects-build.jpg     (fabrication in progress)
   - public/images/workshop/projects-assemble.jpg  (hand-joining / preparing a piece)

  Recommended: landscape ~4:3, ~1600px+ wide, documentary feel.
  Until present, soft warm placeholder rectangles fill the slots.

  Do NOT reuse the homepage workshop-measure / assemble / finish images here —
  a visitor going from homepage to Projects page would see the same three
  photos twice, which weakens both sections. These are distinct stages of
  *project* work, not abstract craft principles.

  A real on-site INSTALL photo will be added later as a separate stage; for
  now the third block is ASSEMBLE because the available imagery shows
  workshop joining rather than on-site fitting.
*/

const BLOCKS = [
  {
    image: '/images/workshop/projects-design.jpg',
    alt: 'Drawing or measuring a project at the Kanaan workshop',
    eyebrow: 'DRAW',
    title: 'Drawn first.',
    body: "Each project starts with measurements, then drawings. We refine until what's on paper is exactly what will be built.",
  },
  {
    image: '/images/workshop/projects-build.jpg',
    alt: 'A custom piece being fabricated in the Kanaan workshop',
    eyebrow: 'FABRICATE',
    title: 'Built in our workshop.',
    body: 'Cutting, joining, finishing — all under one roof in our atelier outside Antelias.',
  },
  {
    image: '/images/workshop/projects-assemble.jpg',
    alt: 'A craftsman hand-joining a piece in the Kanaan workshop',
    eyebrow: 'ASSEMBLE',
    title: 'Joined by hand.',
    body: 'Our team joins, adjusts, and prepares each piece with care before it becomes part of the final interior.',
  },
]

function ProcessBlock({ block, imageLeft }) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-8 lg:gap-20">
      {/* Image */}
      <div className={`md:col-span-7 ${imageLeft ? '' : 'md:order-2'}`}>
        <Reveal>
          <PlaceholderImage
            src={block.image}
            alt={block.alt}
            aspectClassName="aspect-[4/3]"
          />
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

export default function ProjectsProcess() {
  return (
    <Section
      id="projects-process"
      bg="ivory"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        {/* Section intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="02">HOW WE WORK</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              Three stages, always the same.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 font-serif text-[20px] leading-[1.35] text-walnut/75 sm:text-[22px]">
              Every commission moves from drawing to fabrication to install.
            </p>
          </Reveal>
        </div>

        {/* Process blocks */}
        <div className="mt-14 flex flex-col gap-y-16 lg:mt-20 lg:gap-y-24">
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
