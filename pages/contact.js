import Head from 'next/head'
import { CityContact, Layout, LocaleContact } from '../components'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>AKFMO: Contact Us</title>
      </Head>
      <section className="pt-4 pb-8 lg:pt-0 lg:pb-6">
        <h1 className="hidden lg:flex border-t py-4 items-center justify-center text-m uppercase font-bold">
          contact us
        </h1>
        <LocaleContact />
        <CityContact />
      </section>
    </Layout>
  )
}
