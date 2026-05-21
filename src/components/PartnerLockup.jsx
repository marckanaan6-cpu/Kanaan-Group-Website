import { useState } from 'react'

/*
  PartnerLockup — a refined partner signature.

  Used for Kaindl (Catalogue / Materials) and Kolity (Accessories).

  The logo is a real transparent PNG shown directly on the warm page — no
  plate, no box — so it reads as an elegant signature rather than a banner.
  It's sized by width (responsive: larger in the Catalogue hero, quieter on the
  homepage teaser) and kept balanced with, not louder than, the page heading.
  The logo is never recolored or distorted; its own navy/slate is the only blue
  here. The partner accent (kaindl/kolity) appears only on the thin rule beside
  the label. Do not place this in the global header or footer.

  Graceful fallback: if no logo is provided, or the file is missing / fails to
  load, the lockup shows a clean serif text wordmark instead of a broken image
  (state-driven onError). This is how Kolity renders today until a proper
  transparent logo asset exists — we never invent or redraw a partner logo.
  The img loads eagerly (not lazy) so a valid logo never falsely falls back
  under React StrictMode's mount/unmount in dev.

  Props:
   - logo:     image src (omit to force the wordmark)
   - alt:      partner name, also the default wordmark text
   - wordmark: explicit fallback text (defaults to alt, rendered uppercase)
   - label:    small caption under the mark
   - accent:   'kaindl' | 'kolity' — colors the thin rule beside the label
   - size:     'lg' (Catalogue hero) | 'md' (homepage teaser)
   - align:    'start' | 'center'
*/
export default function PartnerLockup({
  logo,
  alt,
  label,
  wordmark,
  accent = 'kaindl',
  size = 'md',
  align = 'start',
  className = '',
}) {
  const [failed, setFailed] = useState(false)

  // Width-based, responsive. lg ≈ 192/224/256px, md ≈ 128/144px.
  const logoWidth = size === 'lg' ? 'w-48 sm:w-56 lg:w-64' : 'w-32 sm:w-36'
  // Serif wordmark sized to sit at roughly the same visual weight as the logo.
  const wordmarkSize =
    size === 'lg'
      ? 'text-[2.5rem] leading-none sm:text-[3rem] lg:text-[3.5rem]'
      : 'text-[1.875rem] leading-none sm:text-[2.125rem]'
  const ruleClass = accent === 'kolity' ? 'bg-kolity/50' : 'bg-kaindl/50'
  const alignClass =
    align === 'center' ? 'items-center text-center' : 'items-start'

  const showWordmark = failed || !logo

  return (
    <div className={`inline-flex flex-col gap-4 ${alignClass} ${className}`}>
      {showWordmark ? (
        <span
          className={`font-serif uppercase tracking-[0.08em] text-walnut ${wordmarkSize}`}
        >
          {wordmark || alt}
        </span>
      ) : (
        <img
          src={logo}
          alt={alt}
          onError={() => setFailed(true)}
          className={`${logoWidth} h-auto`}
        />
      )}

      <div className="flex items-center gap-3">
        <span className={`h-px w-8 ${ruleClass}`} aria-hidden="true" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-walnut/70">
          {label}
        </span>
      </div>
    </div>
  )
}
