import Head from 'next/head'
import { CityContact, Layout, LocaleContact } from '../components'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>AKFMO: Contact Us</title>
      </Head>
      <section className="pt-4 pb-8">
        <LocaleContact />
        <CityContact />
      </section>
    </Layout>
  )
}
