import { motion } from 'framer-motion'
import Section from './Section.jsx'
import Container from './Container.jsx'
import PlaceholderImage from './PlaceholderImage.jsx'

const LUXURY_EASE = [0.22, 1, 0.36, 1]

/*
  ACCESSORIES HERO — the full Kanaan accessories & supplies world.

  Broad supplier identity, NOT a Kolity page: no Kolity logo, no green, no
  product cards (cards live in the sections below, so nothing repeats here).
  One strong editorial image carries the moment, warm and premium.

  TEMPORARY MOOD IMAGE — replace with real Kanaan photography later. Not a real
  Kanaan curated shoot; do not present as a finished project.

  Place file at: public/images/products/accessories-hero.jpg

  Brief:
   - A wide, editorial flat-lay of MIXED supply: a few handles, hinges, a tape
     measure, a screwdriver, small fittings — arranged on warm linen, oiled
     walnut, or stone. Soft directional light, jewelry-grade detail.
   - It should read as the whole range (hardware + tools), not only hinges, and
     not as a repeat of any single section card below.
   - Landscape ~4:3, ~1600px+ wide; composition slightly right-of-center so the
     left-column text reads cleanly.
*/
const ACCESSORIES_HERO_SRC = '/images/products/accessories-hero.jpg'

function HeadlineLine({ children, delay }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: '105%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.0, ease: LUXURY_EASE, delay }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function AccessoriesHero() {
  return (
    <Section
      id="accessories-hero"
      bg="ivory"
      padding="flush"
      className="pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center md:gap-8 lg:gap-20">
          {/* Text — left column on desktop */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 0.1 }}
            >
              <span className="text-eyebrow uppercase text-olive">
                Accessories &amp; Professional Supplies
              </span>
            </motion.div>

            <h1 className="mt-6 font-serif text-display-md leading-[1.05] text-walnut">
              <HeadlineLine delay={0.3}>Everything</HeadlineLine>
              <HeadlineLine delay={0.45}>the work needs.</HeadlineLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 0.9 }}
              className="mt-8 max-w-md font-serif text-[20px] leading-[1.4] text-walnut/75 sm:text-[22px]"
            >
              Hardware, fittings, handles, tools, small machines, and
              professional supplies — for craftsmen, contractors, and homes
              built with care.
            </motion.p>
          </div>

          {/* Single editorial image — right column on desktop */}
          <div className="md:col-span-7">
            <PlaceholderImage
              src={ACCESSORIES_HERO_SRC}
              alt="A curated arrangement of woodwork hardware, tools, and supplies"
              aspectClassName="aspect-[4/3]"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
