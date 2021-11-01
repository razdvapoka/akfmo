import Link from 'next/link'
import TwitterSvg from '../assets/svg/twitter.svg'
import FacebookSvg from '../assets/svg/facebook.svg'
import TelegramSvg from '../assets/svg/telegram.svg'
import useTranslation from 'next-translate/useTranslation'

export const Share = ({ linkurl, title }) => {
  const { t } = useTranslation('common')
  const sharingUrl = `${process.env.BASE_URL}${linkurl.locale}${linkurl.asPath}`
  return (
    <div className="mb-6 flex items-center">
      <h2 className="font-bold text-m uppercase mr-2">SHARE</h2>
      <Link href={`https://twitter.com/share?url=${sharingUrl}&text=${title}`}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="w-[4.5rem] h-[4.5rem] mr-2"
          aria-label={t('share.twitter')}
        >
          <TwitterSvg />
        </a>
      </Link>
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${sharingUrl}&quote=${title}`}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="w-[4.5rem] h-[4.5rem] mr-2"
          aria-label={t('share.facebook')}
        >
          <FacebookSvg />
        </a>
      </Link>
      <Link href={`https://t.me/share/url?url=${sharingUrl}&text=${title}`}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="w-[4.5rem] h-[4.5rem]"
          aria-label={t('share.telegram')}
        >
          <TelegramSvg />
        </a>
      </Link>
    </div>
  )
}
