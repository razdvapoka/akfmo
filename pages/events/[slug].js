import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import {
  EventInfo,
  ButtonLink,
  EventHeader,
  Layout,
  Share,
  Partners,
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
        <article>
          <Head>
            <title>event</title>
            <meta property="og:image" content={event.cover.url} />
          </Head>
          <EventInfo event={event} />
          <h1 className="mb-4">{event.title}</h1>
          <Share url={router.asPath} title={event.title} />
          <EventHeader title={event.title} tags={event._meta.tags} />
          <ButtonLink link={event.eventurl.url} className="w-full h-18 mb-16">
            {t('buttons.register')}
          </ButtonLink>
          <Partners partners={event.partners} />
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
