import { Link } from 'react-router-dom'

const BASE = 'inline-flex items-center gap-2 font-sans text-sm tracking-wide transition-colors duration-500 ease-luxury'

const VARIANTS = {
  primary:
    'bg-bronze text-ivory px-7 py-3.5 uppercase tracking-editorial text-[12px] hover:bg-bronze-dark',
  ghost:
    'border border-bronze text-bronze px-7 py-3.5 uppercase tracking-editorial text-[12px] hover:bg-bronze hover:text-ivory',
  link:
    'relative text-bronze hover:text-walnut after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 after:ease-luxury hover:after:scale-x-100',
}

export default function Button({
  variant = 'primary',
  to,
  href,
  className = '',
  children,
  ...rest
}) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
