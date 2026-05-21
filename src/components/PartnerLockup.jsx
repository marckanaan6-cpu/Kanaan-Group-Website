/*
  PartnerLockup — a refined partner signature.

  Used for Kaindl (Catalogue / Materials) and later Kolity (Accessories).

  The logo is a real transparent PNG shown directly on the warm page — no
  plate, no box — so it reads as an elegant signature rather than a banner.
  It's sized by width (responsive: larger in the Catalogue hero, quieter on the
  homepage teaser) and kept balanced with, not louder than, the page heading.
  The logo is never recolored or distorted; its own navy/slate is the only blue
  here. The partner accent (kaindl/kolity) appears only on the thin rule beside
  the label. Do not place this in the global header or footer.

  Props:
   - size:  'lg' (Catalogue hero) | 'md' (homepage teaser)
   - align: 'start' | 'center'
*/
export default function PartnerLockup({
  logo,
  alt,
  label,
  accent = 'kaindl',
  size = 'md',
  align = 'start',
  className = '',
}) {
  // Width-based, responsive. lg ≈ 192/224/256px, md ≈ 128/144px.
  const logoWidth =
    size === 'lg' ? 'w-48 sm:w-56 lg:w-64' : 'w-32 sm:w-36'
  const ruleClass = accent === 'kolity' ? 'bg-kolity/50' : 'bg-kaindl/50'
  const alignClass =
    align === 'center' ? 'items-center text-center' : 'items-start'

  return (
    <div className={`inline-flex flex-col gap-4 ${alignClass} ${className}`}>
      <img src={logo} alt={alt} loading="lazy" className={`${logoWidth} h-auto`} />

      <div className="flex items-center gap-3">
        <span className={`h-px w-8 ${ruleClass}`} aria-hidden="true" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-walnut/70">
          {label}
        </span>
      </div>
    </div>
  )
}
