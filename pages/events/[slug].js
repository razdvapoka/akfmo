import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import {
  EventInfo,
  ButtonLink,
  EventHeader,
  Layout,
  Share,
  Press,
} from '../../components'
import { getEventsWithSlugs, getEvent } from '../../lib/api'
import useTranslation from 'next-translate/useTranslation'

export default function Post({ event }) {
  const { t } = useTranslation('common')

  const router = useRouter()
  if (!router.isFallback && !event?._meta?.uid) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <article className="lg:flex lg:flex-col">
          <Head>
            <title>event</title>
            <meta property="og:image" content={event.cover.url} />
          </Head>

          <EventHeader title={event.title} tags={event._meta.tags} />
          <Share url={router.asPath} title={event.title} />
          <EventInfo event={event} />
          <ButtonLink
            link={event.eventurl.url}
            className="w-full h-18 mb-16 lg:order-4"
          >
            {t('buttons.register')}
          </ButtonLink>

          <Press press={event.press} />
        </article>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params, locale }) {
  const data = await getEvent(params.slug, locale)
  return {
    props: {
      event: data?.event ?? null,
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
