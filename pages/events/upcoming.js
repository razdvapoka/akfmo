import { getEventsWithSlugs } from '../../lib/api'
import { repeat } from '../../lib/utils'
import { useMemo } from 'react'
import { Events } from '../../components/pages'

export default function UpcomingEventsPage({ events }) {
  const fakeEvents = useMemo(() => repeat(5, events).flat().reverse(), [events])

  return <Events events={fakeEvents} />
}

export async function getStaticProps(context) {
  const data = await getEventsWithSlugs(context.locale)
  return {
    props: { events: data?.allEvents?.edges?.map((edge) => edge.node) || [] },
    revalidate: 60,
  }
}
