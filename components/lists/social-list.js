import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const SOCIAL_ITEMS = [
  {
    title: 'social.instagram',
    href: 'https://instagram.com/akf_mow',
    isExternal: true,
  },
  {
    title: 'social.facebook',
    href: 'https://www.facebook.com/akfmow',
    isExternal: true,
  },
]

export const SocialList = () => {
  const { t } = useTranslation('common')
  return (
    <ul className="leading-l lg:space-y-2 lg:leading-m">
      {SOCIAL_ITEMS.map(({ title, href, isExternal }, index) => (
        <li key={index}>
          <Link href={href}>
            <a
              className="hover:underline"
              {...(isExternal
                ? {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  }
                : {})}
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
