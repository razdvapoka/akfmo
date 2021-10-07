import Link from 'next/link'
import { LangSwitcher } from '../'
import cn from 'classnames'

export const Menu = ({ hasBottomGap }) => {
  return (
    <div
      className={cn('font-bold flex pt-4 border-t min-h-[20rem] uppercase', {
        'pb-4': hasBottomGap,
      })}
    >
      <nav className="w-1/2 flex border-r relative">
        <div className="flex-1 leading-l">
          <ul>
            <li>
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  Events
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  Publications
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  About AKFMO
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <LangSwitcher />
        </div>
      </nav>
      <div className="w-1/2 grid grid-cols-3 leading-l">
        <nav className="pl-4" aria-label="social links">
          <ul>
            <li>
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  Instagram
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  Facebook
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  Visit Us
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-start">
          <Link href="/">
            <a className="hover:underline">Subscribe</a>
          </Link>
        </div>
        <div className="flex justify-end items-start">
          <Link href="/">
            <a className="hover:underline">AKFMO</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
