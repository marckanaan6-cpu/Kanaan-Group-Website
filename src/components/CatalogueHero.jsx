import { motion } from 'framer-motion'
import Section from './Section.jsx'
import Container from './Container.jsx'
import PartnerLockup from './PartnerLockup.jsx'

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

export default function CatalogueHero() {
  return (
    <Section
      id="catalogue-hero"
      bg="ivory"
      padding="flush"
      className="pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28"
    >
      <Container>
        <div className="max-w-2xl">
          {/* Partner mark — sits above the title as a refined signature */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 0.1 }}
          >
            <PartnerLockup
              logo="/images/brands/kaindl-logo-transparent.png"
              alt="Kaindl"
              label="Exclusive Kaindl partner in Lebanon"
              size="lg"
            />
          </motion.div>

          <h1 className="mt-8 font-serif text-display-md leading-[1.05] text-walnut">
            <HeadlineLine delay={0.35}>The Kaindl</HeadlineLine>
            <HeadlineLine delay={0.5}>catalogue.</HeadlineLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 0.9 }}
            className="mt-8 max-w-md font-serif text-[20px] leading-[1.4] text-walnut/75 sm:text-[22px]"
          >
            Wood, stone, lacquer, and decorative panels — the complete range we
            work with.
          </motion.p>
        </div>
      </Container>
    </Section>
  )
}
