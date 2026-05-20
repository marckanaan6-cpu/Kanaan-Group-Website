import { Link } from 'react-router-dom'
import Container from './Container.jsx'
import Reveal from './Reveal.jsx'

/*
  Edit these arrays to update footer content.
  Real contact details replace the "to be added" labels and href values —
  no other code changes required.
*/
const NAV_LINKS = [
  { label: 'Projects', to: '/projects' },
  { label: 'Accessories', to: '/accessories' },
  { label: 'Catalogue', to: '/catalogue' },
  { label: 'About', to: '/about' },
  { label: 'Locations', to: '/locations' },
  { label: 'Contact', to: '/contact' },
]

const VISIT_LINKS = [
  { label: 'Antelias', to: '/locations' },
  { label: 'Mazraat Yachouh', to: '/locations' },
]

// Real contact details. Phone numbers are paired with showroom labels via
// `sublabel`. External links (Instagram) set `external: true` to open in a
// new tab.
const CONTACT_LINKS = [
  {
    label: '+961 3 807 020',
    sublabel: 'Antelias',
    href: 'tel:+9613807020',
  },
  {
    label: '+961 3 302 205',
    sublabel: 'Mazraat Yachouh',
    href: 'tel:+9613302205',
  },
  {
    label: 'khaled@kanaan-group.com',
    href: 'mailto:khaled@kanaan-group.com',
  },
  {
    label: '@kanaan_group',
    href: 'https://www.instagram.com/kanaan_group?igsh=M2dubmxiY2dvYWVm',
    external: true,
  },
]

function ColumnHeading({ children }) {
  return (
    <p className="text-eyebrow uppercase text-ivory/55">{children}</p>
  )
}

function FooterLink({ to, href, external, sublabel, children }) {
  // py-2.5 grows the mobile/tablet tap target to ~44px; lg:py-0 keeps the
  // desktop footer spacing exactly as before.
  const className =
    'inline-block py-2.5 text-[14px] text-ivory/80 transition-colors duration-400 ease-luxury hover:text-ivory lg:py-0'

  const content = sublabel ? (
    <>
      <span className="block">{children}</span>
      <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-ivory/45">
        {sublabel}
      </span>
    </>
  ) : (
    children
  )

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }
  return <span className="text-[14px] text-ivory/55">{content}</span>
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-walnut text-ivory">
      <Container>
        <div className="pt-20 pb-12 lg:pt-28 lg:pb-16">
          <Reveal>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Brand */}
              <div className="lg:col-span-5">
                <Link
                  to="/"
                  className="font-serif text-base uppercase tracking-[0.22em] text-ivory"
                >
                  Kanaan Group
                </Link>
                <p className="mt-2 text-eyebrow uppercase text-ivory/55">
                  Since 1980
                </p>
                <p className="mt-7 max-w-sm text-[14px] leading-[1.65] text-ivory/75">
                  Woodwork, interiors, accessories, and professional supplies
                  for homes, craftsmen, and projects built with care.
                </p>
              </div>

              {/* Navigate */}
              <div className="lg:col-span-3">
                <ColumnHeading>Navigate</ColumnHeading>
                <ul className="mt-5 flex flex-col gap-3">
                  {NAV_LINKS.map((item) => (
                    <li key={item.label}>
                      <FooterLink to={item.to}>{item.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visit */}
              <div className="lg:col-span-2">
                <ColumnHeading>Visit</ColumnHeading>
                <ul className="mt-5 flex flex-col gap-3">
                  {VISIT_LINKS.map((item) => (
                    <li key={item.label}>
                      <FooterLink to={item.to}>{item.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="lg:col-span-2">
                <ColumnHeading>Contact</ColumnHeading>
                <ul className="mt-5 flex flex-col gap-4">
                  {CONTACT_LINKS.map((item) => (
                    <li key={item.label}>
                      <FooterLink
                        href={item.href}
                        external={item.external}
                        sublabel={item.sublabel}
                      >
                        {item.label}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Bottom bar */}
          <Reveal delay={0.15}>
            <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-[11px] uppercase tracking-editorial text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
              <p>© {year} Kanaan Group. All rights reserved.</p>
              <p>From the smallest hinge to the whole house.</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </footer>
  )
}
