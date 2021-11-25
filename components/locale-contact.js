import { ButtonLink } from '.'
import useTranslation from 'next-translate/useTranslation'
import AboutEllipse from '../assets/svg/about-ellipse.svg'
import AboutEllipseMob from '../assets/svg/about-ellipse-m.svg'
import { RichText } from 'prismic-reactjs'

export const LocaleContact = ({
  address,
  email,
  facebookUrl,
  instagramUrl,
}) => {
  const { t } = useTranslation('common')
  return (
    <div className="flex pb-4 lg:flex-col lg:pb-6">
      <div className="w-1/2 pr-4 lg:w-full lg:pr-0">
        <div className="pt-2 border-t text-m leading-m lg:pt-6 lg:text-m">
          <h2 className="uppercase font-bold mb-6 lg:text-m">
            {t('contactLocale.title')}
          </h2>
          <address className="w-3/4 inline-block text-xl leading-l font-medium mb-9 lg:mb-7 lg:text-m lg:leading-ml lg:w-full lg:pr-4 not-italic">
            <RichText render={address} />
          </address>
          <ButtonLink
            link={email}
            className="w-1/2 h-24 mr-4 lg:w-[15.6rem] lg:h-10 lg:mr-2 hover:text-white hover:bg-black transition-colors ease-out duration-300"
          >
            {t('contactLocale.emailButton')}
          </ButtonLink>
          <ButtonLink
            link={facebookUrl}
            className="w-24 h-24 mr-4 rounded-full lg:w-10 lg:h-10 lg:mr-2 hover:text-white hover:bg-black transition-colors ease-out duration-300"
          >
            {t('contactLocale.fbButton')}
          </ButtonLink>
          <ButtonLink
            link={instagramUrl}
            className="w-24 h-24 rounded-full lg:w-10 lg:h-10 hover:text-white hover:bg-black transition-colors ease-out duration-300"
          >
            {t('contactLocale.inButton')}
          </ButtonLink>
        </div>
      </div>
      <div className="w-1/2 lg:w-full lg:mt-6">
        <div className="pl-4 lg:pl-0">
          <div className="border-t" />
        </div>
        <div className="pt-4 lg:pt-6">
          <div className="border-l px-4 lg:px-0 lg:border-l-0">
            <div className="lg:hidden">
              <AboutEllipse />
            </div>
            <div className="hidden lg:block">
              <AboutEllipseMob />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
