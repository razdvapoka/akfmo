import Link from 'next/link'
import LangSwitcher from './lang-switcher'

export default function Header() {
  return (
    <header className="bg-white z-50 fixed top-0 left-0 w-screen p-4 flex justify-between">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">AKFMO</a>
        </Link>
      </h2>
      <LangSwitcher />
    </header>
  )
}
