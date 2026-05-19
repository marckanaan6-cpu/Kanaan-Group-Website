const BG = {
  ivory: 'bg-ivory',
  beige: 'bg-beige',
  walnut: 'bg-charcoal text-ivory',
}

const PADDING = {
  default: 'py-24 md:py-32 lg:py-40',
  tight: 'py-16 md:py-20 lg:py-24',
  loose: 'py-28 md:py-36 lg:py-48',
  flush: '',
}

export default function Section({
  bg = 'ivory',
  padding = 'default',
  className = '',
  id,
  children,
  ...rest
}) {
  return (
    <section
      id={id}
      className={`relative w-full ${BG[bg]} ${PADDING[padding]} ${className}`}
      {...rest}
    >
      {children}
    </section>
  )
}
