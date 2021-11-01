import Head from 'next/head'
import { useMemo } from 'react'
import { EventGrid, Layout, Intro, EventSwitcher } from '../components'
import { getMainPage } from '../lib/api'
import { repeat } from '../lib/utils'

export default function Index({ data }) {
  const events = useMemo(
    () =>
      repeat(
        5,
        data.events.map(({ event }) => event)
      ).flat(),
    [data]
  )

  return (
    <Layout className="overflow-hidden">
      <Head>
        <title>AKFMO</title>
      </Head>
      <Intro />
      <section id="events" className="mt-18">
        <EventGrid events={events} />
        <EventSwitcher />
      </section>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const data = await getMainPage(context.locale)
  return {
    props: { data: data.main },
    revalidate: 60,
  }
}
