import Link from 'next/link'
import LogoSvg from '../../public/images/logo.svg'


export default function logo() {
  return (
      <Link href="/">
          <a className="flex justify-center items-center" aria-label={'logotype'}>
              <LogoSvg className={['w-[35.5rem]', false ? 'stroke-white text-white' : ''].join(' ')} />
          </a>
      </Link>
  )
}
