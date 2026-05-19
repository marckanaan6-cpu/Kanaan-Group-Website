import { motion } from 'framer-motion'
import Section from './Section.jsx'
import Container from './Container.jsx'

const LUXURY_EASE = [0.22, 1, 0.36, 1]

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

export default function LocationsHero() {
  return (
    <Section
      id="locations-hero"
      bg="ivory"
      padding="flush"
      className="pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-display-md leading-[1.05] text-walnut">
            <HeadlineLine delay={0.1}>Two showrooms</HeadlineLine>
            <HeadlineLine delay={0.25}>in Lebanon.</HeadlineLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 0.7 }}
            className="mx-auto mt-8 max-w-xl font-serif text-[20px] leading-[1.4] text-walnut/75 sm:text-[22px]"
          >
            Antelias and Mazraat Yachouh — both with the workshop, showroom,
            and supply rooms behind them.
          </motion.p>
        </div>
      </Container>
    </Section>
  )
}
