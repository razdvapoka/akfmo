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
const RegisterButton = ({ url, className }) => {
  const { t } = useTranslation('common')
  return (
    <ButtonLink
      link={url}
      className={cn(
        'col-start-2 col-end-20 h-18 lg:h-12 mt-4 lg:mt-0',
        className
      )}
    >
      {t('buttons.register')}
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
        isHeroImagePortrait ? 'col-start-2 col-end-9' : 'col-start-2 col-end-13'
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
    <div className="col-span-2 border-r uppercase text-m leading-m font-bold lg:hidden">
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

const CloseButton = () => {
  const router = useRouter()
  const goBack = useCallback(() => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      router.push('/')
    }
  }, [router])
  return (
    <div className="col-start-19 col-end-20 flex justify-end lg:absolute lg:right-2 lg:top-0">
      <button className="w-9 h-9 lg:hidden" onClick={goBack}>
        <X />
      </button>
      <button className="w-8 h-8 hidden lg:block" onClick={goBack}>
        <BigX />
      </button>
    </div>
  )
}

const RightNav = () => {
  return (
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
  )
}

export const Event = ({ event, events }) => {
  const router = useRouter()

  const isPast = useMemo(() => isPastEvent(event), [event])

  const otherEvents = useMemo(
    () =>
      events?.filter(({ node }) =>
        node._meta.uid !== event?._meta?.uid && isPast
          ? new Date(node.date) < new Date()
          : new Date(node.date) >= new Date()
      ) || [],
    [events, event, isPast]
  )

  if (!router.isFallback && !event?._meta?.uid) {
    return <ErrorPage statusCode={404} />
  }
  const hasPress = event.press.filter(({ item }) => item).length > 0

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
          <div className="col-start-3 col-end-23 grid grid-cols-20 lg:flex lg:flex-col">
            <EventHeader title={event.title} tags={event._meta.tags} />
            <CloseButton />
            <Share url={router.asPath} title={event.title} />
            <Hero image={event.cover} />
            {!isPast && (
              <RegisterButton
                className="hidden lg:flex lg:mb-4"
                url={event.eventurl.url}
              />
            )}
            <div className={cn('col-start-2 col-end-13', styles.richText)}>
              <RichText
                render={event.content}
                htmlSerializer={htmlSerializer}
              />
            </div>
            {!isPast && (
              <RegisterButton
                className="flex lg:hidden"
                url={event.eventurl.url}
              />
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
