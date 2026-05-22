import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

/*
  MechanismVideo — a reusable premium hardware-demonstration video tile.

  Real video assets only (Kling/filmed renders). No CSS hardware mockups.

  Behaviour:
   - muted / loop / playsInline (required for silent inline autoplay).
   - WebM source first, MP4 fallback (<source> order), with a poster image.
   - Plays only when scrolled into view and pauses off-screen, via a native
     IntersectionObserver — this also defers the download (preload "metadata")
     until the tile is near view, and keeps just the visible video playing.
   - prefers-reduced-motion → never autoplays; the poster (static frame) shows.
   - Premium loading: a warm placeholder (the title) sits BEHIND the video and
     shows through until the poster/first frame paints — no blank flash.

  Props:
   - webm          optional WebM source (served first if present)
   - mp4           MP4 source (fallback / required)
   - poster        poster image (recommended; shown until play + for reduced motion)
   - title         caption title
   - description   short caption line
   - accent        'warm' (bronze) | 'kolity' (green) — caption hairline only
   - aspect        Tailwind aspect class for the frame (default 16/9, matches
                   the 1280x720 source videos)
*/
const ACCENT_HAIRLINE = {
  warm: 'bg-bronze/50',
  kolity: 'bg-kolity/50',
}

export default function MechanismVideo({
  webm,
  mp4,
  poster,
  title,
  description,
  accent = 'warm',
  aspect = 'aspect-video',
}) {
  const reduce = useReducedMotion()
  const videoRef = useRef(null)
  const frameRef = useRef(null)

  const hairline = ACCENT_HAIRLINE[accent] || ACCENT_HAIRLINE.warm

  // Play in view / pause off-screen. Reduced motion never plays.
  useEffect(() => {
    const video = videoRef.current
    const frame = frameRef.current
    if (!video || !frame) return
    if (reduce) {
      video.pause()
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const p = video.play()
          if (p && typeof p.catch === 'function') p.catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(frame)
    return () => io.disconnect()
  }, [reduce])

  return (
    <figure className="group">
      <div ref={frameRef} className={`relative overflow-hidden bg-walnut/5 ${aspect}`}>
        {/* Warm placeholder behind the video — shows through until it paints */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center">
          <span className="text-eyebrow uppercase tracking-[0.2em] text-walnut/40">
            {title}
          </span>
        </div>

        <video
          ref={videoRef}
          poster={poster || undefined}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={title}
          className="absolute inset-0 block h-full w-full object-cover"
        >
          {webm && <source src={webm} type="video/webm" />}
          {mp4 && <source src={mp4} type="video/mp4" />}
        </video>
      </div>

      <figcaption className="mt-4">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className={`h-px w-6 ${hairline}`} />
          <span className="font-serif text-[17px] leading-tight text-walnut">
            {title}
          </span>
        </div>
        {description && (
          <p className="mt-1.5 max-w-sm text-[13px] leading-[1.6] text-charcoal/70">
            {description}
          </p>
        )}
      </figcaption>
    </figure>
  )
}
