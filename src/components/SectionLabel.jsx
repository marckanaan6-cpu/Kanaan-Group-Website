export default function SectionLabel({ number, children, className = '' }) {
  return (
    <span
      className={`inline-block text-eyebrow uppercase text-olive ${className}`}
    >
      {number && <span className="mr-3">{number}</span>}
      {number && <span className="mr-3">—</span>}
      {children}
    </span>
  )
}
