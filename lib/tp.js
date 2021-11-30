import useTranslation from 'next-translate/useTranslation'
import { useMemo } from 'react'
import Typograf from 'typograf'

const DEFAULT_TYPOGRAF_LOCALE = ['ru', 'en-US', 'de']
const LANG_TO_TYPOGRAF_LOCALE_MAP = {
  en: ['en-US'],
  de: ['de'],
  ru: ['ru'],
}

const typographs = {}

export const useTp = (text) => {
  const { lang } = useTranslation('common')

  const result = useMemo(() => {
    const typografLocale =
      LANG_TO_TYPOGRAF_LOCALE_MAP[lang] || DEFAULT_TYPOGRAF_LOCALE
    const typograf =
      typographs[lang] || new Typograf({ locale: typografLocale })
    typographs[lang] = typograf
    return typograf.execute(text)
  }, [lang, text])

  return result
}
