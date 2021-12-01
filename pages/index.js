import Head from 'next/head'
import { useMemo } from 'react'
import useTranslation from 'next-translate/useTranslation'

import { EventGrid, Layout, Intro, EventSwitcher } from '../components'
import { getMainPage } from '../lib/api'

export default function Index({ data }) {
  const { t } = useTranslation('common')
  const events = useMemo(() => data.events.map(({ event }) => event), [data])

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
        <EventSwitcher />
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
