import { useState } from 'react'
import Reveal from './Reveal.jsx'

/*
  AccessoryCard — one accessory / hardware tile. The generalized card used
  across the whole Accessories page.

  A large square product image with a minimal caption (item name + optional
  family). Until a real product photo exists at item.image, a clean placeholder
  card shows the name (state-driven, so no broken-image flash). On hover the
  loaded image gives a gentle scale inside a fixed frame.

  The page reads fully warm at rest. The only color is a thin hairline that
  draws under the item name on hover — an in-section accent (≤5%, never a
  background). Its color is set by `accent`:
    - 'warm'   → bronze (default; used by Kanaan's own non-partner sections)
    - 'kolity' → Kolity green (used only inside the Kolity partner section)
  Non-Kolity items must never use the kolity accent — they are not Kolity
  products.

  Tailwind note: the accent classes are written as full literal strings below
  so the JIT compiler can see and generate them.
*/
const ACCENT_HAIRLINE = {
  warm: 'bg-bronze/50',
  kolity: 'bg-kolity/50',
}

export default function AccessoryCard({
  item,
  category,
  accent = 'warm',
  delay = 0,
}) {
  const [status, setStatus] = useState('loading') // 'loading' | 'loaded' | 'error'

  const hairline = ACCENT_HAIRLINE[accent] || ACCENT_HAIRLINE.warm
  const altPrefix = accent === 'kolity' ? 'Kolity ' : ''

  return (
    <Reveal delay={delay}>
      <figure className="group">
        <div className="relative aspect-square overflow-hidden bg-walnut/5">
          {/* Placeholder label — present behind the image so a missing photo
              still reads as an intentional, labelled category card. */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center">
            <span className="text-eyebrow uppercase tracking-[0.2em] text-walnut/40">
              {item.name}
            </span>
          </div>

          <img
            src={item.image}
            alt={`${altPrefix}${item.name}`}
            loading="lazy"
            onLoad={() => setStatus('loaded')}
            onError={() => setStatus('error')}
            className={`absolute inset-0 block h-full w-full object-cover transition duration-700 ease-luxury group-hover:scale-[1.04] ${
              status === 'loaded' ? 'opacity-100' : 'opacity-0'
            } ${status === 'error' ? 'hidden' : ''}`}
          />
        </div>

        <figcaption className="mt-4">
          <span className="relative inline-block font-serif text-[17px] leading-tight text-walnut">
            {item.name}
            {/* Controlled accent — draws only on hover. */}
            <span
              aria-hidden="true"
              className={`absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 ${hairline} transition-transform duration-500 ease-luxury group-hover:scale-x-100`}
            />
          </span>
          {category && (
            <div className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-olive/80">
              {category}
            </div>
          )}
        </figcaption>
      </figure>
    </Reveal>
  )
}
