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
        'border-t border-b flex py-2 mt-2 lg:mt-0 text-m leading-m font-bold tracking-wider uppercase',
        { 'text-white': isInverted }
      )}
    >
      <Link href="/events/upcoming">
        <a className="flex items-center justify-center w-1/2 hover:underline py-5 lg:py-2 border-r">
          <span className="lg:hidden">{t('eventsUpcoming')}</span>
          <span className="hidden lg:inline">{t('eventsUpcomingShort')}</span>
        </a>
      </Link>
      <Link href="/events/past">
        <a className="flex items-center justify-center w-1/2 hover:underline py-5 lg:py-2">
          <span className="lg:hidden">{t('eventsPast')}</span>
          <span className="hidden lg:inline">{t('eventsPastShort')}</span>
        </a>
      </Link>
    </div>
  )
}

export const Events = ({ events, isInverted }) => {
  const { t } = useTranslation('common')
  return (
    <Layout isInverted={isInverted}>
      <Head>
        <title>AKFMO: Events</title>
      </Head>
      <div
        className={cn(
          'hidden lg:block border-t font-bold text-center py-4 uppercase text-m leading-m tracking-wider',
          { 'text-white': isInverted }
        )}
      >
        {t('events')}
      </div>
      <Switcher />
      <div className="pt-20 pb-12 lg:pt-6 lg:pb-6">
        <EventGrid events={events} />
      </div>
    </Layout>
  )
}
