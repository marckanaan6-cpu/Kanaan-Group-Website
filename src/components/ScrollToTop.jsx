import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useScrollToTop } from './SmoothScrollProvider.jsx'

/*
  ScrollToTop — global scroll reset on route change.

  React Router keeps the window scroll position across client-side
  navigations, so without this a new page can open partway down (e.g. landing
  on the About page already scrolled to the previous page's footer). On every
  pathname change we jump straight to the top.

  Notes:
   - Keyed on `pathname` only — in-page hash links and query-string changes
     don't trigger a jump.
   - Goes through Lenis (immediate jump). Lenis drives scrolling from its own
     internal position, so a plain window.scrollTo is fought/overridden and can
     leave the new page partway down — the live instance must do the reset.
   - Renders nothing; it just runs the effect. Mounted once inside the Router.
*/
export default function ScrollToTop() {
  const { pathname } = useLocation()
  const scrollToTop = useScrollToTop()

  useEffect(() => {
    scrollToTop(true)
  }, [pathname, scrollToTop])

  return null
}
