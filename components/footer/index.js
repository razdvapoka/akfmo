import Link from 'next/link'
import styles from './styles.module.scss'
import cn from 'classnames'
import { NavigationList, SocialList } from '../'
import useTranslation from 'next-translate/useTranslation'
import { useInvertedContext } from '../../lib/contexts'

export const Footer = () => {
  const { t } = useTranslation('common')
  const [isInverted] = useInvertedContext()
  return (
    <footer
      className={cn(
        'px-4 pt-8 font-bold uppercase lg:py-6',
        isInverted ? 'bg-white text-black' : 'bg-grey5 text-white'
      )}
    >
      <nav className="grid grid-cols-2 min-h-[68rem] grid-rows-2 gap-x-8 mb-8 lg:min-h-[45rem] lg:text-m lg:gap-x-4 lg:mb-0">
        <div
          className={cn(
            'flex items-end relative border-b pb-4 lg:items-start',
            styles.rightLine
          )}
        >
          <NavigationList className="max-w-full" />
        </div>
        <div className="flex items-end border-b pb-4 lg:items-start">
          <SocialList />
        </div>
        <div className={cn('relative flex items-end', styles.rightLine)}>
          <a
            className="hover:underline lg:inline-block lg:word-spacing-1 lg:pr-3"
            href="https://kitcollective.online"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('collectiveFooter')}
          </a>
        </div>
        <div className="flex items-end">
          <Link href="/">
            <a className="hover:underline">{t('akfmoFooter')}</a>
          </Link>
        </div>
      </nav>
    </footer>
  )
}
