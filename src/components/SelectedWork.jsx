import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'
import {
  FEATURED_PROJECTS,
  CATEGORIES_BY_KEY,
} from '../data/projects.js'

/*
  SELECTED WORK — a small homepage strip pulling six picks from the Projects
  page (one per major category). Same calm card treatment as the Projects
  Gallery (subtle rounded corners, soft shadow, slow hover zoom), so the two
  pages feel like one body of work. Ends with a quiet link to /projects.
*/
function FeaturedCard({ project, delay = 0 }) {
  const [status, setStatus] = useState('loading')
  const category = CATEGORIES_BY_KEY[project.category]

  return (
    <Reveal delay={delay}>
      <figure className="group">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-walnut/5 shadow-[0_1px_2px_rgba(59,36,24,0.05)] ring-1 ring-walnut/5 transition-shadow duration-500 ease-luxury group-hover:shadow-[0_14px_28px_-12px_rgba(59,36,24,0.18)]">
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
            <span className="text-eyebrow uppercase tracking-[0.2em] text-walnut/40">
              {category?.name}
            </span>
          </div>
          <img
            src={project.image}
            alt={project.title || category?.name || 'Project'}
            loading="lazy"
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
          <span className="mt-1 block font-serif text-[17px] leading-tight text-walnut">
            {project.title}
          </span>
        </figcaption>
      </figure>
    </Reveal>
  )
}

export default function SelectedWork() {
  return (
    <Section
      id="selected-work"
      bg="ivory"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        {/* Section intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="05">SELECTED WORK</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              A glimpse of recent projects.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-5 max-w-xl font-serif text-[20px] leading-[1.4] text-walnut/75 sm:text-[22px]">
              Doors, kitchens, commercial interiors, wall and ceiling features,
              outdoor woodwork, bedroom millwork — a small selection from the
              full Projects archive.
            </p>
          </Reveal>
        </div>

        {/* Featured grid — 1 / 2 / 3 columns */}
        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {FEATURED_PROJECTS.map((p, i) => (
            <FeaturedCard
              key={p.image}
              project={p}
              delay={Math.min(i, 3) * 0.08}
            />
          ))}
        </div>

        {/* CTA — quiet link, not a filled button */}
        <Reveal delay={0.3}>
          <div className="mt-14 flex justify-center lg:mt-20">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-editorial text-bronze transition-colors duration-500 ease-luxury hover:text-walnut"
            >
              <span className="relative">
                View all projects
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-luxury group-hover:scale-x-100" />
              </span>
              <ArrowRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform duration-500 ease-luxury group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
