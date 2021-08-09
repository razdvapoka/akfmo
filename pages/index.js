import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { useMemo } from 'react'
import EventGrid from '../components/event-grid'
import Layout from '../components/layout'
import { getMainPage } from '../lib/api'

export default function Index({ data }) {
  const { t } = useTranslation('common')
  const events = useMemo(() => data.events.map(({ event }) => event), [data])
  return (
    <Layout>
      <Head>
        <title>AKFMO</title>
      </Head>
      <h1 className="text-3xl uppercase">{data.title}</h1>
      <div className="w-1/3 mt-4">
        <RichText render={data.about} />
      </div>
      <div className="mt-4">
        <Link href="/events">
          <a className="block mt-4 underline uppercase text-xl">
            {t('allEvents')}
          </a>
        </Link>
        <EventGrid events={events} />
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const data = await getMainPage(context.locale)
  return {
    props: { data: data.main },
  }
}
