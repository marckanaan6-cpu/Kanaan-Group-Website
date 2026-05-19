import { Link } from 'react-router-dom'
import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  CONTACT METHODS — edit this array to swap in real contact details.
  When you have real values, set the `href` field too. If `href` is null,
  the entry renders as muted placeholder text (no fake link).

  Examples once real:
    { label: 'PHONE',     value: '+961 1 234 567',          href: 'tel:+9611234567' }
    { label: 'EMAIL',     value: 'hello@kanaangroup.com',   href: 'mailto:hello@kanaangroup.com' }
    { label: 'INSTAGRAM', value: '@kanaangroup',            href: 'https://instagram.com/kanaangroup' }
*/
const METHODS = [
  { label: 'PHONE', value: 'Phone to be added', href: null },
  { label: 'EMAIL', value: 'Email to be added', href: null },
  { label: 'INSTAGRAM', value: 'Instagram to be added', href: null },
]

function MethodRow({ method, delay }) {
  const content = (
    <div className="flex flex-col items-center gap-2">
      <span className="text-eyebrow uppercase tracking-[0.22em] text-walnut/55">
        {method.label}
      </span>
      <span className="font-serif text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.1] text-walnut">
        {method.value}
      </span>
    </div>
  )

  return (
    <Reveal delay={delay}>
      {method.href ? (
        <a
          href={method.href}
          className="group block py-8 transition-colors duration-500 ease-luxury hover:bg-ivory/50"
        >
          {content}
        </a>
      ) : (
        <div className="py-8">{content}</div>
      )}
    </Reveal>
  )
}

export default function ContactInfo() {
  return (
    <Section
      id="contact-info"
      bg="beige"
      padding="flush"
      className="pt-20 pb-32 md:pt-24 md:pb-40 lg:pt-28 lg:pb-48"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="01">WAYS TO REACH US</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              Direct lines to the workshop.
            </h2>
          </Reveal>
        </div>

        {/* Direct contact methods */}
        <div className="mx-auto mt-14 max-w-2xl divide-y divide-stone/40 border-y border-stone/40 lg:mt-20">
          {METHODS.map((method, i) => (
            <MethodRow
              key={method.label}
              method={method}
              delay={0.15 + i * 0.1}
            />
          ))}
        </div>

        {/* Visit cross-link to Locations page */}
        <Reveal delay={0.55}>
          <div className="mx-auto mt-16 max-w-md text-center">
            <p className="text-eyebrow uppercase tracking-[0.22em] text-walnut/55">
              Or visit us
            </p>
            <Link
              to="/locations"
              className="group mt-4 inline-flex items-center gap-3 font-serif text-[20px] leading-[1.3] text-walnut transition-colors duration-500 ease-luxury hover:text-bronze sm:text-[22px]"
            >
              <span className="relative">
                Antelias and Mazraat Yachouh
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-luxury group-hover:scale-x-100" />
              </span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
