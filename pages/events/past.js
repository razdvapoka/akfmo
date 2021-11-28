import { getEventsWithSlugs } from '../../lib/api'
import { Events } from '../../components/pages'
import { isPastEvent } from '../../lib/utils'

export default function PastEventsPage({ events }) {
  return <Events events={events} isInverted />
}

export async function getStaticProps(context) {
  const data = await getEventsWithSlugs(context.locale)
  return {
    props: {
      events:
        data?.allEvents?.edges?.map((edge) => edge.node)?.filter(isPastEvent) ||
        [],
    },
    revalidate: 60,
  }
}
