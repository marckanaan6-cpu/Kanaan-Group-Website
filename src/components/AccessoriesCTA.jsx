import { Link } from 'react-router-dom'
import Section from './Section.jsx'
import Container from './Container.jsx'
import Reveal from './Reveal.jsx'

export default function AccessoriesCTA() {
  return (
    <Section
      id="accessories-start"
      bg="beige"
      padding="flush"
      className="pt-24 pb-32 md:pt-28 md:pb-40 lg:pt-32 lg:pb-48"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-serif text-display-md leading-[1.05] text-walnut">
              Tell us what the project needs.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-xl font-serif text-[20px] leading-[1.4] text-walnut/75 sm:text-[22px]">
              From a handful of hinges to a whole-project hardware package —
              we'll quote it, source it, or advise on the right specification.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-block border border-bronze px-10 py-4 text-[12px] uppercase tracking-[0.22em] text-bronze transition-colors duration-500 ease-luxury hover:bg-bronze hover:text-ivory"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
