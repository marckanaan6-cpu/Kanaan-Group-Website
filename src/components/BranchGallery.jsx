import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

/*
  BranchGallery — a premium "branch tour" bottom sheet for the homepage Capacity
  section. Opened by clicking a branch card. Shows that branch's photos as a
  warm, editorial 2-column grid (1 column on mobile) with a caption under each.
  Reuses the Catalogue compare-sheet mechanics (scrim, slide-up, Escape,
  scroll-lock, beige background, close) for a cohesive feel. Warm only — no
  partner accents. `branch` is null when closed.
*/
function GalleryImage({ item }) {
  const [ok, setOk] = useState(true)
  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden bg-walnut/10">
        {!ok && (
          <span className="absolute inset-0 flex items-center justify-center px-3 text-center text-eyebrow uppercase tracking-[0.2em] text-walnut/40">
            {item.caption}
          </span>
        )}
        {ok && (
          <img
            src={item.image}
            alt={item.caption}
            loading="lazy"
            onError={() => setOk(false)}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.2em] text-olive/80">
        {item.caption}
      </figcaption>
    </figure>
  )
}

export default function BranchGallery({ branch, onClose }) {
  const reduce = useReducedMotion()
  const open = !!branch

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-walnut/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${branch.eyebrow} — branch gallery`}
            initial={reduce ? { opacity: 0 } : { y: '100%' }}
            animate={reduce ? { opacity: 1 } : { y: '0%' }}
            exit={reduce ? { opacity: 0 } : { y: '100%' }}
            transition={{ duration: 0.45, ease: EASE }}
            // data-lenis-prevent: let the sheet scroll natively. Without it,
            // Lenis hijacks the wheel for the (locked) page body, so wheel
            // input never reaches this scroll container.
            data-lenis-prevent
            className="fixed inset-x-0 bottom-0 z-50 max-h-[90vh] overflow-y-auto bg-beige"
          >
            <div className="mx-auto max-w-container px-4 py-8 md:px-8 md:py-12">
              {/* Header */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="text-eyebrow uppercase text-olive">
                    {branch.eyebrow}
                  </span>
                  <h2 className="mt-2 font-serif text-display-sm leading-tight text-walnut">
                    {branch.title}
                  </h2>
                  <p className="mt-3 max-w-md text-[14px] leading-[1.7] text-charcoal/80">
                    {branch.body}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close branch gallery"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-walnut/20 text-walnut/70 transition-colors duration-300 ease-luxury hover:border-walnut/40 hover:text-walnut"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Image grid */}
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                {branch.gallery.map((item) => (
                  <GalleryImage key={item.image} item={item} />
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
