import { createContext, useCallback, useContext, useEffect, useRef } from 'react'
import Lenis from 'lenis'

/*
  SmoothScrollProvider — owns the single Lenis instance and exposes a
  `scrollToTop` helper through context.

  Why context: Lenis drives scrolling from its own internal target via a RAF
  loop, so a raw `window.scrollTo` gets fought/overridden (a route change could
  land the new page partway down). Anything that needs to reset scroll —
  ScrollToTop on route change, the header re-clicking the current route — must
  go through the live Lenis instance instead.
*/
const LenisContext = createContext(null)

export function useScrollToTop() {
  const ctx = useContext(LenisContext)
  // Fallback keeps callers working even if used outside the provider.
  return (
    ctx?.scrollToTop ??
    ((immediate = true) =>
      window.scrollTo({ top: 0, left: 0, behavior: immediate ? 'instant' : 'smooth' }))
  )
}

// Smooth-scroll to an element/selector (e.g. a homepage section anchor).
export function useScrollTo() {
  const ctx = useContext(LenisContext)
  return (
    ctx?.scrollTo ??
    ((target) => {
      const el =
        typeof target === 'string' ? document.querySelector(target) : target
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    })
  )
}

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    })
    lenisRef.current = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const scrollToTop = useCallback((immediate = true) => {
    const lenis = lenisRef.current
    if (lenis) {
      lenis.scrollTo(0, { immediate, force: true })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: immediate ? 'instant' : 'smooth' })
    }
  }, [])

  // Smooth-scroll to a target (selector or element). Offsets for the fixed
  // header so the section heading isn't tucked underneath it.
  const scrollTo = useCallback((target, options = {}) => {
    const lenis = lenisRef.current
    if (lenis) {
      lenis.scrollTo(target, { offset: -100, duration: 1.1, ...options })
    } else {
      const el =
        typeof target === 'string' ? document.querySelector(target) : target
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <LenisContext.Provider value={{ scrollToTop, scrollTo }}>
      {children}
    </LenisContext.Provider>
  )
}
