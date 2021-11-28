import { Event } from '../../components/pages'
import { getEventsWithSlugs, getEvent } from '../../lib/api'

export default function EventPage({ event, events }) {
  return <Event event={event} events={events} />
}

export async function getStaticProps({ params, locale }) {
  const data = await getEvent(params.slug, locale)
  return {
    props: {
      event: data?.event ?? null,
      events: data?.allEvents?.edges ?? null,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths(context) {
  const eventsWithSlugs = await getEventsWithSlugs(context.defaultLocale)
  const slugs = eventsWithSlugs?.allEvents?.edges?.map(
    ({ node }) => node._meta.uid
  )
  return {
    paths: context.locales.flatMap((locale) =>
      slugs.map((slug) => ({
        params: { slug },
        locale,
      }))
    ),
    fallback: true,
  }
}
