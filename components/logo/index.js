import Link from 'next/link'
import LogoSvg from '../../assets/svg/logo.svg'
import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'

export const Logo = ({ isMain }) => {
  const { t } = useTranslation('common')
  let isDarkTheme = false // future: page past events
  return (
    <Link href="/">
      <a
        className={cn('flex justify-center items-center mb-12 lg:mb-4', {
          'lg:hidden': !isMain,
        })}
        aria-label={t('logotype')}
      >
        <LogoSvg
          className={cn('w-[35.5rem] lg:w-full', {
            'stroke-white text-white': isDarkTheme,
          })}
        />
      </a>
    </Link>
  )
}
