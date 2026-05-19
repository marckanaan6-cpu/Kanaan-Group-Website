import { ArrowRight } from 'lucide-react'
import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  LOCATION DETAIL — reusable section for a single location. Used twice on the
  Locations page (Antelias, Mazraat Yachouh).

  `phones` accepts an array of { label, value, href } so each location can
  show multiple numbers (mobile + landline). Phones with href render as
  clickable tel: links. `mapHref` opens in a new tab.
*/

export default function LocationsDetail({
  number,
  name,
  description,
  address = 'Address to be added',
  hours = 'Hours to be added',
  phones = [{ label: 'Phone', value: 'Phone to be added', href: null }],
  mapHref,
  bg = 'ivory',
}) {
  return (
    <Section
      id={`location-${name.toLowerCase().replace(/[^a-z]/g, '-')}`}
      bg={bg}
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start md:gap-8 lg:gap-20">
          {/* Name column */}
          <div className="md:col-span-5">
            <Reveal>
              <SectionLabel number={number}>SHOWROOM</SectionLabel>
            </Reveal>
            <Reveal delay={0.15}>
              <h2 className="mt-8 font-serif text-display-md leading-[1.05] text-walnut">
                {name}
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-prose text-[15px] leading-[1.75] text-charcoal/80">
                {description}
              </p>
            </Reveal>
          </div>

          {/* Details column */}
          <div className="md:col-span-7">
            <Reveal delay={0.2}>
              <dl className="border-t border-stone/40">
                <DetailRow label="Address" value={address} />
                <DetailRow label="Hours" value={hours} />
                {phones.map((p) => (
                  <DetailRow
                    key={p.label}
                    label={p.label}
                    value={
                      p.href ? (
                        <a
                          href={p.href}
                          className="text-charcoal/80 transition-colors duration-400 ease-luxury hover:text-bronze"
                        >
                          {p.value}
                        </a>
                      ) : (
                        p.value
                      )
                    }
                  />
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.45}>
              <a
                href={mapHref}
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center gap-3 text-[12px] uppercase tracking-editorial text-bronze transition-colors duration-500 ease-luxury hover:text-walnut"
              >
                <span className="relative">
                  Get directions
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-luxury group-hover:scale-x-100" />
                </span>
                <ArrowRight
                  size={14}
                  strokeWidth={1.4}
                  className="transition-transform duration-500 ease-luxury group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function DetailRow({ label, value }) {
  return (
    <div className="grid grid-cols-1 gap-1 border-b border-stone/40 py-5 sm:grid-cols-12 sm:gap-6 sm:py-6">
      <dt className="text-eyebrow uppercase text-walnut/55 sm:col-span-3">
        {label}
      </dt>
      <dd className="text-[15px] leading-[1.6] text-charcoal/80 sm:col-span-9">
        {value}
      </dd>
    </div>
  )
}
