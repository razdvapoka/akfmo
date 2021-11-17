import Head from 'next/head'
import { useMemo } from 'react'
import { EventGrid, Layout, Intro, EventSwitcher } from '../components'
import { getMainPage } from '../lib/api'
import { repeat } from '../lib/utils'
import useTranslation from 'next-translate/useTranslation'

export default function Index({ data }) {
  const { t } = useTranslation('common')
  const events = useMemo(
    () =>
      repeat(
        5,
        data.events.map(({ event }) => event)
      ).flat(),
    [data]
  )

  return (
    <Layout className="overflow-hidden lg:overflow-visible">
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
