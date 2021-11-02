import Head from 'next/head'
import { useMemo } from 'react'
import { repeat } from '../lib/utils'
import { getPublications } from '../lib/api'
import { Layout, Publications } from '../components'

export default function PublicationsPage({ data }) {
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

  return (
    <Layout>
      <Head>
        <title>AKFMO Publications</title>
      </Head>

      <Publications publications={publications}></Publications>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const data = await getPublications(context.locale)
  return {
    props: { data: data.main },
    revalidate: 60,
  }
}
