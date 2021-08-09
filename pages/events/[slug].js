import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import Layout from '../../components/layout'
import { getEventsWithSlugs, getEvent } from '../../lib/api'
import EventTitle from '../../components/post-title'

export default function Post({ event }) {
  const router = useRouter()
  if (!router.isFallback && !event?._meta?.uid) {
    return <ErrorPage statusCode={404} />
  }

  console.log(event)

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <EventTitle>Loading…</EventTitle>
        ) : (
          <article>
            <Head>
              <title>event</title>
              <meta property="og:image" content={event.cover.url} />
            </Head>
            <EventTitle>{event.title}</EventTitle>
          </article>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const data = await getEvent(params.slug)

  return {
    props: {
      event: data?.event ?? null,
    },
  }
}

export async function getStaticPaths(context) {
  const eventsWithSlugs = await getEventsWithSlugs(context.defaultLocale)
  const slugs = eventsWithSlugs?.data?.allEvents?.edges?.map(
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
