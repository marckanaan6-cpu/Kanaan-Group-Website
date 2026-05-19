import { motion } from 'framer-motion'
import Section from './Section.jsx'
import Container from './Container.jsx'
import PlaceholderImage from './PlaceholderImage.jsx'

const LUXURY_EASE = [0.22, 1, 0.36, 1]

/*
  TEMPORARY MOOD IMAGE — replace with real Kanaan/Kaindl swatch photography
  later. Not a real Kanaan catalogue shoot.

  Place file at: public/images/products/catalogue-hero.jpg

  Brief:
   - A focused arrangement of Kaindl panel swatches or a close-crop of stacked
     panel edges. Warm linen / oiled walnut surface, editorial composition,
     soft daylight. Distinct from the homepage Materials section image.
   - Landscape ~4:3, ~1600px+ wide. Visual weight slightly right-of-center so
     the left-column text reads cleanly.
*/
const CATALOGUE_HERO_SRC = '/images/products/catalogue-hero.jpg'

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

export default function CatalogueHero() {
  return (
    <Section
      id="catalogue-hero"
      bg="ivory"
      padding="flush"
      className="pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center md:gap-8 lg:gap-20">
          <div className="md:col-span-5">
            <h1 className="font-serif text-display-md leading-[1.05] text-walnut">
              <HeadlineLine delay={0.1}>The Kaindl</HeadlineLine>
              <HeadlineLine delay={0.25}>catalogue.</HeadlineLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 0.7 }}
              className="mt-8 max-w-md font-serif text-[20px] leading-[1.4] text-walnut/75 sm:text-[22px]"
            >
              Wood, stone, lacquer, and decorative panels — the complete range
              we work with.
            </motion.p>
          </div>

          <div className="md:col-span-7">
            <PlaceholderImage
              src={CATALOGUE_HERO_SRC}
              alt="Kaindl panel swatches arranged for selection"
              aspectClassName="aspect-[4/3]"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
