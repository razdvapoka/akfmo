import TwitterSvg from '../assets/svg/twitter.svg'
import FacebookSvg from '../assets/svg/facebook.svg'
import TelegramSvg from '../assets/svg/telegram.svg'
import useTranslation from 'next-translate/useTranslation'

export const Share = ({ url, title }) => {
  const { t, lang } = useTranslation('common')
  const sharingUrl = `${process.env.BASE_URL}${lang}${url}`
  return (
    <div className="mb-6 flex items-center lg:order-2">
      <h2 className="font-bold text-m uppercase mr-2">{t('share.share')}</h2>
      <a
        href={`https://twitter.com/share?url=${sharingUrl}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 mr-2 lg:h-6 lg:w-6"
        aria-label={t('share.twitter')}
      >
        <TwitterSvg />
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${sharingUrl}&quote=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 mr-2 lg:h-6 lg:w-6"
        aria-label={t('share.facebook')}
      >
        <FacebookSvg />
      </a>

      <a
        href={`https://t.me/share/url?url=${sharingUrl}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 lg:h-6 lg:w-6"
        aria-label={t('share.telegram')}
      >
        <TelegramSvg />
      </a>
    </div>
  )
}
