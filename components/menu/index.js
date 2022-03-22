import Link from 'next/link'
import { LangSwitcher, NavigationList, SocialList } from '../'
import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import { useRef, useState, useEffect, useCallback } from 'react'
import X from '../../assets/svg/x-small.svg'
import { useLockBodyScroll } from 'react-use'
import { useInvertedContext } from '../../lib/contexts'

const MENU_INIT = 'MENU_INIT'
const MENU_CLOSED = 'MENU_CLOSED'
const MENU_LANG_OPEN = 'MENU_LANG_OPEN'
const MENU_OPEN = 'MENU_OPEN'

export const Menu = ({ hasBottomGap }) => {
  const { t } = useTranslation('common')
  return (
    <div
      className={cn(
        'font-bold flex pt-4 border-t min-h-[20rem] uppercase lg:hidden',
        {
          'pb-4': hasBottomGap,
        }
      )}
    >
      <nav className="w-1/2 flex border-r relative">
        <div className="flex-1 leading-l">
          <NavigationList />
        </div>
        <div className="flex-1">
          <LangSwitcher />
        </div>
      </nav>
      <div className="w-1/2 grid grid-cols-3 leading-l">
        <nav className="pl-4" aria-label="social links">
          <SocialList />
        </nav>
        <div className="flex justify-center items-start">
          <Link href="#subscribe">
            <a className="hover:underline">{t('subscribe')}</a>
          </Link>
        </div>
        <div className="flex justify-end items-start">
          <Link href="/">
            <a className="hover:underline">{t('akfmo')}</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export const MenuMobile = ({ hasLogoOnTop }) => {
  const { t } = useTranslation('common')
  const [state, setState] = useState(MENU_INIT)
  const ref = useRef(null)

  const updateState = useCallback(() => {
    if (ref.current) {
      const { y } = ref.current.getBoundingClientRect()
      setState((currentState) =>
        currentState === MENU_INIT && Math.round(y) <= 0
          ? MENU_CLOSED
          : currentState === MENU_CLOSED && Math.round(y) > 0
          ? MENU_INIT
          : currentState
      )
    }
  }, [setState, ref])

  const handleLangClick = useCallback(
    (e) => {
      if (state === MENU_CLOSED) {
        e.preventDefault()
        setState(MENU_LANG_OPEN)
      } else if (state !== MENU_INIT) {
        setState(MENU_CLOSED)
      }
    },
    [state, setState]
  )

  const toggleMenu = useCallback(() => {
    const nextState = state === MENU_OPEN ? MENU_CLOSED : MENU_OPEN
    if (nextState === MENU_OPEN) {
      const { y } = ref.current.getBoundingClientRect()
      if (y > 0) {
        window.scrollBy(0, y)
      }
    }
    setState(nextState)
  }, [state, setState, ref])

  useLockBodyScroll(state === MENU_OPEN)

  useEffect(() => {
    updateState()
    window.addEventListener('scroll', updateState)
    return () => {
      window.removeEventListener('scroll', updateState)
    }
  }, [updateState])

  const [isInverted] = useInvertedContext()
  return (
    <div
      className={cn(
        'hidden lg:block absolute bottom-0 z-50 left-0 w-screen pointer-events-none',
        hasLogoOnTop ? 'top-24' : 'top-2'
      )}
    >
      <div
        className={cn(
          'sticky top-0 uppercase px-2 pt-2 pb-2 overflow-hidden pointer-events-auto',
          isInverted
            ? state === MENU_INIT
              ? 'text-white'
              : 'bg-black text-white'
            : {
                'bg-white': state === MENU_CLOSED,
                'bg-black text-white':
                  state === MENU_LANG_OPEN || state === MENU_OPEN,
              },
          {
            'h-[8.3rem]': state === MENU_INIT || state === MENU_LANG_OPEN,
            'h-7': state === MENU_CLOSED,
            'h-screen !pb-12': state === MENU_OPEN,
          }
        )}
        ref={ref}
      >
        <div
          className={cn('px-2 flex flex-col', {
            'border-l border-r h-full mx-[-1px] overflow-auto':
              state === MENU_OPEN,
          })}
        >
          <div className="flex justify-between items-start">
            <button
              className="uppercase font-bold text-m tracking-wider"
              onClick={toggleMenu}
            >
              {state === MENU_OPEN ? (
                <div className="flex items-center">
                  <div className="w-[1.45rem] h-[1.45rem] mr-1 transform translate-y-[0.1rem]">
                    <X />
                  </div>
                  <span>{t('close')}</span>
                </div>
              ) : (
                t('menu')
              )}
            </button>
            <div className="pl-10" onClick={handleLangClick}>
              <LangSwitcher isClosed={state === MENU_CLOSED} />
            </div>
          </div>
          <Link href="/">
            <a className="block text-center mt-16 mb-2 text-mxx font-bold">
              {t('home')}
            </a>
          </Link>
          <NavigationList className="text-center text-mxx space-y-2 font-bold" />
          <div className="mt-auto flex justify-between space-x-2 text-m font-bold tracking-wider">
            <Link href="/#subscribe">
              <a className="block w-17 text-center" onClick={toggleMenu}>
                {t('subscribe')}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
