import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

/*
  CompareTray — Catalogue finish comparison (max 3).

  Two layers:
   1. A slim sticky bottom bar (appears when >=1 selected): small thumbnails +
      codes, a "View comparison" button, and Clear all.
   2. A large comparison bottom sheet (opened from the bar): big swatches side
      by side so colours/textures can actually be judged — each with image,
      name, code, category, surface, and a remove control; plus close + clear.

  Warm and minimal — deliberately not a shopping cart. Catalogue-only; no
  homepage/Accessories impact.
*/
function SwatchImg({ item, className, fit = 'cover' }) {
  const [ok, setOk] = useState(true)
  return (
    // Warm ivory frame (not grey) so light material samples (Cashmere /
    // Champagne / White) sit on a tone-on-tone background that reads as part
    // of the page, not as a solid placeholder rectangle. Subtle warm ring
    // gives the swatch a quiet edge against the beige sheet.
    <div className={`relative overflow-hidden bg-ivory ring-1 ring-walnut/10 ${className}`}>
      {!ok && (
        <span className="absolute inset-0 flex items-center justify-center px-2 text-center text-[10px] uppercase tracking-[0.15em] text-walnut/40">
          {item.code}
        </span>
      )}
      {ok && (
        <img
          src={item.image}
          alt={`${item.name} (${item.code})`}
          onError={() => setOk(false)}
          className={`h-full w-full object-cover ${fit === 'contain' ? 'lg:object-contain' : ''}`}
        />
      )}
    </div>
  )
}

export default function CompareTray({ items, onRemove, onClear }) {
  const reduce = useReducedMotion()
  const [expanded, setExpanded] = useState(false)
  const open = items.length > 0

  // Close the sheet if the selection is emptied.
  useEffect(() => {
    if (items.length === 0) setExpanded(false)
  }, [items.length])

  // Keep page content reachable above the slim bar.
  useEffect(() => {
    document.body.style.paddingBottom = open ? '96px' : ''
    return () => {
      document.body.style.paddingBottom = ''
    }
  }, [open])

  // Lock scroll + Escape-to-close while the large sheet is open.
  useEffect(() => {
    if (!expanded) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setExpanded(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [expanded])

  const cols =
    items.length >= 3 ? 'grid-cols-3' : items.length === 2 ? 'grid-cols-2' : 'grid-cols-1'

  return (
    <>
      {/* Slim sticky bar */}
      <AnimatePresence>
        {open && (
          <motion.aside
            aria-label="Finish comparison"
            initial={reduce ? { opacity: 0 } : { y: '100%' }}
            animate={reduce ? { opacity: 1 } : { y: '0%' }}
            exit={reduce ? { opacity: 0 } : { y: '100%' }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-stone/40 bg-ivory/95 backdrop-blur-sm"
          >
            <div className="mx-auto flex max-w-container items-center gap-4 px-4 py-3 md:px-8">
              <span className="shrink-0 text-[11px] uppercase tracking-[0.2em] text-walnut/45">
                {items.length} / 3
              </span>

              <div className="flex flex-1 items-center gap-3 overflow-x-auto">
                {items.map((it) => (
                  <div key={it.slug} className="flex shrink-0 items-center gap-2">
                    <SwatchImg item={it} className="h-10 w-10" />
                    <span className="text-[10px] uppercase tracking-[0.18em] text-kaindl">
                      {it.code}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="shrink-0 border border-bronze px-4 py-2 text-[11px] uppercase tracking-editorial text-bronze transition-colors duration-300 ease-luxury hover:bg-bronze hover:text-ivory"
              >
                View comparison
              </button>
              <button
                type="button"
                onClick={onClear}
                className="shrink-0 text-[11px] uppercase tracking-editorial text-walnut/55 transition-colors duration-300 ease-luxury hover:text-walnut"
              >
                Clear all
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Large comparison sheet */}
      <AnimatePresence>
        {expanded && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-walnut/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={() => setExpanded(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Compare finishes side by side"
              initial={reduce ? { opacity: 0 } : { y: '100%' }}
              animate={reduce ? { opacity: 1 } : { y: '0%' }}
              exit={reduce ? { opacity: 0 } : { y: '100%' }}
              transition={{ duration: 0.45, ease: EASE }}
              // data-lenis-prevent: let the sheet scroll natively (Lenis would
              // otherwise hijack the wheel for the locked page body).
              data-lenis-prevent
              className="fixed inset-x-0 bottom-0 z-50 max-h-[88vh] overflow-y-auto bg-beige"
            >
              <div className="mx-auto max-w-container px-4 py-8 md:px-8 md:py-12 lg:py-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="text-eyebrow uppercase text-olive">Compare</span>
                    <h2 className="mt-2 font-serif text-display-sm leading-tight text-walnut">
                      Side by side.
                    </h2>
                  </div>
                  <div className="flex shrink-0 items-center gap-5">
                    <button
                      type="button"
                      onClick={onClear}
                      className="text-[11px] uppercase tracking-editorial text-bronze transition-colors duration-300 ease-luxury hover:text-walnut"
                    >
                      Clear all
                    </button>
                    <button
                      type="button"
                      onClick={() => setExpanded(false)}
                      aria-label="Close comparison"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-walnut/20 text-walnut/70 transition-colors duration-300 ease-luxury hover:border-walnut/40 hover:text-walnut"
                    >
                      <X size={16} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>

                {/* Big swatches side by side.
                    On desktop, cap the swatch height (≈50vh) and switch to
                    object-contain so the full material image is visible and
                    the name/code/category sit in the same first view without
                    scrolling. Mobile keeps the original square crop. */}
                <div className={`mt-8 grid gap-6 md:mt-10 md:gap-8 ${cols}`}>
                  {items.map((it) => (
                    <figure key={it.slug}>
                      <SwatchImg
                        item={it}
                        fit="contain"
                        className="aspect-square w-full lg:aspect-[4/3] lg:max-h-[50vh]"
                      />
                      <figcaption className="mt-4">
                        <div className="flex items-baseline justify-between gap-3">
                          <h3 className="font-serif text-[clamp(1.125rem,2vw,1.5rem)] leading-tight text-walnut">
                            {it.name}
                          </h3>
                          <button
                            type="button"
                            onClick={() => onRemove(it.slug)}
                            aria-label={`Remove ${it.code} from comparison`}
                            className="shrink-0 text-walnut/40 transition-colors duration-300 ease-luxury hover:text-walnut"
                          >
                            <X size={16} strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-kaindl">
                          {it.code}
                        </p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-olive/80">
                          {it.category}
                          {it.surface ? ` · ${it.surface}` : ''}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
