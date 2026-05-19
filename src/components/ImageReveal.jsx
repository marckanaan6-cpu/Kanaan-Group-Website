import { motion } from 'framer-motion'

const LUXURY_EASE = [0.22, 1, 0.36, 1]

// direction controls which edge the mask wipes from:
//   'up'    = reveals from bottom toward top   (clip top)
//   'down'  = reveals from top toward bottom   (clip bottom)
//   'left'  = reveals from right toward left   (clip right)
//   'right' = reveals from left toward right   (clip left)
const INITIAL_CLIP = {
  up: 'inset(100% 0 0 0)',
  down: 'inset(0 0 100% 0)',
  left: 'inset(0 100% 0 0)',
  right: 'inset(0 0 0 100%)',
}

export default function ImageReveal({
  src,
  alt = '',
  direction = 'up',
  duration = 1.0,
  delay = 0,
  amount = 0.2,
  className = '',
  imgClassName = '',
  loading = 'lazy',
}) {
  return (
    <motion.div
      initial={{ clipPath: INITIAL_CLIP[direction] }}
      whileInView={{ clipPath: 'inset(0 0 0 0)' }}
      viewport={{ once: true, amount }}
      transition={{ duration, ease: LUXURY_EASE, delay }}
      className={`overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount }}
        transition={{ duration: duration + 0.2, ease: LUXURY_EASE, delay }}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </motion.div>
  )
}
