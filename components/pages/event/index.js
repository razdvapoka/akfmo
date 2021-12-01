import cn from 'classnames'
import { RichText } from 'prismic-reactjs'
import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import ErrorPage from 'next/error'
import {
  ButtonLink,
  PopUpLayout,
  NavigationList,
  LangSwitcher,
} from '../../../components'
import useTranslation from 'next-translate/useTranslation'
import X from '../../../assets/svg/x.svg'
import BigX from '../../../assets/svg/x-big.svg'
import Image from 'next/image'
import styles from './styles.module.scss'
import { OtherEvents } from './other-events'
import { EventHeader } from './event-header'
import { Share } from './share'
import { EventInfo } from './event-info'
import { Partners } from './partners'
import { Press } from './press'
import { isPastEvent } from '../../../lib/utils'
import { usePrevLocationContext } from '../../../lib/contexts'

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
const RegisterButton = ({ url, className, children }) => {
  return (
    <ButtonLink
      link={url}
      className={cn(
        'col-start-2 col-end-18 h-18 lg:h-12 mt-4 lg:mt-0 hover:text-white hover:bg-black transition-colors ease-out',
        className
      )}
    >
      {children}
    </ButtonLink>
  )
}

const Hero = ({ image }) => {
  const isHeroImagePortrait = useMemo(
    () => image.dimensions.width < image.dimensions.height,
    [image]
  )

  return (
    <figure
      className={cn(
        'mb-12 lg:mb-4',
        isHeroImagePortrait ? 'col-start-2 col-end-8' : 'col-start-2 col-end-13'
      )}
    >
      <Image
        src={image.url}
        width={image.dimensions.width}
        height={image.dimensions.height}
        layout="responsive"
        alt={image.alt}
      />
      {image.alt && (
        <figcaption className="text-s leading-m tracking-wide uppercase mt-2">
          {image.alt}
        </figcaption>
      )}
    </figure>
  )
}

const LeftNav = () => {
  return (
    <div className="col-span-3 border-r uppercase text-m leading-m font-bold lg:hidden">
      <div className="sticky top-[20rem]">
        <hr className="mr-4" />
        <nav className="space-y-4 pt-2">
          <NavigationList />
          <LangSwitcher />
        </nav>
      </div>
    </div>
  )
}

const CloseButton = ({ isPast }) => {
  const router = useRouter()
  const [prevLocation] = usePrevLocationContext()
  const goBack = useCallback(() => {
    if (prevLocation) {
      router.push(prevLocation)
    } else {
      router.push(isPast ? '/events/past' : '/events')
    }
  }, [router, prevLocation, isPast])
  return (
    <div className="col-start-16 col-end-18 flex justify-end lg:absolute lg:right-2 lg:top-0">
      <button className="w-9 h-9 lg:hidden" onClick={goBack}>
        <X className="hover:text-white hover:bg-black hover:border-black rounded-full border transition-colors ease-out" />
      </button>
      <button className="w-8 h-8 hidden lg:block" onClick={goBack}>
        <BigX />
      </button>
    </div>
  )
}

const RightNav = () => {
  return (
    <div className="col-span-3 border-l lg:hidden">
      <div className="sticky top-[20rem]">
        <hr className="ml-4" />
        <Link href="/">
          <a className="block pt-2 text-m leading-m font-bold uppercase text-right hover:underline">
            akfmo
          </a>
        </Link>
      </div>
    </div>
  )
}

export const Event = ({ event, events }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const isPast = useMemo(() => (event ? isPastEvent(event) : false), [event])

  const otherEvents = useMemo(
    () =>
      events?.filter(({ node }) =>
        node._meta.uid !== event?._meta?.uid && isPast
          ? isPastEvent(node)
          : !isPastEvent(node)
      ) || [],
    [events, event, isPast]
  )

  const hasPress = event
    ? event.press.filter(({ item }) => item).length > 0
    : false

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
          <LeftNav />
          <div className="col-start-4 col-end-22 grid grid-cols-18 lg:flex lg:flex-col">
            <EventHeader title={event.title} tags={event._meta.tags} />
            <CloseButton isPast={isPast} />
            <Share url={router.asPath} title={event.title} />
            <Hero image={event.cover} />
            {event?.eventurl?.url && (
              <RegisterButton
                className="hidden lg:flex lg:mb-4"
                url={event.eventurl.url}
              >
                {t(isPast ? 'buttons.link' : 'buttons.register')}
              </RegisterButton>
            )}
            <div className={cn('col-start-2 col-end-13', styles.richText)}>
              <RichText
                render={event.content}
                htmlSerializer={htmlSerializer}
              />
            </div>
            {event?.eventurl?.url && (
              <RegisterButton
                className="flex lg:hidden"
                url={event.eventurl.url}
              >
                {t(isPast ? 'buttons.link' : 'buttons.register')}
              </RegisterButton>
            )}
            <EventInfo key="event-info-mob" event={event} />
            {event?.partners?.length > 0 && (
              <Partners partners={event.partners} />
            )}
            {hasPress && <Press press={event.press} />}
            {otherEvents?.length > 0 && (
              <OtherEvents events={otherEvents} isPastEvent={isPast} />
            )}
          </div>
          <RightNav />
        </article>
      )}
    </PopUpLayout>
  )
}
