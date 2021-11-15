import cn from 'classnames'
import { RichText } from 'prismic-reactjs'
import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import ErrorPage from 'next/error'
import {
  EventInfo,
  ButtonLink,
  EventHeader,
  Share,
  Partners,
  Press,
  PopUpLayout,
  NavigationList,
  LangSwitcher,
} from '../../components'
import { getEventsWithSlugs, getEvent } from '../../lib/api'
import useTranslation from 'next-translate/useTranslation'
import X from '../../assets/svg/x.svg'
import BigX from '../../assets/svg/x-big.svg'
import Image from 'next/image'
import styles from './styles.module.scss'
import format from 'date-fns/format'
import { repeat } from '../../lib/utils'

const htmlSerializer = function (type, element, content, children, key) {
  switch (type) {
    case 'image':
      return (
        <figure key={key}>
          <Image
            src={element.url}
            width={element.dimensions.width}
            height={element.dimensions.height}
            layout="responsive"
            alt={element.alt}
          />
          <figcaption className="text-s leading-m tracking-wide uppercase mt-2">
            {element.alt}
          </figcaption>
        </figure>
      )
    case 'embed':
      return (
        <div className="aspect-w-16 aspect-h-9" key={key}>
          <div
            className={styles.embed}
            dangerouslySetInnerHTML={{ __html: element.oembed.html }}
          />
        </div>
      )

    // Return null to stick with the default behavior for all other elements
    default:
      return null
  }
}

const OtherEvent = ({ _meta: { uid }, title, date, location, index }) => {
  const dateString = useMemo(() => format(new Date(date), 'dd.MM.yyyy'), [date])
  return (
    <Link href={`/events/${uid}`}>
      <a className={cn('block w-1/2 mb-6', styles.otherEvent)}>
        {index > 1 && <hr className={cn(styles.otherEventSeparator, 'mb-6')} />}
        <div className={cn('', styles.otherEventInnerBox)}>
          <h3 className="text-xl leading-ml tracking-tighter font-medium mb-8">
            {title}
          </h3>
          <div className="text-m leading-m uppercase font-bold tracking-wider">{`${location} | ${dateString}`}</div>
        </div>
      </a>
    </Link>
  )
}

const OtherEvents = ({ events, isPastEvent }) => {
  const { t } = useTranslation('common')
  const fakeEvents = repeat(4, events).flat()
  return (
    <section className="col-start-2 col-end-20 border-t pt-2">
      <h2 className="mb-8 text-m leading-m uppercase font-bold tracking-wider">
        {t(isPastEvent ? 'moreEventsPast' : 'moreEventsUpcoming')}
      </h2>
      <div className="flex flex-wrap">
        {fakeEvents.map(({ node }, index) => (
          <OtherEvent
            key={`${node._meta.uid}-${index}`}
            {...node}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default function Post({ event, events }) {
  const { t } = useTranslation('common')

  const router = useRouter()
  const goBack = useCallback(() => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      router.push('/')
    }
  }, [router])

  const isPastEvent = useMemo(() => new Date(event?.date) < new Date(), [event])
  const otherEvents = useMemo(
    () =>
      events?.filter(({ node }) =>
        node._meta.uid !== event?._meta?.uid && isPastEvent
          ? new Date(node.date) < new Date()
          : new Date(node.date) >= new Date()
      ) || [],
    [events, event, isPastEvent]
  )

  if (!router.isFallback && !event?._meta?.uid) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <PopUpLayout>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <article className="grid grid-cols-24 pt-8 lg:pt-0 lg:mt-2 lg:px-2 lg:flex lg:flex-col lg:border-l lg:border-r lg:relative">
          <Head>
            <title>event</title>
            <meta property="og:image" content={event.cover.url} />
          </Head>
          <div className="col-span-2 border-r uppercase text-m leading-m font-bold lg:hidden">
            <div className="sticky top-[20rem]">
              <hr className="mr-4" />
              <nav className="space-y-4 pt-2">
                <NavigationList />
                <LangSwitcher />
              </nav>
            </div>
          </div>
          <div className="col-start-3 col-end-23 grid grid-cols-20 lg:flex lg:flex-col">
            <EventHeader title={event.title} tags={event._meta.tags} />
            <div className="col-start-19 col-end-20 flex justify-end lg:absolute lg:right-2 lg:top-0">
              <button className="w-9 h-9 lg:hidden" onClick={goBack}>
                <X />
              </button>
              <button className="w-8 h-8 hidden lg:block" onClick={goBack}>
                <BigX />
              </button>
            </div>
            <Share url={router.asPath} title={event.title} />
            <div className={cn('col-start-2 col-end-13', styles.richText)}>
              <RichText
                render={event.content}
                htmlSerializer={htmlSerializer}
              />
            </div>
            <ButtonLink
              link={event.eventurl.url}
              className="col-start-2 col-end-20 h-18 lg:h-12 mt-10 mb-16 lg:mt-4 lg:mb-4"
            >
              {t('buttons.register')}
            </ButtonLink>
            <EventInfo event={event} />
            {event?.partners?.length > 0 && (
              <Partners partners={event.partners} />
            )}
            {event?.press?.length > 0 && <Press press={event.press} />}
            {otherEvents?.length > 0 && (
              <OtherEvents events={otherEvents} isPastEvent={isPastEvent} />
            )}
          </div>
          <div className="col-span-2 border-l lg:hidden">
            <div className="sticky top-[20rem]">
              <hr className="ml-4" />
              <Link href="/">
                <a className="block pt-2 text-m leading-m font-bold uppercase text-right hover:underline">
                  akfmo
                </a>
              </Link>
            </div>
          </div>
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
