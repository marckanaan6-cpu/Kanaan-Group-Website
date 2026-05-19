import { Link } from 'react-router-dom'
import Section from './Section.jsx'
import Container from './Container.jsx'
import Reveal from './Reveal.jsx'

export default function ProjectsCTA() {
  return (
    <Section
      id="projects-start"
      bg="beige"
      padding="flush"
      className="pt-24 pb-32 md:pt-28 md:pb-40 lg:pt-32 lg:pb-48"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-serif text-display-md leading-[1.05] text-walnut">
              Bring us a drawing.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-xl font-serif text-[20px] leading-[1.4] text-walnut/75 sm:text-[22px]">
              Tell us about the project — we'll come back with measurements,
              options, and a clear scope.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-block border border-bronze px-10 py-4 text-[12px] uppercase tracking-[0.22em] text-bronze transition-colors duration-500 ease-luxury hover:bg-bronze hover:text-ivory"
              >
                Begin a project
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
