import { useRouter } from 'next/router'
import Link from 'next/link'

export default function LangSwitcher() {
  const { locale: currentLocale, locales, asPath } = useRouter()
  return (
    <div className="space-x-2">
      {locales
        .filter((locale) => locale !== currentLocale)
        .map((locale) => (
          <Link key={locale} href={asPath} locale={locale} scroll={false}>
            <a>{locale}</a>
          </Link>
        ))}
    </div>
  )
}
