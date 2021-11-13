import { ButtonLink } from '.'
import useTranslation from 'next-translate/useTranslation'
import AboutEllipse from '../assets/svg/about-ellipse.svg'

export const LocaleContact = () => {
  const { t } = useTranslation('common')
  return (
    <div className="flex pb-4">
      <div className="w-1/2 pr-4">
        <div className="pt-2 border-t text-m leading-m">
          <h2 className="uppercase font-bold mb-6">
            {t('contactLocale.title')}
          </h2>
          <adress className="w-3/4 inline-block text-xl leading-l font-medium mb-9">
            {t('contactLocale.adress')}
            <br />
            {t('contactLocale.tel') + ' ' + t('contactLocale.telNumber')}
            <br />
            {t('contactLocale.fax') + ' ' + t('contactLocale.faxNumber')}
          </adress>
          <ButtonLink
            link={'mailto:' + t('contactLocale.mail')}
            className="w-1/2 h-24 mr-4"
          >
            {t('contactLocale.emailButton')}
          </ButtonLink>
          <ButtonLink
            link={t('contactLocale.fbLink')}
            className="w-24 h-24 mr-4 rounded-full"
          >
            {t('contactLocale.fbButton')}
          </ButtonLink>
          <ButtonLink
            link={t('contactLocale.inLink')}
            className="w-24 h-24 rounded-full"
          >
            {t('contactLocale.inButton')}
          </ButtonLink>
        </div>
      </div>
      <div className="w-1/2">
        <div className="pl-4">
          <div className="border-t" />
        </div>
        <div className="pt-4">
          <div className="border-l pl-4 pr-4">
            <AboutEllipse />
          </div>
        </div>
      </div>
    </div>
  )
}
