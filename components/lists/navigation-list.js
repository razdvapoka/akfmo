import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import cn from 'classnames'

const NAV_ITEMS = [
  {
    title: 'navigation.events',
    href: '/events',
  },
  {
    title: 'navigation.publications',
    href: '/publications',
  },
  {
    title: 'navigation.about',
    href: '/about',
  },
  {
    title: 'navigation.contact',
    href: '/contact',
  },
]

export const NavigationList = ({ className }) => {
  const { t } = useTranslation('common')
  return (
    <ul className={cn('leading-l lg:space-y-2 lg:leading-m', className)}>
      {NAV_ITEMS.map(({ title, href }, index) => (
        <li key={index}>
          <Link href={href}>
            <a className="hover:underline" aria-label={t(title)}>
              {t(title)}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
