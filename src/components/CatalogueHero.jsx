import { motion } from 'framer-motion'
import Section from './Section.jsx'
import Container from './Container.jsx'
import KaindlSwatch from './KaindlSwatch.jsx'
import PartnerLockup from './PartnerLockup.jsx'
import { pickFinishes } from '../data/kaindlFinishes.js'

const LUXURY_EASE = [0.22, 1, 0.36, 1]

// One finish from each family, as a graphical preview of the full library.
const FEATURED = pickFinishes('27049', '44374', '4398', '5414')

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
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start md:gap-8 lg:gap-20">
          {/* Text — left column on desktop */}
          <div className="md:col-span-5">
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
              Wood, stone, lacquer, and decorative panels — the complete range
              we work with.
            </motion.p>
          </div>

          {/* Featured swatches — graphical preview, right column on desktop */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-x-5 gap-y-8">
              {FEATURED.map((finish, i) => (
                <KaindlSwatch
                  key={finish.code}
                  finish={finish}
                  category={finish.family}
                  delay={0.15 + i * 0.08}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
