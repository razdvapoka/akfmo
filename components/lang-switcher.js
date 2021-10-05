import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

export const LangSwitcher = () => {
  const { locale: currentLocale, locales, asPath } = useRouter()
  return (
    <div className="space-x-2">
      {locales.map((locale) => (
        <Link key={locale} href={asPath} locale={locale} scroll={false}>
          <a
            className={cn({
              'pointer-events-none underline': locale === currentLocale,
            })}
          >
            {locale}
          </a>
        </Link>
      ))}
    </div>
  )
}
