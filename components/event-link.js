import { useRouter } from 'next/router'
import Link from 'next/link'
import { usePrevLocationContext } from '../lib/contexts'

export const EventLink = ({ children, href, ...rest }) => {
  const router = useRouter()
  const [, setPrevLocation] = usePrevLocationContext()
  const handleClick = () => {
    setPrevLocation(router.asPath)
  }
  return (
    <Link href={href}>
      <a {...rest} onClick={handleClick}>
        {children}
      </a>
    </Link>
  )
}
