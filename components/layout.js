import { Header, Footer, Meta, Subscribe } from '../components'

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 px-4">{children}</main>
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}
