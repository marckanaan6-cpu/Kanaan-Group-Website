import { motion } from 'framer-motion'
import Section from './Section.jsx'
import Container from './Container.jsx'
import PlaceholderImage from './PlaceholderImage.jsx'

const LUXURY_EASE = [0.22, 1, 0.36, 1]

/*
  TEMPORARY MOOD IMAGE — replace with real Kanaan project photo later.
  Not a real Kanaan completed project. Do not present as completed work.

  Place file at: public/images/projects/projects-hero.jpg

  Brief:
   - Warm walnut/oak interior detail — finished kitchen, custom millwork,
     wall panel close-up, or similar. AD-style editorial. No people.
   - Landscape ~4:3, ~1600px+ wide. Visual weight balanced or slightly
     right of center (text sits in the left column).
*/
const PROJECTS_HERO_SRC = '/images/projects/projects-hero.jpg'

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

export default function ProjectsHero() {
  return (
    <Section
      id="projects-hero"
      bg="ivory"
      padding="flush"
      className="pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center md:gap-8 lg:gap-20">
          {/* Text — left column on desktop */}
          <div className="md:col-span-5">
            <h1 className="font-serif text-display-md leading-[1.05] text-walnut">
              <HeadlineLine delay={0.1}>From the first drawing</HeadlineLine>
              <HeadlineLine delay={0.25}>to the final fitting.</HeadlineLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 0.7 }}
              className="mt-8 max-w-md font-serif text-[20px] leading-[1.4] text-walnut/75 sm:text-[22px]"
            >
              Custom woodwork and interiors, commissioned by our clients and
              made in our workshop.
            </motion.p>
          </div>

          {/* Image — right column on desktop */}
          <div className="md:col-span-7">
            <PlaceholderImage
              src={PROJECTS_HERO_SRC}
              alt="Warm interior detail — Kanaan custom woodwork"
              aspectClassName="aspect-[4/3]"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
