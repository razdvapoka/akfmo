import { ButtonLink } from '.'
import useTranslation from 'next-translate/useTranslation'

export const CityContact = () => {
  const { t } = useTranslation('common')
  return (
    <div className="flex pb-4 border-t">
      <div className="w-1/2 pr-4">
        <div className="py-4 "></div>
      </div>
      <div className="w-1/2 pt-4">
        <div className="border-l pl-4 pb-4 text-m leading-m">
          <h2 className="uppercase font-bold mb-6">{t('contactCity.title')}</h2>
          <adress className="w-2/4 inline-block text-xl leading-l font-medium mb-9">
            {t('contactCity.adress')}
            <br />
            {t('contactCity.tel') + ' ' + t('contactCity.telNumber')}
            <br />
            {t('contactCity.fax') + ' ' + t('contactCity.faxNumber')}
          </adress>
          <div className="flex justify-between h-24 space-x-8">
            <ButtonLink
              link={'mailto:' + t('contactCity.mail')}
              className="w-1/2"
            >
              {t('contactCity.emailButton')}
            </ButtonLink>
            <ButtonLink link={t('contactCity.siteLink')} className="w-1/2">
              {t('contactCity.siteButton')}
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  )
}
