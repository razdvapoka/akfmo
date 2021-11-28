import Head from 'next/head'
import Image from 'next/image'
import { RichText } from 'prismic-reactjs'
import { Layout, SinglePressa } from '../components'
import { getAbout } from '../lib/api'
import styles from './styles.module.scss'
import cn from 'classnames'

const htmlSerializer = function (type, element) {
  switch (type) {
    case 'image':
      return (
        <figure className="w-3/5 lg:w-full">
          <Image
            src={element.url}
            width={element.dimensions.width}
            height={element.dimensions.height}
            layout="responsive"
            alt={element.alt}
          />
        </figure>
      )
    // Return null to stick with the default behavior for all other elements
    default:
      return null
  }
}

const AboutSection = ({ title, content, index }) => {
  return (
    <section className="grid grid-cols-24 pt-2 pb-16 border-t lg:grid-cols-4 lg:pt-4 lg:pb-6">
      <div
        className={cn(
          'col-start-1 col-span-6 text-m leading-m tracking-wider uppercase font-bold lg:col-span-full lg:pb-4',
          { 'lg:text-center lg:mb-6 lg:border-b': index === 0 }
        )}
      >
        <RichText render={title} />
      </div>
      <div
        className={cn(
          'col-start-7 col-end-22 text-xl leading-m tracking-wider font-medium lg:col-span-full lg:text-m lg:leading-ml',
          styles.aboutSectionRichText
        )}
      >
        <RichText render={content} htmlSerializer={htmlSerializer} />
      </div>
    </section>
  )
}

const AboutPressSection = ({ title, items }) => {
  return (
    <section className="grid grid-cols-24 pt-2 pb-16 border-t lg:pb-0 lg:mb-[-1px]">
      <div className="col-start-1 col-span-6 text-m leading-m tracking-wider uppercase font-bold">
        <RichText render={title} />
      </div>
      <div className="col-start-7 col-end-22 pt-8 lg:col-span-full lg:pt-4">
        <ul>
          {items.map((item, index) => (
            <SinglePressa pressa={item.item} key={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}

const SECTION_COMPONENTS = {
  Aboutsection: AboutSection,
  Aboutpresssection: AboutPressSection,
}

export default function About({ data }) {
  return (
    <Layout>
      <Head>
        <title>AKFMO: About</title>
      </Head>
      <div className="mt-2 pb-6 fix-header-about">
        {data?.sections.map(({ section }, index) => {
          const Component = SECTION_COMPONENTS[section.__typename]
          return Component ? (
            <Component key={section._meta.id} index={index} {...section} />
          ) : null
        })}
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const data = await getAbout(context.locale)
  return {
    props: { data: data.about },
    revalidate: 60,
  }
}
