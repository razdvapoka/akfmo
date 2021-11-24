import cn from 'classnames'
import { Header, Footer, Meta, Subscribe } from '../components'
import { InvertedProvider } from '../lib/contexts'
import { MenuMobile } from './menu'

export const Layout = ({ children, className, isInverted = false, isMain }) => {
  return (
    <InvertedProvider initialValue={isInverted}>
      <Meta />
      <div
        className={cn(
          'min-h-screen flex flex-col relative',
          {
            'bg-grey5': isInverted,
          },
          className
        )}
      >
        <Header isMain={isMain} />
        <MenuMobile hasLogoOnTop={isMain} />
        <main className="flex-1 px-4">{children}</main>
        <Subscribe />
        <Footer />
      </div>
    </InvertedProvider>
  )
}

export const PopUpLayout = ({ children, className, isInverted }) => {
  return (
    <InvertedProvider initialValue={isInverted}>
      <Meta />
      <div className={cn('min-h-screen flex flex-col', className)}>
        <main className="flex-1 px-4 lg:px-2 pb-6 lg:pb-0">{children}</main>
      </div>
    </InvertedProvider>
  )
}
