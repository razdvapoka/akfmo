import { ButtonLink } from '.'
import useTranslation from 'next-translate/useTranslation'
import AboutRect from '../assets/svg/about-rect.svg'
import AboutRectMob from '../assets/svg/about-rect-m.svg'
import { RichText } from 'prismic-reactjs'

export const CityContact = ({ embassy, email, url }) => {
  const { t } = useTranslation('common')
  return (
    <div className="flex pb-4 border-t lg:flex-col-reverse lg:pb-0">
      <div className="w-1/2 pr-4 lg:w-full lg:pr-0 lg:border-t">
        <div className="py-4 lg:pt-6 lg:pb-0">
          <div className="lg:hidden">
            <AboutRect />
          </div>
          <div className="hidden lg:block">
            <AboutRectMob />
          </div>
        </div>
      </div>
      <div className="w-1/2 pt-4 lg:w-full lg:pt-6">
        <div className="pl-4 pb-4 text-m leading-m border-l h-full lg:border-l-0 lg:pl-0 lg:pb-6">
          <h2 className="uppercase font-bold mb-10 lg:text-m lg:mb-6">
            {t('contactCity.title')}
          </h2>
          <address className="w-1/2 inline-block text-xl leading-l font-medium mb-12 lg:text-m lg:w-3/4 lg:mb-4 not-italic">
            <RichText render={embassy} />
          </address>
          <div className="flex justify-between h-24 space-x-8 lg:h-10 lg:space-x-2">
            <ButtonLink
              link={email}
              className="w-1/2 hover:text-white hover:bg-black transition-colors ease-out duration-300"
            >
              {t('contactCity.emailButton')}
            </ButtonLink>
            <ButtonLink
              link={url}
              className="w-1/2 hover:text-white hover:bg-black transition-colors ease-out duration-300"
            >
              {t('contactCity.siteButton')}
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  )
}
