import cn from 'classnames'
import { Logo, Menu } from '.'
import { useInvertedContext, useLogoAnimationContext } from '../lib/contexts'
import { useState, useEffect } from 'react'

const Spacer = () => {
  return (
    <div className="hidden lg:block border-t py-2">
      <div className="w-1/2 h-[14rem] border-r" />
    </div>
  )
}

export const Header = ({ isMain }) => {
  const [isInverted] = useInvertedContext()
  const [hasLogoBeenAnimated, setHasLogoBeenAnimated] =
    useLogoAnimationContext()
  const [hasScrolled, setHasScrolled] = useState(hasLogoBeenAnimated)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true)
      setHasLogoBeenAnimated(true)
    }
    setTimeout(handleScroll, 1000)
    window.addEventListener('scroll', handleScroll, { once: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setHasScrolled, setHasLogoBeenAnimated])

  return (
    <header
      className={cn(
        'z-50 relative top-0 left-0 px-4 pt-6 lg:pt-2',
        isInverted ? 'bg-grey5 text-white' : 'bg-white'
      )}
    >
      <Logo
        isMain={isMain}
        classNames={cn(
          'transition-all duration-[1300ms] ease-in-out',
          hasScrolled || !isMain ? 'w-[35.5rem]' : 'w-[93.5rem]'
        )}
      />
      <Spacer />
      <Menu isMain={isMain} />
    </header>
  )
}
