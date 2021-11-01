import Head from 'next/head'
import { useMemo } from 'react'
import { repeat } from '../lib/utils'
import { getMainPage } from '../lib/api'
import { Layout, Publication } from '../components'

export default function Events({ data }) {
  const publications = useMemo(
    () =>
      repeat(
        10,
        data.publications.map(({ publication }) => publication)
      )
        .flat()
        .map((p, i) => ({
          ...p,
          title: `${p.title}—(${i + 1})`,
          year: p.year + i,
        })),
    [data]
  )

  console.log(publications)

  return (
    <Layout>
      <Head>
        <title>AKFMO Publications</title>
      </Head>

      <Publication publications={publications}></Publication>
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
