import { motion } from 'framer-motion'

const LUXURY_EASE = [0.22, 1, 0.36, 1]

export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  duration = 0.7,
  y = 24,
  amount = 0.3,
  once = true,
  className = '',
  children,
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: LUXURY_EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
