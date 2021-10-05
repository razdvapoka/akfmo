import Link from 'next/link'
import { LangSwitcher } from '../'
import styles from './styles.module.scss'
import cn from 'classnames'

export const Menu = () => {
  return (
    <div className="grid font-bold uppercase grid-cols-2 grid-rows-1 gap-8 pt-4 border-t min-h-[20rem]">
      <div
        className={cn('grid grid-cols-2 border-b relative', styles.rightLine)}
      >
        <nav>
          <ul>
            <li className="leading-l">
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  Events
                </a>
              </Link>
            </li>
            <li className="leading-l">
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  Publications
                </a>
              </Link>
            </li>
            <li className="leading-l">
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  About AKFMO
                </a>
              </Link>
            </li>
            <li className="leading-l">
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
      <div className="grid grid-cols-3 border-b">
        <nav aria-label="social links">
          <ul>
            <li className="leading-l">
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  Instagram
                </a>
              </Link>
            </li>
            <li className="leading-l">
              <Link href="/">
                <a className="hover:underline" aria-label="logotype">
                  Facebook
                </a>
              </Link>
            </li>
            <li className="leading-l">
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
