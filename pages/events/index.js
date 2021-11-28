import { getEventsWithSlugs } from '../../lib/api'
import { Events } from '../../components/pages'
import { isPastEvent, not } from '../../lib/utils'

export default function EventsPage({ events }) {
  return <Events events={events} />
}

export async function getStaticProps(context) {
  const data = await getEventsWithSlugs(context.locale)
  return {
    props: {
      events:
        data?.allEvents?.edges
          ?.map((edge) => edge.node)
          ?.filter(not(isPastEvent)) || [],
    },
    revalidate: 60,
  }
}
