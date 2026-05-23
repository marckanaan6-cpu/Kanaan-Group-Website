import { Link } from 'react-router-dom'
import Section from './Section.jsx'
import Container from './Container.jsx'
import Reveal from './Reveal.jsx'

/*
  CATALOGUE CTA — invites the visitor to request the catalogue. The full PDF is
  not distributed publicly, so the primary action routes to the contact page
  instead of a direct download.
*/
export default function CatalogueCTA() {
  return (
    <Section
      id="catalogue-start"
      bg="beige"
      padding="flush"
      className="pt-24 pb-32 md:pt-28 md:pb-40 lg:pt-32 lg:pb-48"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            {/* Thin controlled Kaindl-blue rule — the only accent in this
                section; the download button stays warm bronze (accents never
                sit on a primary CTA). */}
            <span
              aria-hidden="true"
              className="mx-auto mb-8 block h-px w-10 bg-kaindl/60"
            />
            <h2 className="font-serif text-display-md leading-[1.05] text-walnut">
              Get the catalogue.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-xl font-serif text-[20px] leading-[1.4] text-walnut/75 sm:text-[22px]">
              Request the full catalogue, a printed copy, or specific
              material samples.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-col items-center gap-6">
              <Link
                to="/contact"
                className="inline-block border border-bronze px-10 py-4 text-[12px] uppercase tracking-[0.22em] text-bronze transition-colors duration-500 ease-luxury hover:bg-bronze hover:text-ivory"
              >
                Request catalogue
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-editorial text-walnut/70 transition-colors duration-500 ease-luxury hover:text-walnut"
              >
                <span className="relative">
                  Or contact us for a printed copy
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-luxury group-hover:scale-x-100" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
