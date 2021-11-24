import TwitterSvg from '../../../assets/svg/twitter.svg'
import TwitterMobSvg from '../../../assets/svg/twitter-mob.svg'
import FacebookSvg from '../../../assets/svg/facebook.svg'
import FacebookMobSvg from '../../../assets/svg/facebook-mob.svg'
import TelegramSvg from '../../../assets/svg/telegram.svg'
import TelegramMobSvg from '../../../assets/svg/telegram-mob.svg'
import useTranslation from 'next-translate/useTranslation'

export const Share = ({ url, title }) => {
  const { t, lang } = useTranslation('common')
  const sharingUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${lang}${url}`
  return (
    <div className="mt-4 mb-6 lg:mb-4 flex items-center col-start-2 col-end-10">
      <h2 className="font-bold text-m uppercase mr-2">{t('share.share')}</h2>
      <a
        href={`https://twitter.com/share?url=${sharingUrl}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 mr-2 lg:h-6 lg:w-6"
        aria-label={t('share.twitter')}
      >
        <TwitterSvg className="lg:hidden" />
        <TwitterMobSvg className="hidden lg:block" />
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${sharingUrl}&quote=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 mr-2 lg:h-6 lg:w-6"
        aria-label={t('share.facebook')}
      >
        <FacebookSvg className="lg:hidden" />
        <FacebookMobSvg className="hidden lg:block" />
      </a>

      <a
        href={`https://t.me/share/url?url=${sharingUrl}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 lg:h-6 lg:w-6"
        aria-label={t('share.telegram')}
      >
        <TelegramSvg className="lg:hidden" />
        <TelegramMobSvg className="hidden lg:block" />
      </a>
    </div>
  )
}
