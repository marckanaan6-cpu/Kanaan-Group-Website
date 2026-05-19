import { motion } from 'framer-motion'
import Section from './Section.jsx'
import Container from './Container.jsx'
import PlaceholderImage from './PlaceholderImage.jsx'

const LUXURY_EASE = [0.22, 1, 0.36, 1]

/*
  TEMPORARY MOOD IMAGE — replace with real Kanaan hardware product
  photography later. Not a real Kanaan curated catalog shoot. Do not
  present as the official catalogue.

  Place file at: public/images/products/accessories-hero.jpg

  Brief:
   - Small editorial arrangement of premium hardware — a row or flat-lay
     of 3–4 handles, hinges, or fittings on warm linen, oiled walnut, or
     leather. Soft directional light, jewelry-grade detail.
   - Distinct from the Two Worlds hardware shot (single hinge on linen) —
     this should read as a *new* moment, not a repeat of the homepage card.
   - Landscape ~4:3, ~1600px+ wide. Composition slightly right-of-center
     so the left-column text reads cleanly.
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
            <h1 className="font-serif text-display-md leading-[1.05] text-walnut">
              <HeadlineLine delay={0.1}>Down to the smallest</HeadlineLine>
              <HeadlineLine delay={0.25}>hinge.</HeadlineLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 0.7 }}
              className="mt-8 max-w-md font-serif text-[20px] leading-[1.4] text-walnut/75 sm:text-[22px]"
            >
              Hardware, fittings, sliding systems, and tools — supplied with
              the same standards we build with.
            </motion.p>
          </div>

          {/* Image — right column on desktop */}
          <div className="md:col-span-7">
            <PlaceholderImage
              src={ACCESSORIES_HERO_SRC}
              alt="A curated arrangement of premium woodwork hardware"
              aspectClassName="aspect-[4/3]"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
