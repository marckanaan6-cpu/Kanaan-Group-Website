export default function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag
      className={`mx-auto w-full max-w-container px-6 sm:px-10 lg:px-20 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
