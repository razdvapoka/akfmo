import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { EventGrid, Layout } from '../'
import Link from 'next/link'
import { useInvertedContext } from '../../lib/contexts'

const Switcher = () => {
  const [isInverted] = useInvertedContext()
  const { t } = useTranslation('common')
  return (
    <div
      className={cn(
        'border-t border-b flex py-2 mt-2 text-m leading-m font-bold tracking-wider uppercase',
        { 'text-white': isInverted }
      )}
    >
      <Link href="/events/past">
        <a className="flex items-center justify-center w-1/2 hover:underline py-5 border-r">
          {t('eventsPast')}
        </a>
      </Link>
      <Link href="/events/upcoming">
        <a className="flex items-center justify-center w-1/2 hover:underline py-5">
          {t('eventsUpcoming')}
        </a>
      </Link>
    </div>
  )
}

export const Events = ({ events, isInverted }) => {
  return (
    <Layout isInverted={isInverted}>
      <Head>
        <title>AKFMO: Events</title>
      </Head>
      <Switcher />
      <div className="pt-20 pb-12">
        <EventGrid events={events} />
      </div>
    </Layout>
  )
}
