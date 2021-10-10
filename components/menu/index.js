import Link from 'next/link'
import { LangSwitcher, NavigationList, SocialList } from '../'
import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'

export const Menu = ({ hasBottomGap }) => {
  const { t } = useTranslation('common')
  return (
    <div
      className={cn('font-bold flex pt-4 border-t min-h-[20rem] uppercase', {
        'pb-4': hasBottomGap,
      })}
    >
      <nav className="w-1/2 flex border-r relative">
        <div className="flex-1 leading-l">
          <NavigationList />
        </div>
        <div className="flex-1">
          <LangSwitcher />
        </div>
      </nav>
      <div className="w-1/2 grid grid-cols-3 leading-l">
        <nav className="pl-4" aria-label="social links">
          <SocialList />
        </nav>
        <div className="flex justify-center items-start">
          <Link href="/">
            <a className="hover:underline">{t('subscribe')}</a>
          </Link>
        </div>
        <div className="flex justify-end items-start">
          <Link href="/">
            <a className="hover:underline">{t('akfmo')}</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
