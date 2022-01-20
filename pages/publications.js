import Head from 'next/head'
import { getPublications } from '../lib/api'
import { Layout, Publications } from '../components'
import { useMemo } from 'react'

export default function PublicationsPage({ data }) {
  const publications = useMemo(
    () => data.sort((p1, p2) => (p1.year < p2.year ? 1 : -1)),
    [data]
  )
  return (
    <Layout>
      <Head>
        <title>AKFMO: Publications</title>
      </Head>

      <Publications publications={publications}></Publications>
    </Layout>
  )
}

const isEmpty = (obj) => Object.keys(obj).length === 0

export async function getStaticProps(context) {
  const data = await getPublications(context.locale)
  return {
    props: {
      data: data.publications_page.publications
        .map(({ publication }) => publication)
        .filter((publication) => !isEmpty(publication)),
    },
    revalidate: 60,
  }
}
