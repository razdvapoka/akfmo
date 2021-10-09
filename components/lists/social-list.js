import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export const SocialList = ({ events }) => {
  const { t } = useTranslation('common')
  const SOCIAL_ITEMS = [
    {
      title: t('socialInstagram'),
      href: 'https://www.instagram.com/',
    },
    {
      title: t('socialFacebook'),
      href: 'https://facebook.com/',
    },
    {
      title: t('socialVisitUs'),
      href: '/',
    },
  ]
  return (
    <ul>
      {SOCIAL_ITEMS.map(({ title, href }, index) => (
        <li key={index}>
          <Link href={href}>
            <a className="hover:underline" target="_blank" aria-label={title}>
              {title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
