import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import Section from './Section.jsx'
import Container from './Container.jsx'
import SectionLabel from './SectionLabel.jsx'
import Reveal from './Reveal.jsx'
import KaindlSwatch from './KaindlSwatch.jsx'
import CompareTray from './CompareTray.jsx'
import { KAINDL_CATALOGUE, KAINDL_CATEGORIES } from '../data/kaindlCatalogue.js'

/*
  CATALOGUE LIBRARY — the full Kaindl Boards Collection 2026 (63 decors).

  Replaces the old curated 9-finish CatalogueInside on the Catalogue page (the
  curated story lives on the homepage Materials section). Full browsable library:
  search (code/name) + category filter chips, grouped category → subgroup, with
  lazy-loaded swatch tiles (KaindlSwatch handles the clean placeholder fallback
  for the not-yet-added images).

  Controlled Kaindl-blue accent only on the active filter chip + the codes (via
  KaindlSwatch); section eyebrows stay olive, everything else warm. No heavy
  animation — the existing Reveal fade-up on the intro, calm content swap on
  filter.
*/
export default function CatalogueLibrary() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(null) // null = All
  const [compare, setCompare] = useState([]) // up to 3 selected entries

  const toggleCompare = (item) =>
    setCompare((prev) => {
      if (prev.some((c) => c.slug === item.slug))
        return prev.filter((c) => c.slug !== item.slug)
      if (prev.length >= 3) return prev
      return [...prev, item]
    })
  const removeCompare = (slug) =>
    setCompare((prev) => prev.filter((c) => c.slug !== slug))

  const q = query.trim().toLowerCase()

  const filtered = useMemo(
    () =>
      KAINDL_CATALOGUE.filter((d) => {
        if (activeCategory && d.category !== activeCategory) return false
        if (!q) return true
        return (
          d.code.toLowerCase().includes(q) ||
          d.baseCode.toLowerCase().includes(q) ||
          d.name.toLowerCase().includes(q)
        )
      }),
    [q, activeCategory],
  )

  const chipBase =
    'whitespace-nowrap rounded-full border px-4 py-1.5 text-[11px] uppercase tracking-editorial transition-colors duration-300 ease-luxury'
  const chipActive = 'border-kaindl/50 bg-kaindl/10 text-kaindl'
  const chipIdle = 'border-stone/50 text-walnut/70 hover:border-walnut/40 hover:text-walnut'

  return (
    <>
    <Section
      id="catalogue-library"
      bg="ivory"
      padding="flush"
      className="pt-20 pb-28 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      <Container>
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel number="01">THE FULL COLLECTION</SectionLabel>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mt-6 font-serif text-display-sm leading-[1.15] text-walnut">
              The complete board collection.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 font-serif text-[20px] leading-[1.35] text-walnut/75 sm:text-[22px]">
              Sixty-three surfaces across eight families — search or filter to
              find a decor.
            </p>
          </Reveal>
        </div>

        {/* Controls */}
        <div className="mx-auto mt-12 max-w-4xl lg:mt-16">
          {/* Search */}
          <div className="relative mx-auto max-w-md">
            <Search
              size={16}
              strokeWidth={1.5}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-walnut/40"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by code or name"
              aria-label="Search decors by code or name"
              className="w-full border border-stone/50 bg-transparent py-3 pl-11 pr-4 text-[14px] text-walnut placeholder:text-walnut/40 transition-colors duration-300 ease-luxury focus:border-kaindl/50 focus:outline-none"
            />
          </div>

          {/* Category chips */}
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={`${chipBase} ${activeCategory === null ? chipActive : chipIdle}`}
            >
              All
            </button>
            {KAINDL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.name)}
                className={`${chipBase} ${activeCategory === cat.name ? chipActive : chipIdle}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Result count */}
          <p className="mt-5 text-center text-[11px] uppercase tracking-[0.2em] text-walnut/45">
            {filtered.length} of {KAINDL_CATALOGUE.length} decors
          </p>
        </div>

        {/* Results — grouped category → subgroup */}
        {filtered.length === 0 ? (
          <p className="mt-16 text-center font-serif text-[20px] leading-[1.4] text-walnut/60">
            No decors match your search.
          </p>
        ) : (
          <div className="mt-14 flex flex-col gap-y-16 lg:mt-20 lg:gap-y-24">
            {KAINDL_CATEGORIES.map((cat) => {
              const catItems = filtered.filter((d) => d.category === cat.name)
              if (catItems.length === 0) return null
              return (
                <div key={cat.id}>
                  {/* Category header + thin Kaindl rule */}
                  <div className="flex items-baseline gap-4">
                    <h3 className="font-serif text-[clamp(1.5rem,2.4vw,2rem)] leading-tight text-walnut">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-walnut/40">
                      {catItems.length}
                    </span>
                    <span aria-hidden="true" className="h-px flex-1 bg-kaindl/20" />
                  </div>

                  {/* Subgroups */}
                  <div className="mt-8 flex flex-col gap-y-10 lg:mt-10 lg:gap-y-12">
                    {cat.subgroups.map((sg) => {
                      const sgItems = catItems.filter((d) => d.subgroup === sg)
                      if (sgItems.length === 0) return null
                      return (
                        <div key={sg}>
                          <span className="text-eyebrow uppercase text-olive">
                            {sg}
                          </span>
                          <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-7">
                            {sgItems.map((item, i) => (
                              <KaindlSwatch
                                key={item.slug}
                                finish={item}
                                delay={Math.min(i, 3) * 0.06}
                                onToggleCompare={() => toggleCompare(item)}
                                inCompare={compare.some(
                                  (c) => c.slug === item.slug,
                                )}
                                compareFull={compare.length >= 3}
                              />
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </Container>
    </Section>

    <CompareTray
      items={compare}
      onRemove={removeCompare}
      onClear={() => setCompare([])}
    />
    </>
  )
}
