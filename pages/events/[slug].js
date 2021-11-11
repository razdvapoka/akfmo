import { useCallback } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import {
  EventInfo,
  ButtonLink,
  EventHeader,
  Share,
  Partners,
  Press,
  PopUpLayout,
} from '../../components'
import { getEventsWithSlugs, getEvent } from '../../lib/api'
import useTranslation from 'next-translate/useTranslation'
import X from '../../assets/svg/x.svg'

export default function Post({ event }) {
  const { t } = useTranslation('common')

  const router = useRouter()
  const goBack = useCallback(() => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      router.push('/')
    }
  }, [router])

  if (!router.isFallback && !event?._meta?.uid) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <PopUpLayout>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <article className="grid grid-cols-24 pt-8">
          <Head>
            <title>event</title>
            <meta property="og:image" content={event.cover.url} />
          </Head>
          <div className="col-span-2 border-r"></div>
          <div className="col-start-3 col-end-22 grid grid-cols-20">
            <EventHeader title={event.title} tags={event._meta.tags} />
            <div className="col-start-19 col-end-20 flex justify-items-end">
              <button className="w-9 h-9" onClick={goBack}>
                <X />
              </button>
            </div>
            <Share url={router.asPath} title={event.title} />
            <ButtonLink
              link={event.eventurl.url}
              className="col-start-2 col-end-20 h-18 mt-10 mb-16"
            >
              {t('buttons.register')}
            </ButtonLink>
            <EventInfo event={event} />
            {event?.partners?.length > 0 && (
              <Partners partners={event.partners} />
            )}
            {event?.press?.length > 0 && <Press press={event.press} />}
          </div>
          <div className="col-span-2 border-l"></div>
        </article>
      )}
    </PopUpLayout>
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
