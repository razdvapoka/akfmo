import { format } from 'date-fns'
import { ru, de, enUS } from 'date-fns/locale'
import { useRouter } from 'next/router'
import { Date as PrismicDate } from 'prismic-reactjs'

const LOCALE_MAP = {
  ru: ru,
  en: enUS,
  de: de,
}

export const Date = ({ dateString, ...rest }) => {
  const { locale } = useRouter()
  const date = PrismicDate(dateString)
  return (
    <time dateTime={dateString} {...rest}>
      {format(date, 'LLLL	d, yyyy', { locale: LOCALE_MAP[locale] })}
    </time>
  )
}
