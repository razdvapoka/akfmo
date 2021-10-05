import { Logo, Menu } from '.'

export const Header = () => {
  return (
    <header className="bg-white z-50 relative top-0 left-0 w-screen p-4 pt-[3.1rem] pb-0">
      <Logo />
      <Menu />
    </header>
  )
}
