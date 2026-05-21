import { ArrowRight } from 'lucide-react'
import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'

/*
  LOCATIONS DATA — edit this array to update names, descriptions, addresses,
  or map links. Real addresses can replace "Address to be added" verbatim;
  no other code change is required.

  mapHref defaults to a Google Maps search by business name + city, which is
  a functional fallback that does not invent an exact address. Replace each
  mapHref with a direct map URL once the precise locations are confirmed.
*/
const LOCATIONS = [
  {
    name: 'Antelias',
    description:
      'Woodwork, interiors, accessories, and professional supplies.',
    address: 'Address to be added',
    mapHref: 'https://maps.app.goo.gl/uTPEwp8RbzsiaTFM6',
  },
  {
    name: 'Mazraat Yachouh',
    description: 'Workshop, production, and showroom support.',
    address: 'Address to be added',
    mapHref: 'https://maps.app.goo.gl/fnp2MsarTnJPoL8X8',
  },
]

function LocationRow({ location, delay }) {
  return (
    <Reveal delay={delay}>
      <a
        href={location.mapHref}
        target="_blank"
        rel="noreferrer"
        className="group grid grid-cols-1 gap-4 border-t border-stone/40 py-8 transition-colors duration-500 ease-luxury hover:bg-beige/40 md:grid-cols-12 md:items-baseline md:gap-6 md:py-10 lg:gap-8"
      >
        {/* Name */}
        <div className="md:col-span-4">
          <h3 className="font-serif text-[clamp(1.875rem,2.6vw,2.5rem)] leading-[1.05] text-walnut">
            {location.name}
          </h3>
        </div>

        {/* Description + address */}
        <div className="md:col-span-5">
          <p className="text-[15px] leading-[1.65] text-charcoal/80">
            {location.description}
          </p>
          <p className="mt-2 text-[12px] uppercase tracking-editorial text-stone">
            {location.address}
          </p>
        </div>

        {/* Get directions */}
        <div className="md:col-span-3 md:text-right">
          <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-editorial text-bronze">
            <span className="relative">
              Get directions
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-luxury group-hover:scale-x-100" />
            </span>
            <ArrowRight
              size={14}
              strokeWidth={1.4}
              className="transition-transform duration-500 ease-luxury group-hover:translate-x-1"
            />
          </span>
        </div>
      </a>
    </Reveal>
  )
}

export default function Locations() {
  return (
    <Section
      id="locations"
      bg="ivory"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        {/* Section intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="05">LOCATIONS</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              Where to find us.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 font-serif text-[20px] leading-[1.4] text-walnut/75 sm:text-[22px]">
              Visit a showroom — see the materials, hold the hardware, and
              speak with the team.
            </p>
          </Reveal>
        </div>

        {/* Directory */}
        <div className="mt-14 border-b border-stone/40 lg:mt-20">
          {LOCATIONS.map((location, i) => (
            <LocationRow
              key={location.name}
              location={location}
              delay={0.15 + i * 0.1}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
