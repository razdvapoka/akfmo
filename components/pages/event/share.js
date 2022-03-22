import TwitterSvg from '../../../assets/svg/twitter.svg'
import TwitterMobSvg from '../../../assets/svg/twitter-mob.svg'
import TelegramSvg from '../../../assets/svg/telegram.svg'
import TelegramMobSvg from '../../../assets/svg/telegram-mob.svg'
import useTranslation from 'next-translate/useTranslation'

const ShareButton = (props) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 border rounded-full lg:h-6 lg:w-6 hover:text-white hover:bg-black hover:border-black transition-colors lg:border-none lg:rounded-none"
      {...props}
    />
  )
}

export const Share = ({ url, title }) => {
  const { t, lang } = useTranslation('common')
  const sharingUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${lang}${url}`
  return (
    <div className="mt-4 mb-6 lg:mb-4 flex items-center col-start-2 col-end-10 space-x-2">
      <h2 className="font-bold text-m uppercase">{t('share.share')}</h2>
      <ShareButton
        href={`https://twitter.com/share?url=${sharingUrl}&text=${title}`}
        aria-label={t('share.twitter')}
      >
        <TwitterSvg className="lg:hidden" />
        <TwitterMobSvg className="hidden lg:block" />
      </ShareButton>
      <ShareButton
        href={`https://t.me/share/url?url=${sharingUrl}&text=${title}`}
        aria-label={t('share.telegram')}
      >
        <TelegramSvg className="lg:hidden" />
        <TelegramMobSvg className="hidden lg:block" />
      </ShareButton>
    </div>
  )
}
