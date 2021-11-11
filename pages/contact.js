import Head from 'next/head'
import { CityContact, Layout, LocaleContact } from '../components'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>AKFMO contact</title>
      </Head>
      <section className="pt-4">
        <LocaleContact />
        <CityContact />
      </section>
    </Layout>
  )
}
