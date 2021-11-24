import Head from 'next/head'
import { useMemo } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useToggle } from 'react-use'

import { EventGrid, Layout, Intro, EventSwitcher } from '../components'
import { getMainPage } from '../lib/api'
import { isPastEvent } from '../lib/utils'

export default function Index({ data }) {
  const { t } = useTranslation('common')
  const [viewAll, toggleViewAll] = useToggle(true)
  const events = useMemo(
    () =>
      data.events
        .map(({ event }) => event)
        .filter((event) => viewAll || isPastEvent(event)),
    [data, viewAll]
  )

  return (
    <Layout className="overflow-hidden lg:overflow-visible" isMain>
      <Head>
        <title>AKFMO</title>
      </Head>
      <Intro about={data.about} />
      <section id="events" className="mt-18 lg:border-t lg:pt-2 lg:mt-0">
        <h2 className="font-bold hidden uppercase text-m leading-ml mb-4 lg:inline-block">
          {t('events')}
        </h2>
        <EventGrid events={events} />
        <EventSwitcher viewAll={viewAll} toggleViewAll={toggleViewAll} />
      </section>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const data = await getMainPage(context.locale)
  return {
    props: { data: data.main },
    revalidate: 60,
  }
}
