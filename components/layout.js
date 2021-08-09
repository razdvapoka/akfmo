import Header from '../components/header'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 mt-20 p-4">{children}</main>
        <Footer />
      </div>
    </>
  )
}
