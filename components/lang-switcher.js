import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

export const LangSwitcher = () => {
  const { locale: currentLocale, locales, asPath } = useRouter()
  return (
    <ul className="font-bold">
      {locales.map((locale) => (
        <li className="leading-l" key={locale}>
          <Link href={asPath} locale={locale} scroll={false}>
            <a
              className={cn('hover:underline', {
                'pointer-events-none underline': locale === currentLocale,
              })}
            >
              {locale}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
