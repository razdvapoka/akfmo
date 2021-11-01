import Link from 'next/link'
import cn from 'classnames'

export const ButtonLink = ({ link, text, className }) => {
  return (
    <Link href={link}>
      <a
        target="_blank"
        className={cn(
          'border inline-flex items-center justify-center uppercase font-bold text-m leading-m',
          className
        )}
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </Link>
  )
}
