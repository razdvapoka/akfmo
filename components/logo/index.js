import Link from 'next/link'
import LogoSvg from '../../assets/svg/logo.svg'
import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'

export const Logo = ({ isMain, classNames }) => {
  const { t } = useTranslation('common')
  return (
    <Link href="/">
      <a
        className={cn('flex justify-center items-center mb-12 lg:mb-4', {
          'lg:hidden': !isMain,
        })}
        aria-label={t('logotype')}
      >
        <LogoSvg
          className={cn('lg:w-full', classNames)}
          style={{
            willChange: 'width',
          }}
        />
      </a>
    </Link>
  )
}
