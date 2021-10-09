import Link from 'next/link'
import FooterLogoSvg from '../../assets/svg/footerLogo.svg'
import styles from './styles.module.scss'
import cn from 'classnames'
import { NavigationList, SocialList } from '../'
import useTranslation from 'next-translate/useTranslation'

export const Footer = () => {
  const { t } = useTranslation('common')
  return (
    <footer className="px-4 py-[15rem] font-bold uppercase">
      <nav className="grid grid-cols-2 min-h-[68rem] grid-rows-2 gap-x-8 mb-8">
        <div
          className={cn(
            ' flex items-end relative border-b pb-4',
            styles.rightLine
          )}
        >
          <NavigationList />
        </div>
        <div className="flex items-end border-b pb-4">
          <SocialList />
        </div>
        <div className={cn('relative flex items-end', styles.rightLine)}>
          <Link href="/">
            <a className="hover:underline">{t('collectiveFooter')}</a>
          </Link>
        </div>
        <div className="flex items-end">
          <Link href="/">
            <a className="hover:underline">{t('akfmoFooter')}</a>
          </Link>
        </div>
      </nav>
      <div className="flex justify-center items-center">
        <FooterLogoSvg className="w-[22rem]" />
      </div>
    </footer>
  )
}
