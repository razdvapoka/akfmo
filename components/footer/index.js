import Link from 'next/link'
import FooterLogoSvg from '../../assets/svg/footerLogo.svg'
import styles from './styles.module.scss'
import cn from 'classnames'


export const Footer = () => {
  return (
      <footer className="px-4 py-[15rem] font-bold uppercase">
          <nav className='grid grid-cols-2 min-h-[68rem] grid-rows-2 gap-x-8 mb-8'>
              <div className={cn(' flex items-end relative border-b pb-4', styles.rightLine)}>
                  <ul aria-label='navigation list'>
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
              </div>
              <div className='flex items-end border-b pb-4'>
                  <ul aria-label='navigation social list'>
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
              </div>
              <div className={cn('relative flex items-end', styles.rightLine)}>
                  <Link href="/">
                      <a className="hover:underline">
                          website by Kit collective
                      </a>
                  </Link>
              </div>
              <div className='flex items-end'>
                  <Link href="/">
                      <a className="hover:underline">
                          AKFMO 2021
                      </a>
                  </Link>
              </div>
          </nav>
            <div className='flex justify-center items-center'>
                <FooterLogoSvg className='w-[22rem]' />
            </div>
      </footer>
      )
}
