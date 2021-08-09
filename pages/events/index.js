import Head from 'next/head'
import Layout from '../../components/layout'
import { getEventsWithSlugs } from '../../lib/api'
import EventGrid from '../../components/event-grid'

export default function Events({ events }) {
  return (
    <Layout>
      <Head>
        <title>AKFMO Events</title>
      </Head>
      <h1 className="text-3xl uppercase mb-4">Events</h1>
      <EventGrid events={events} />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const data = await getEventsWithSlugs(context.locale)
  return {
    props: { events: data?.allEvents?.edges?.map((edge) => edge.node) || [] },
  }
}
