import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const SOCIAL_ITEMS = [
  {
    title: 'social.instagram',
    href: 'https://www.instagram.com/',
  },
  {
    title: 'social.facebook',
    href: 'https://facebook.com/',
  },
  {
    title: 'social.visitUs',
    href: '/',
  },
]

export const SocialList = () => {
  const { t } = useTranslation('common')
  return (
    <ul className="leading-l lg:space-y-2 lg:leading-m">
      {SOCIAL_ITEMS.map(({ title, href }, index) => (
        <li key={index}>
          <Link href={href}>
            <a
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t(title)}
            >
              {t(title)}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
