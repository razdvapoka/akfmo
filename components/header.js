import Link from 'next/link'
import LangSwitcher from './lang-switcher'
import Logo from './logo/index.js'

export default function Header() {
  return (
    <header className="bg-white z-50 fixed top-0 left-0 w-screen p-4">
      <Logo />
    </header>
  )
}
