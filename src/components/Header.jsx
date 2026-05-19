import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import MobileDrawer from './MobileDrawer.jsx'

const NAV_ITEMS = [
  { label: 'Projects', to: '/projects' },
  { label: 'Accessories', to: '/accessories' },
  { label: 'Catalogue', to: '/catalogue' },
  { label: 'About', to: '/about' },
  { label: 'Locations', to: '/locations' },
]

export default function Header() {
  // Lazy initial state — read the actual scroll position on first render
  // so the header doesn't flash the wrong visual state if the browser has
  // restored a non-zero scroll position from a previous session.
  const [scrolled, setScrolled] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.scrollY > 60
  })
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
  }, [location.pathname])

  const tone = scrolled ? 'text-walnut' : 'text-ivory'

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
         - Nav content sits above both layers with `relative z-10`.
      */}
      <header className="fixed inset-x-0 top-0 z-40">
        {/* Scrolled-state layer — ivory + blur + hairline, fades in once
            the user scrolls past the hero */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 border-b border-stone/40 bg-ivory/95 backdrop-blur-md transition-opacity duration-600 ease-luxury ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Top-of-page warm wash — visible over the hero, fades out on scroll */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 top-0 -bottom-16 bg-gradient-to-b from-walnut/45 via-walnut/15 to-transparent transition-opacity duration-600 ease-luxury ${
            scrolled ? 'opacity-0' : 'opacity-100'
          }`}
        />

        <div className="relative z-10 mx-auto flex h-20 max-w-container items-center justify-between px-6 sm:px-10 lg:h-28 lg:px-24">
          <Link
            to="/"
            className={`font-serif text-base uppercase tracking-[0.22em] transition-colors duration-600 ease-luxury ${tone}`}
          >
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

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className={`hidden border px-6 py-2.5 text-[10.5px] uppercase tracking-[0.22em] transition-colors duration-500 ease-luxury lg:inline-block ${
                scrolled
                  ? 'border-bronze/80 text-bronze hover:bg-bronze hover:text-ivory'
                  : 'border-ivory/60 text-ivory hover:bg-ivory hover:text-walnut'
              }`}
            >
              Contact
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
              className={`transition-colors duration-600 ease-luxury lg:hidden ${tone}`}
            >
              <Menu size={26} strokeWidth={1.4} />
            </button>
          </div>
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
