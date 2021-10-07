import { Header, Footer, Meta } from '../components'

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 px-4">{children}</main>
        <Footer />
      </div>
    </>
  )
}
