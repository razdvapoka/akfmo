import Link from 'next/link'
import LangSwitcher from '../lang-switcher'
import styles from './styles.module.scss'
import cn from 'classnames'

export const Menu = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-8 pt-4 border-t min-h-[20rem]">
      <div
        className={cn(
          'w-100 grid grid-cols-2 border-b relative',
          styles.rightLine
        )}
      >
        <nav>
          <ul className="flex flex-col font-bold">
            <li className="mb-[0.4rem]">
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  Events
                </a>
              </Link>
            </li>
            <li className="mb-[0.4rem]">
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  Publications
                </a>
              </Link>
            </li>
            <li className="mb-[0.4rem]">
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  About AKFMO
                </a>
              </Link>
            </li>
            <li className="mb-[0.4rem]">
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <LangSwitcher />
        </nav>
      </div>
      <div className="w-100 grid grid-cols-3 border-b">
        <nav aria-label="social links">
          <ul className="flex flex-col font-bold">
            <li className="mb-[0.4rem]">
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  Instagram
                </a>
              </Link>
            </li>
            <li className="mb-[0.4rem]">
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  Facebook
                </a>
              </Link>
            </li>
            <li className="mb-[0.4rem]">
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  Visit Us
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="/">
          <a className="hover:underline font-bold flex justify-center">
            Subscribe
          </a>
        </Link>
        <Link href="/">
          <a className="hover:underline font-bold flex justify-end">AKFMO</a>
        </Link>
      </div>
    </div>
  )
}
