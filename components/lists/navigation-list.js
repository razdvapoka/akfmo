import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export const NavigationList = ({ events }) => {
  const { t } = useTranslation('common')
  const NAV_ITEMS = [
    {
      title: t('navigationEvents'),
      href: '/events',
    },
    {
      title: t('navigationPublications'),
      href: '/publications',
    },
    {
      title: t('navigationAbout'),
      href: '/about',
    },
    {
      title: t('navigationContact'),
      href: '/contact',
    },
  ]
  return (
    <ul>
      {NAV_ITEMS.map(({ title, href }, index) => (
        <li className="leading-l" key={index}>
          <Link href={href}>
            <a className="hover:underline" aria-label={title}>
              {title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
