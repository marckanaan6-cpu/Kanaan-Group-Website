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

// When you have real values, replace the label and set href accordingly:
//   { label: '+961 1 234 567', href: 'tel:+9611234567' }
//   { label: 'hello@kanaangroup.com', href: 'mailto:hello@kanaangroup.com' }
//   { label: '@kanaangroup', href: 'https://instagram.com/kanaangroup' }
const CONTACT_LINKS = [
  { label: 'Phone to be added', href: null },
  { label: 'Email to be added', href: null },
  { label: 'Instagram to be added', href: null },
]

function ColumnHeading({ children }) {
  return (
    <p className="text-eyebrow uppercase text-ivory/55">{children}</p>
  )
}

function FooterLink({ to, href, children }) {
  const className =
    'inline-block text-[14px] text-ivory/80 transition-colors duration-400 ease-luxury hover:text-ivory'

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }
  return <span className="text-[14px] text-ivory/55">{children}</span>
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
                <ul className="mt-5 flex flex-col gap-3">
                  {CONTACT_LINKS.map((item) => (
                    <li key={item.label}>
                      <FooterLink href={item.href}>{item.label}</FooterLink>
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
