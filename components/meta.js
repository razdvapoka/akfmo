import Head from 'next/head'

export const Meta = () => {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon/favicon.png" />
      <title>AKFMO</title>
      <meta property="og:title" content="AKFMO" />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}images/meta.png`}
      />
    </Head>
  )
}
