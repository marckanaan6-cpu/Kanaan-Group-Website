import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/*
  ScrollToTop — global scroll reset on route change.

  React Router keeps the window scroll position across client-side
  navigations, so without this a new page can open partway down (e.g. landing
  on the About page already scrolled to the previous page's footer). On every
  pathname change we jump straight to the top.

  Notes:
   - Keyed on `pathname` only — in-page hash links (e.g. the hero's
     "See how we work" anchor) and query-string changes don't trigger a jump.
   - `behavior: 'instant'` avoids a visible animated scroll on navigation.
   - Lenis (our smooth-scroll layer) listens to the native scroll event and
     syncs its internal position, so a plain window.scrollTo is enough here —
     no Lenis instance handle is required.
   - Renders nothing; it just runs the effect. Mounted once inside the Router.
*/
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
