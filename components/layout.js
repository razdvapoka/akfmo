import cn from 'classnames'
import { Header, Footer, Meta, Subscribe } from '../components'
import { InvertedProvider } from '../lib/contexts'

export const Layout = ({ children, className, isInverted = false }) => {
  return (
    <InvertedProvider initialValue={isInverted}>
      <Meta />
      <div
        className={cn(
          'min-h-screen flex flex-col',
          {
            'bg-grey5': isInverted,
          },
          className
        )}
      >
        <Header />
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
        <main className="flex-1 px-4 lg:px-2">{children}</main>
      </div>
    </InvertedProvider>
  )
}
