import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

const LUXURY_EASE = [0.22, 1, 0.36, 1]

export default function MobileDrawer({ open, onClose, items }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="drawer"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="fixed inset-0 z-50 flex flex-col bg-ivory text-walnut"
        >
          <div className="flex h-20 items-center justify-between px-6 sm:px-10">
            <Link
              to="/"
              onClick={onClose}
              className="font-serif text-lg uppercase tracking-editorial"
            >
              Kanaan Group
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="text-walnut"
            >
              <X size={26} strokeWidth={1.4} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-8 px-10 pb-24">
            {items.map((item, i) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: LUXURY_EASE,
                  delay: 0.15 + i * 0.06,
                }}
              >
                <Link
                  to={item.to}
                  onClick={onClose}
                  className="block font-serif text-4xl text-walnut"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: LUXURY_EASE,
                delay: 0.15 + items.length * 0.06,
              }}
              className="mt-8"
            >
              <Link
                to="/contact"
                onClick={onClose}
                className="inline-block border border-bronze px-7 py-3 text-[11px] uppercase tracking-editorial text-bronze transition-colors duration-500 ease-luxury hover:bg-bronze hover:text-ivory"
              >
                Contact
              </Link>
            </motion.div>
          </nav>

          <div className="px-10 pb-10 text-[11px] uppercase tracking-editorial text-stone">
            Since 1980
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
