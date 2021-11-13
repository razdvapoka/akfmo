import Link from 'next/link'
import FooterLogoSvg from '../../assets/svg/footerLogo.svg'
import styles from './styles.module.scss'
import cn from 'classnames'
import { NavigationList, SocialList } from '../'
import useTranslation from 'next-translate/useTranslation'

export const Footer = () => {
  const { t } = useTranslation('common')
  return (
    <footer className="px-4 py-[15rem] font-bold uppercase lg:py-6 lg:bg-black lg:text-white lg:border-white">
      <nav className="grid grid-cols-2 min-h-[68rem] grid-rows-2 gap-x-8 mb-8 lg:min-h-[45rem] lg:text-m lg:gap-x-4 lg:mb-0">
        <div
          className={cn(
            ' flex items-end relative border-b pb-4 lg:items-start',
            styles.rightLine
          )}
        >
          <NavigationList />
        </div>
        <div className="flex items-end border-b pb-4 lg:items-start">
          <SocialList />
        </div>
        <div className={cn('relative flex items-end', styles.rightLine)}>
          <Link href="/">
            <a className="hover:underline lg:inline-block lg:word-spacing-1 lg:pr-3">
              {t('collectiveFooter')}
            </a>
          </Link>
        </div>
        <div className="flex items-end">
          <Link href="/">
            <a className="hover:underline">{t('akfmoFooter')}</a>
          </Link>
        </div>
      </nav>
      <div className="flex justify-center items-center lg:hidden">
        <FooterLogoSvg className="w-[22rem]" />
      </div>
    </footer>
  )
}
