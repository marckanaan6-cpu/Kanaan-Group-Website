import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Instagram, X } from 'lucide-react'
import { useScrollToTop } from './SmoothScrollProvider.jsx'

const INSTAGRAM_URL =
  'https://www.instagram.com/kanaan_group?igsh=M2dubmxiY2dvYWVm'

/*
  MobileDrawer

  The panel is always mounted and slides in/out with a CSS transform
  transition (translate-x-0 ↔ translate-x-full). A CSS transition is used
  instead of an AnimatePresence mount/unmount so the panel can never get
  "stuck" half-exited with focusable links — and so the slide is fully
  reliable.

  When closed the panel is pushed off-screen AND made completely
  non-interactive:
   - `inert` (toggled on the DOM node) removes it and its children from the
     tab order and the accessibility tree;
   - `aria-hidden` hides it from assistive tech;
   - `pointer-events-none` blocks any stray taps.
  The global `body { overflow-x: hidden }` keeps the off-screen panel from
  ever producing a horizontal scrollbar.
*/
export default function MobileDrawer({ open, onClose, items }) {
  const panelRef = useRef(null)
  const location = useLocation()
  const scrollToTop = useScrollToTop()

  // Closes the drawer; if the tapped route is the current one (a <Link> no-op,
  // so ScrollToTop won't fire), scroll to the top as well.
  const handleNavClick = (to) => () => {
    onClose()
    if (location.pathname === to) scrollToTop(true)
  }

  // Lock body scroll while the drawer is open; restore on close/unmount.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Toggle the `inert` attribute imperatively so the closed panel's contents
  // can never be focused or read by assistive tech. (Done via the DOM rather
  // than a prop to stay correct across React versions, where a falsy `inert`
  // prop can still serialize to an active boolean attribute.)
  useEffect(() => {
    const el = panelRef.current
    if (!el) return
    if (open) el.removeAttribute('inert')
    else el.setAttribute('inert', '')
  }, [open])

  return (
    <div
      ref={panelRef}
      aria-hidden={!open}
      className={`fixed inset-0 z-50 flex flex-col bg-ivory text-walnut transition-transform duration-700 ease-luxury ${
        open ? 'translate-x-0' : 'pointer-events-none translate-x-full'
      }`}
    >
      <div className="flex h-20 items-center justify-between px-6 sm:px-10">
        <Link
          to="/"
          onClick={onClose}
          className="font-serif text-lg uppercase tracking-editorial"
        >
          Kanaan Group
        </Link>
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="-m-2.5 p-2.5 text-walnut"
        >
          <X size={26} strokeWidth={1.4} />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-8 px-10 pb-24">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={handleNavClick(item.to)}
            className="block font-serif text-4xl text-walnut"
          >
            {item.label}
          </Link>
        ))}

        <Link
          to="/contact"
          onClick={onClose}
          className="mt-8 self-start border border-bronze px-7 py-3 text-[11px] uppercase tracking-editorial text-bronze transition-colors duration-500 ease-luxury hover:bg-bronze hover:text-ivory"
        >
          Contact
        </Link>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Kanaan Group on Instagram"
          onClick={onClose}
          className="mt-6 inline-flex items-center gap-3 self-start py-3 text-[12px] uppercase tracking-editorial text-walnut/70 transition-colors duration-400 ease-luxury hover:text-walnut"
        >
          <Instagram size={18} strokeWidth={1.6} />
          Instagram
        </a>
      </nav>

      <div className="px-10 pb-10 text-[11px] uppercase tracking-editorial text-stone">
        Since 1980
      </div>
    </div>
  )
}
