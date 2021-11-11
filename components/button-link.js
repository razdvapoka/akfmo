import cn from 'classnames'

export const ButtonLink = ({ link, className, children }) => {
  return (
    <a
      target="_blank"
      href={link}
      className={cn(
        'border inline-flex items-center justify-center uppercase font-bold text-m leading-m cursor-pointer',
        className
      )}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
