import Link from 'next/link'
import Image from 'next/image'
import homeIntroImage from '../../assets/images/home-intro.jpg'
import styles from './styles.module.scss'
import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import { RichText } from 'prismic-reactjs'

export const Intro = ({ about }) => {
  const { t } = useTranslation('common')
  return (
    <section className="flex min-h-[24rem] mb-16 lg:min-h-0 lg:mb-8">
      <div className="w-1/2 border-r pr-4 lg:w-full lg:border-r-0 lg:pr-0">
        <div className="h-full flex flex-col justify-between border-t pt-4 lg:pt-2">
          <div className="w-5/6 uppercase text-m font-bold leading-ml lg:w-full lg:mb-4">
            <RichText render={about} />
          </div>
          <Link href="/">
            <a
              className={cn(
                'transform translate-y-3/4 flex justify-between items-center lg:translate-y-0',
                styles.learnMoreLink
              )}
            >
              <span
                className={cn(
                  'uppercase text-m font-bold leading-ml',
                  styles.learnMoreLinkText
                )}
              >
                {t('intro.linkText')}
              </span>
              <span className="text-m font-bold leading-m transform translate-x-2">
                →
              </span>
            </a>
          </Link>
        </div>
      </div>
      <div className="w-1/2 pl-4 lg:hidden">
        <div className="h-full border-t flex justify-center items-end">
          <div className="w-1/2 tranform translate-y-2">
            <Image
              src={homeIntroImage}
              alt={t('intro.imageAltText')}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
