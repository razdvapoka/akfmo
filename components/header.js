import cn from 'classnames'
import { Logo, Menu } from '.'
import { useInvertedContext } from '../lib/contexts'

export const Header = () => {
  const [isInverted] = useInvertedContext()
  return (
    <header
      className={cn(
        'z-50 relative top-0 left-0 px-4 pt-6',
        isInverted ? 'bg-grey5 text-white' : 'bg-white'
      )}
    >
      <Logo />
      <Menu />
    </header>
  )
}
