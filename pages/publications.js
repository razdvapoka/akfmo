import Head from 'next/head'
import { getPublications } from '../lib/api'
import { Layout, Publications } from '../components'

export default function PublicationsPage({ data }) {
  return (
    <Layout>
      <Head>
        <title>AKFMO Publications</title>
      </Head>

      <Publications publications={data}></Publications>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const data = await getPublications(context.locale)
  console.log(data.publications_page.publications)
  return {
    props: {
      data: data.publications_page.publications.map(
        ({ publication }) => publication
      ),
    },
    revalidate: 60,
  }
}
