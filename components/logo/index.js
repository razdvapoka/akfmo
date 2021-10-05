import Link from 'next/link'
import LogoSvg from '../../assets/svg/logo.svg'
import cn from 'classnames'

export const Logo = () => {
  let isDarkTheme = false // future: page past events
  return (
    <Link href="/">
      <a className="flex justify-center items-center" aria-label="logotype">
        <LogoSvg
          className={cn('w-[35.5rem]', {
            'stroke-white text-white': isDarkTheme,
          })}
        />
      </a>
    </Link>
  )
}
