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

  const publications = useMemo(
    () =>
      repeat(
        10,
        data.publications.map(({ publication }) => publication)
      )
        .flat()
        .map((p, i) => ({
          ...p,
          title: `${p.title}—(${i + 1})`,
          year: p.year + i,
        })),
    [data]
  )

  console.log(publications)

  return (
    <Layout>
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
