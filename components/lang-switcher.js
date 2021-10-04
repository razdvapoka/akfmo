import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

export default function LangSwitcher() {
  const { locale: currentLocale, locales, asPath } = useRouter()
  return (
    <ul className="flex flex-col font-bold">
      {locales.map((locale) => (
        <li className="mb-[0.4rem]">
          <Link key={locale} href={asPath} locale={locale} scroll={false}>
            <a
              className={cn({
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
