import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

export const LangSwitcher = ({ isClosed }) => {
  const { locale: currentLocale, locales, asPath } = useRouter()
  return (
    <ul className="font-bold lg:flex lg:flex-col">
      {locales.map((locale) => {
        const isCurrentLocale = locale === currentLocale
        return (
          <li
            className={cn(
              'leading-l lg:mb-1 lg:text-m lg:leading-m',
              isCurrentLocale ? 'lg:order-1' : 'lg:order-2',
              { 'lg:opacity-0': !isCurrentLocale && isClosed }
            )}
            key={locale}
          >
            <Link href={asPath} locale={locale} scroll={false}>
              <a
                className={cn('hover:underline', {
                  'pointer-events-none underline': isCurrentLocale,
                })}
              >
                {locale}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
