import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { PROJECT_FILTER_EVENT } from './ProjectsCategories.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'
import {
  PROJECT_CATEGORIES,
  PROJECTS,
  CATEGORIES_BY_KEY,
} from '../data/projects.js'

/*
  PROJECT GALLERY — a filterable editorial grid of project frames.

  - Filter row reads as a magazine table-of-contents (text labels with an
    underline-draw on the active one), NOT as e-commerce pill buttons.
  - Cards are state-driven placeholder frames: a clean labelled rectangle is
    shown until the matching photo exists at the data file's `image` path.
    The instant a real photo is dropped in there, it fades in over the frame.
  - 20 frames now (the data file's PROJECTS array); add more rows there to
    grow the gallery — no component changes needed.
*/
const FILTERS = [
  { key: 'all', name: 'All' },
  ...PROJECT_CATEGORIES.map((c) => ({ key: c.key, name: c.name })),
]

function GalleryCard({ project }) {
  const [status, setStatus] = useState('loading')
  const category = CATEGORIES_BY_KEY[project.category]

  return (
    <Reveal>
      <figure className="group">
        {/* Warm beige frame: shows immediately, so the card never reads as
            blank while the image streams in. Image fades over it once decoded. */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-beige shadow-[0_1px_2px_rgba(59,36,24,0.05)] ring-1 ring-walnut/5 transition-shadow duration-500 ease-luxury group-hover:shadow-[0_14px_28px_-12px_rgba(59,36,24,0.18)]">
          {/* Labelled fallback — only shown when the photo is genuinely
              missing (onError). During normal loading the warm beige frame
              alone is the placeholder. */}
          {status === 'error' && (
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
              <span className="text-eyebrow uppercase tracking-[0.2em] text-walnut/45">
                {category?.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-walnut/30">
                Photo to follow
              </span>
            </div>
          )}

          <img
            src={project.image}
            alt={project.title || category?.name || 'Project'}
            loading="lazy"
            decoding="async"
            onLoad={() => setStatus('loaded')}
            onError={() => setStatus('error')}
            className={`absolute inset-0 block h-full w-full object-cover transition duration-700 ease-luxury group-hover:scale-[1.04] ${
              status === 'loaded' ? 'opacity-100' : 'opacity-0'
            } ${status === 'error' ? 'hidden' : ''}`}
          />
        </div>
        <figcaption className="mt-3">
          <span className="text-eyebrow uppercase tracking-[0.2em] text-olive/80">
            {category?.name}
          </span>
          {project.title && (
            <span className="mt-1 block font-serif text-[17px] leading-tight text-walnut">
              {project.title}
            </span>
          )}
        </figcaption>
      </figure>
    </Reveal>
  )
}

export default function ProjectsGallery() {
  const [active, setActive] = useState('all')

  // Allow the "What we build" directory above to set the filter when a
  // category name is tapped. The directory scroll-jumps here and dispatches
  // this event; we just need to flip the active key.
  useEffect(() => {
    const handler = (e) => {
      const key = e?.detail?.key
      if (key) setActive(key)
    }
    window.addEventListener(PROJECT_FILTER_EVENT, handler)
    return () => window.removeEventListener(PROJECT_FILTER_EVENT, handler)
  }, [])

  const items = useMemo(
    () =>
      active === 'all'
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === active),
    [active],
  )

  return (
    <Section
      id="projects-gallery"
      bg="beige"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="03">PROJECT GALLERY</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              The wider body of work.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-5 max-w-xl font-serif text-[20px] leading-[1.4] text-walnut/75 sm:text-[22px]">
              Filter by category. Real project photography is added as work is
              completed and photographed.
            </p>
          </Reveal>
        </div>

        {/* Editorial filter row — text labels with underline-draw on active */}
        <Reveal delay={0.4}>
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-7 lg:mt-16"
          >
            {FILTERS.map((f) => {
              const isActive = active === f.key
              return (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(f.key)}
                  className={`relative py-1 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 ease-luxury ${
                    isActive
                      ? 'text-walnut'
                      : 'text-walnut/55 hover:text-walnut'
                  }`}
                >
                  {f.name}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-bronze/70 transition-transform duration-300 ease-luxury ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Grid — soft fade-in on each filter switch (key={active} forces a
            remount of the wrapper, which triggers the initial→animate fade).
            We don't use AnimatePresence here: with mode="wait" + a child whose
            structure stays the same between filter states, framer-motion
            sometimes fails to remount, leaving the previous items in place. */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {items.length > 0 ? (
            <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 lg:mt-20 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-20">
              {items.map((p) => (
                <GalleryCard key={p.image} project={p} />
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center text-[14px] uppercase tracking-[0.22em] text-walnut/45">
              More work coming soon
            </p>
          )}
        </motion.div>
      </Container>
    </Section>
  )
}
