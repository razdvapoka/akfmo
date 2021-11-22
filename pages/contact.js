import Head from 'next/head'
import { CityContact, Layout, LocaleContact } from '../components'
import { getContacts } from '../lib/api'

export default function Contact({
  data: { address, embassy, facebook, instagram, email },
}) {
  return (
    <Layout>
      <Head>
        <title>AKFMO: Contact Us</title>
      </Head>
      <section className="pt-4 pb-8 lg:pt-0 lg:pb-6">
        <h1 className="hidden lg:flex border-t py-4 items-center justify-center text-m uppercase font-bold">
          contact us
        </h1>
        <LocaleContact
          address={address}
          facebookUrl={facebook.url}
          instagramUrl={instagram.url}
          email={email}
        />
        <CityContact embassy={embassy} />
      </section>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const data = await getContacts(context.locale)
  return {
    props: { data: data.contact_page },
    revalidate: 60,
  }
}
