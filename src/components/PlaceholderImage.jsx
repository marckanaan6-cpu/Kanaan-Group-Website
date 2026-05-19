import { useState } from 'react'

/*
  PlaceholderImage — an <img> with a clean warm-rectangle fallback layered behind.

  Behavior:
   - While loading: the warm walnut/10 rectangle shows with a subtle centered
     label (e.g. "Image to be added"). The img is rendered at opacity-0 so
     neither broken-image icons nor alt text are ever visible.
   - On successful load: the img fades in over the placeholder (700ms luxury
     ease), covering the rectangle and label.
   - On error (file missing, 404, network fail): the img is removed from
     layout via `hidden`. The placeholder stays visible. Status is tracked
     in React state — class-based, not inline-style — so React re-renders
     can't reset the visual back to its initial state mid-load.

  Use this for any image slot where the file might not exist yet (mood images
  awaiting replacement, real photos awaiting capture). For images that exist
  and you trust to be present, a plain <img> is fine.
*/
export default function PlaceholderImage({
  src,
  alt = '',
  label = 'Image to be added',
  aspectClassName = 'aspect-[4/3]',
  className = '',
}) {
  const [status, setStatus] = useState('loading') // 'loading' | 'loaded' | 'error'

  return (
    <div
      className={`relative overflow-hidden bg-walnut/10 ${aspectClassName} ${className}`}
    >
      {/* Placeholder label — centered, low-key, present so the rectangle reads as intentional */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
        <p className="text-eyebrow uppercase tracking-[0.2em] text-walnut/40">
          {label}
        </p>
      </div>

      {/* Image — invisible while loading, fades in on success, removed on error */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={`absolute inset-0 block h-full w-full object-cover transition-opacity duration-700 ease-luxury ${
          status === 'loaded' ? 'opacity-100' : 'opacity-0'
        } ${status === 'error' ? 'hidden' : ''}`}
      />
    </div>
  )
}
