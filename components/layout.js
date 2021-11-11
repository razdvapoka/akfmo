import cn from 'classnames'
import { Header, Footer, Meta, Subscribe } from '../components'

export const Layout = ({ children, className }) => {
  return (
    <>
      <Meta />
      <div className={cn('min-h-screen flex flex-col', className)}>
        <Header />
        <main className="flex-1 px-4">{children}</main>
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}

export const PopUpLayout = ({ children, className }) => {
  return (
    <>
      <Meta />
      <div className={cn('min-h-screen flex flex-col', className)}>
        <main className="flex-1 px-4">{children}</main>
      </div>
    </>
  )
}
