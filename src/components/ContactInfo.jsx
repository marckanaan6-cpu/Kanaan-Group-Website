import { Link } from 'react-router-dom'
import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  CONTACT METHODS — real Kanaan Group contact details.
  - Showroom entries use `items` to list the mobile + landline.
  - Single-value entries (email, instagram) use `value` + `href`.
  - `external: true` on Instagram opens in a new tab.
  - Tel extensions use the comma convention (e.g. tel:+9614407198,0)
    which most modern phones interpret as "dial, pause, dial extension".
*/
const METHODS = [
  {
    label: 'ANTELIAS',
    items: [
      { sublabel: 'Mobile', value: '+961 3 807 020', href: 'tel:+9613807020' },
      { sublabel: 'Tel', value: '+961 4 407 198 ext. 0', href: 'tel:+9614407198,0' },
    ],
  },
  {
    label: 'MAZRAAT YACHOUH',
    items: [
      { sublabel: 'Mobile', value: '+961 3 302 205', href: 'tel:+9613302205' },
      { sublabel: 'Tel', value: '+961 4 924 982', href: 'tel:+9614924982' },
    ],
  },
  {
    label: 'EMAIL',
    items: [
      { sublabel: 'Khaled', value: 'khaled@kanaan-group.com', href: 'mailto:khaled@kanaan-group.com' },
      { sublabel: 'Bassem', value: 'bassem@kanaan-group.com', href: 'mailto:bassem@kanaan-group.com' },
      { sublabel: 'Marc',   value: 'marc@kanaan-group.com',   href: 'mailto:marc@kanaan-group.com' },
    ],
  },
  {
    label: 'INSTAGRAM',
    value: '@kanaan_group',
    href: 'https://www.instagram.com/kanaan_group?igsh=M2dubmxiY2dvYWVm',
    external: true,
  },
]

function MethodRow({ method, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="py-8 text-center">
        <p className="text-eyebrow uppercase tracking-[0.22em] text-walnut/55">
          {method.label}
        </p>

        {method.items ? (
          <div className="mt-5 flex flex-col gap-3">
            {method.items.map((item) => (
              <div
                key={item.sublabel}
                className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-4"
              >
                <span className="text-[11px] uppercase tracking-[0.18em] text-walnut/55 sm:w-20 sm:text-right">
                  {item.sublabel}
                </span>
                <a
                  href={item.href}
                  className="font-serif text-[clamp(1.25rem,1.8vw,1.5rem)] leading-[1.2] text-walnut transition-colors duration-400 ease-luxury hover:text-bronze sm:text-left"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        ) : method.href ? (
          <a
            href={method.href}
            target={method.external ? '_blank' : undefined}
            rel={method.external ? 'noreferrer' : undefined}
            className="mt-3 inline-block font-serif text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.1] text-walnut transition-colors duration-400 ease-luxury hover:text-bronze"
          >
            {method.value}
          </a>
        ) : (
          <span className="mt-3 inline-block font-serif text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.1] text-walnut">
            {method.value}
          </span>
        )}
      </div>
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
              delay={0.15 + i * 0.08}
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
