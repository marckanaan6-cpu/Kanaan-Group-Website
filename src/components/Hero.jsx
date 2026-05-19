import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const LUXURY_EASE = [0.22, 1, 0.36, 1]

/*
  TEMPORARY MOOD IMAGE — replace with real Kanaan project photo later.
  Not a real Kanaan project. Do not present as completed work.

  How this works:
   - HERO_IMAGE_SRC points at /images/projects/hero-mood.jpg
   - Until that file exists, the rich gradient SVG below stays visible as a fallback.
   - The moment you drop a .jpg at the path below, it fades in over the gradient.
     No code change required.

  How to swap in a real mood image:
   1. Source a cinematic warm walnut interior photo:
      soft daylight from upper-right, ivory + bronze tones,
      architectural restraint, no visible clutter, ~1920px+ wide.
   2. Save it as: public/images/projects/hero-mood.jpg
   3. Refresh. Done.
*/
const HERO_IMAGE_SRC = '/images/projects/hero-mood.jpg'
const HERO_FALLBACK_SRC = '/images/projects/hero-mood.svg'

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

export default function Hero() {
  const heroRef = useRef(null)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)

  // Scroll progress through the hero: 0 when its top hits the top of the viewport,
  // 1 when its bottom hits the top of the viewport (i.e. the user has scrolled past it).
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Image parallax: image translates down a little while the page scrolls up,
  // creating the Apple-style "image lingers behind" feel.
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  // Text reacts in counterpoint: lifts up slightly and fades to subtle.
  const textY = useTransform(scrollYProgress, [0, 1], [0, -70])
  const textOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2])

  // Scroll cue retires the moment the user starts scrolling.
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0])

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[640px] w-full overflow-hidden"
    >
      {/* Parallax image layer — fallback gradient + primary image both move together */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 h-full w-full will-change-transform"
      >
        {/* Fallback gradient — always rendered behind the real image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_FALLBACK_SRC}')` }}
        />

        {/* Primary mood image — fades in when (and if) it loads */}
        {!imgFailed && (
          <motion.img
            src={HERO_IMAGE_SRC}
            alt=""
            aria-hidden="true"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgFailed(true)}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={
              imgLoaded
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 1.04 }
            }
            transition={{ duration: 1.6, ease: LUXURY_EASE }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </motion.div>

      {/* Soft seating gradient — walnut tint preserves warmth; opacity bumped
          slightly so the subhead and CTA stay readable on bright kitchens */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-walnut/55 via-walnut/15 to-transparent" />

      {/* Content with scroll-driven counter-motion */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex h-full flex-col justify-end will-change-transform"
      >
        <div className="mx-auto w-full max-w-container px-6 pb-32 sm:px-10 sm:pb-36 lg:px-24 lg:pb-44">
          <div className="max-w-lg text-center text-ivory sm:text-left">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: LUXURY_EASE, delay: 0.2 }}
              className="inline-block text-eyebrow uppercase text-ivory/90"
            >
              Since 1980
            </motion.span>

            <h1 className="mt-5 font-serif text-display-md leading-[1.02] text-ivory">
              <HeadlineLine delay={0.45}>From the smallest</HeadlineLine>
              <HeadlineLine delay={0.6}>hinge</HeadlineLine>
              <HeadlineLine delay={0.75}>to the whole</HeadlineLine>
              <HeadlineLine delay={0.9}>house.</HeadlineLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 1.55 }}
              className="mt-10 max-w-md text-ivory/95 sm:text-[15px]"
            >
              A family house of woodwork, custom interiors, and professional
              hardware since 1980.
            </motion.p>

            <motion.a
              href="#heritage"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 1.75 }}
              className="group mt-10 inline-flex items-center gap-3 text-[12px] uppercase tracking-editorial text-ivory"
            >
              <span className="relative">
                See how we work
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-ivory/70 transition-transform duration-500 ease-luxury group-hover:scale-x-0" />
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-ivory transition-transform duration-500 ease-luxury group-hover:scale-x-100" />
              </span>
              <ArrowRight
                size={16}
                strokeWidth={1.4}
                className="transition-transform duration-500 ease-luxury group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue — fades in on load, fades out as soon as the user starts scrolling */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: LUXURY_EASE, delay: 1.8 }}
        className="pointer-events-none absolute inset-x-0 bottom-6 z-10 hidden flex-col items-center gap-3 sm:flex"
      >
        <motion.div
          style={{ opacity: scrollCueOpacity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-editorial text-ivory/70">
            Scroll
          </span>
          <span className="block h-12 w-px bg-ivory/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
