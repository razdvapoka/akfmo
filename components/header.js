import cn from 'classnames'
import { Logo, Menu } from '.'
import { useInvertedContext } from '../lib/contexts'
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
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])
  return (
    <header
      className={cn(
        'z-50 relative top-0 left-0 px-4 pt-6 lg:pt-2',
        isInverted ? 'bg-grey5 text-white' : 'bg-white'
      )}
    >
      <Logo
        isMain={isMain}
        classNames={cn('transition-all  w-[35.5rem] duration-[1300ms]', {
          'w-[93.5rem]': offset === 0,
        })}
      />
      <Spacer />
      <Menu isMain={isMain} />
    </header>
  )
}
