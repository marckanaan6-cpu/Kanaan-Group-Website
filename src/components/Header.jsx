import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Instagram, Menu } from 'lucide-react'
import MobileDrawer from './MobileDrawer.jsx'

const NAV_ITEMS = [
  { label: 'Projects', to: '/projects' },
  { label: 'Accessories', to: '/accessories' },
  { label: 'Catalogue', to: '/catalogue' },
  { label: 'About', to: '/about' },
  { label: 'Locations', to: '/locations' },
]

const INSTAGRAM_URL =
  'https://www.instagram.com/kanaan_group?igsh=M2dubmxiY2dvYWVm'

export default function Header({ overHero = false }) {
  // Lazy initial state — read the actual scroll position on first render
  // so the header doesn't flash the wrong visual state if the browser has
  // restored a non-zero scroll position from a previous session.
  const [scrolled, setScrolled] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.scrollY > 60
  })
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  // "solid" means show the ivory background + walnut text state.
  // - Homepage passes overHero={true} → header is transparent at scroll=0 over the
  //   dark hero image, and switches to solid once the user scrolls past it.
  // - Inner pages omit the prop (overHero defaults to false) → header is always
  //   solid, so its text is readable against the page's ivory/beige background.
  const solid = !overHero || scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
  }, [location.pathname])

  const tone = solid ? 'text-walnut' : 'text-ivory'
  const wordmarkClass = `font-serif text-base uppercase tracking-[0.22em] transition-colors duration-600 ease-luxury ${tone}`

  // Contact button — filled ivory over the dark hero (transparent state),
  // bronze outline once solid (inner pages + scrolled homepage). The filled
  // button is the emphasis, so it carries no underline.
  const contactClass = `border px-6 py-2.5 text-[10.5px] uppercase tracking-[0.22em] transition-colors duration-500 ease-luxury ${
    solid
      ? 'border-bronze/80 text-bronze hover:bg-bronze hover:text-ivory'
      : 'border-ivory bg-ivory text-walnut hover:bg-ivory/85'
  }`

  const burgerButton = (
    <button
      type="button"
      aria-label="Open menu"
      onClick={() => setDrawerOpen(true)}
      // -m-2.5 + p-2.5 grows the tap target to ~46px without moving the icon
      // or shifting surrounding layout. lg:hidden so desktop is untouched.
      className={`-m-2.5 p-2.5 transition-colors duration-600 ease-luxury lg:hidden ${tone}`}
    >
      <Menu size={26} strokeWidth={1.4} />
    </button>
  )

  // Subtle Instagram icon — desktop header only (mobile uses the drawer link).
  // -m-1.5 + p-1.5 keeps a comfortable click area without shifting the row.
  const instagramIcon = (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Kanaan Group on Instagram"
      className={`hidden -m-1.5 p-1.5 transition-colors duration-400 ease-luxury hover:opacity-70 lg:inline-flex ${tone}`}
    >
      <Instagram size={18} strokeWidth={1.6} />
    </a>
  )

  return (
    <>
      {/*
        Header structure:
         - <header> itself has NO background, border, or transition. This avoids
           the bug where `transition-all` interpolated `backdrop-filter` between
           blur(12px) and "no filter" (which aren't interpolatable), leaving
           the header stuck in a half-rendered state at the top of the page.
         - Two child layers handle the visual states via opacity transitions
           only — smooth, no interpolation issues.
         - Content sits above both layers with `relative z-10`.
      */}
      <header className="fixed inset-x-0 top-0 z-40">
        {/* Scrolled-state layer — ivory + blur + hairline, fades in once
            the user scrolls past the hero (or stays on for inner pages) */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 border-b border-stone/40 bg-ivory/95 backdrop-blur-md transition-opacity duration-600 ease-luxury ${
            solid ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Top-of-page warm wash — only relevant when over a dark hero image */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 top-0 -bottom-16 bg-gradient-to-b from-walnut/45 via-walnut/15 to-transparent transition-opacity duration-600 ease-luxury ${
            solid ? 'opacity-0' : 'opacity-100'
          }`}
        />

        <div className="relative z-10 mx-auto max-w-container px-6 sm:px-10 lg:px-24">
          {overHero ? (
            <>
              {/* HOMEPAGE — mobile: simple logo + burger row */}
              <div className="flex h-20 items-center justify-between lg:hidden">
                <Link to="/" className={wordmarkClass}>
                  Kanaan Group
                </Link>
                {burgerButton}
              </div>

              {/*
                HOMEPAGE — desktop: one compact row, kept high so nothing reaches
                the hero title.
                 - KANAAN GROUP (left) + nav + Contact, all centred on one line;
                 - each label carries its own short, thin underline directly
                   beneath it (no full-width rule across the page);
                 - "Since 1980" sits just under the wordmark, aligned to its left
                   edge — absolutely positioned so it never shifts the row;
                 - Contact is the filled ivory button (no underline). */}
              <div className="relative hidden h-20 -translate-y-[12px] items-center justify-between lg:flex">
                <div className="relative">
                  <Link
                    to="/"
                    className={`inline-block border-b pb-1 font-serif text-base uppercase leading-none tracking-[0.22em] transition-colors duration-600 ease-luxury ${
                      solid ? 'border-walnut/25 text-walnut' : 'border-ivory/45 text-ivory'
                    }`}
                  >
                    Kanaan Group
                  </Link>
                  <span
                    className={`absolute left-0 top-full mt-1.5 whitespace-nowrap text-[9px] uppercase tracking-[0.34em] transition-colors duration-600 ease-luxury ${
                      solid ? 'text-walnut/65' : 'text-ivory/75'
                    }`}
                  >
                    Since 1980
                  </span>
                </div>

                <div className="flex items-center gap-8">
                  <nav className={`flex items-center gap-10 ${tone}`}>
                    {NAV_ITEMS.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`border-b pb-1 text-[12px] font-medium uppercase leading-none tracking-[0.16em] transition-colors duration-400 ease-luxury ${
                          solid
                            ? 'border-walnut/25 hover:border-walnut/60'
                            : 'border-ivory/40 hover:border-ivory/90'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="flex items-center gap-5">
                    {instagramIcon}
                    <Link to="/contact" className={contactClass}>
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* INNER PAGES — single centered row, mobile + desktop. Unchanged. */
            <div className="flex h-20 items-center justify-between lg:h-28">
              <Link to="/" className={wordmarkClass}>
                Kanaan Group
              </Link>

              <nav className={`hidden items-center gap-12 lg:flex ${tone}`}>
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="group relative text-[12px] font-medium uppercase tracking-[0.16em] transition-colors duration-400 ease-luxury hover:opacity-80"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-luxury group-hover:scale-x-100" />
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-5">
                {instagramIcon}
                <Link
                  to="/contact"
                  className={`hidden lg:inline-block ${contactClass}`}
                >
                  Contact
                </Link>
                {burgerButton}
              </div>
            </div>
          )}
        </div>
      </header>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        items={NAV_ITEMS}
      />
    </>
  )
}
