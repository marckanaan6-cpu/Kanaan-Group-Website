import { motion } from 'framer-motion'
import Section from './Section.jsx'
import Container from './Container.jsx'
import PlaceholderImage from './PlaceholderImage.jsx'

const LUXURY_EASE = [0.22, 1, 0.36, 1]

/*
  TEMPORARY MOOD IMAGE — replace with a real Kanaan family / workshop /
  founder photo later. Not a real Kanaan archive image.

  Place file at: public/images/projects/about-hero.jpg

  Brief:
   - A warm editorial image that anchors the family story: a workshop scene,
     a craftsman portrait, an archival-feeling photograph, or a detail of
     family tools. Documentary register, not staged-corporate.
   - Landscape ~4:3, ~1600px+ wide.
*/
const ABOUT_HERO_SRC = '/images/projects/about-hero.jpg'

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

export default function AboutHero() {
  return (
    <Section
      id="about-hero"
      bg="ivory"
      padding="flush"
      className="pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center md:gap-8 lg:gap-20">
          <div className="md:col-span-5">
            <h1 className="font-serif text-display-md leading-[1.05] text-walnut">
              <HeadlineLine delay={0.1}>A family</HeadlineLine>
              <HeadlineLine delay={0.25}>that builds.</HeadlineLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 0.7 }}
              className="mt-8 max-w-md font-serif text-[20px] leading-[1.4] text-walnut/75 sm:text-[22px]"
            >
              Kanaan Group has built woodwork in Lebanon since 1980 — through
              three generations of the same family.
            </motion.p>
          </div>

          <div className="md:col-span-7">
            <PlaceholderImage
              src={ABOUT_HERO_SRC}
              alt="A warm editorial image of the Kanaan family workshop"
              aspectClassName="aspect-[4/3]"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
