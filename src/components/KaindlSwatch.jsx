import { useState } from 'react'
import Reveal from './Reveal.jsx'

/*
  KaindlSwatch — one material tile.

  A large square texture with a minimal caption (name · code · optional +HYD).
  Until a real decor scan exists at finish.image, a clean placeholder card shows
  the code + name (state-driven, so no broken-image flash). On hover the loaded
  image gives a gentle scale inside a fixed frame.

  Controlled Kaindl-blue accent: only the finish CODE and the +HYD tag use
  `text-kaindl`. The optional category stays olive. Everything else is warm.

  Compare toggle (opt-in): when `onToggleCompare` is provided, a subtle corner
  +/✓ button appears (used by the Catalogue library). It is NOT rendered
  otherwise, so the homepage Materials section — which omits these props — is
  completely unaffected.
*/
export default function KaindlSwatch({
  finish,
  category,
  delay = 0,
  onToggleCompare,
  inCompare = false,
  compareFull = false,
}) {
  const [status, setStatus] = useState('loading') // 'loading' | 'loaded' | 'error'
  const compareDisabled = compareFull && !inCompare

  return (
    <Reveal delay={delay}>
      <figure className="group">
        <div className="relative aspect-square overflow-hidden bg-walnut/5">
          {/* Placeholder label — present behind the image so a missing texture
              still reads as an intentional, labelled material card. */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center">
            <span className="text-eyebrow uppercase tracking-[0.2em] text-walnut/40">
              {finish.code} · {finish.name}
            </span>
          </div>

          <img
            src={finish.image}
            alt={`Kaindl ${finish.code} ${finish.name} surface`}
            loading="lazy"
            onLoad={() => setStatus('loaded')}
            onError={() => setStatus('error')}
            className={`absolute inset-0 block h-full w-full object-cover transition duration-700 ease-luxury group-hover:scale-[1.04] ${
              status === 'loaded' ? 'opacity-100' : 'opacity-0'
            } ${status === 'error' ? 'hidden' : ''}`}
          />

          {/* Compare toggle — opt-in; subtle, always visible on touch, hover on
              desktop (and kept visible when selected). */}
          {onToggleCompare && (
            <button
              type="button"
              onClick={onToggleCompare}
              disabled={compareDisabled}
              aria-pressed={inCompare}
              aria-label={
                inCompare
                  ? `Remove ${finish.code} from comparison`
                  : `Add ${finish.code} to comparison`
              }
              className={`absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border text-[14px] leading-none backdrop-blur-sm transition-all duration-300 ease-luxury opacity-100 md:opacity-0 md:group-hover:opacity-100 ${
                inCompare
                  ? 'border-kaindl/50 bg-kaindl/15 text-kaindl md:opacity-100'
                  : 'border-walnut/20 bg-ivory/80 text-walnut/70 hover:border-walnut/40'
              } ${compareDisabled ? 'cursor-not-allowed opacity-40 md:opacity-40' : ''}`}
            >
              {inCompare ? '✓' : '+'}
            </button>
          )}
        </div>

        <figcaption className="mt-4">
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-serif text-[17px] leading-tight text-walnut">
              {finish.name}
            </span>
            {finish.hyd && (
              <span className="shrink-0 border border-kaindl/40 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.18em] text-kaindl">
                +HYD
              </span>
            )}
          </div>
          <div className="mt-1.5 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]">
            <span className="text-kaindl">{finish.code}</span>
            {category && <span className="text-olive/80">{category}</span>}
          </div>
        </figcaption>
      </figure>
    </Reveal>
  )
}
