import Link from 'next/link'
import Image from 'next/image'
import homeIntroImage from '../../assets/images/home-intro.jpg'
import styles from './styles.module.scss'
import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'

export const Intro = () => {
  const { t } = useTranslation('common')
  return (
    <section className="flex min-h-[24rem] mb-16">
      <div className="w-1/2 border-r pr-4">
        <div className="h-full flex flex-col justify-between border-t pt-4">
          <h2 className="w-5/6 uppercase text-m font-bold leading-ml">
            {t('introText')}
          </h2>
          <Link href="/">
            <a
              className={cn(
                'transform translate-y-3/4 flex justify-between items-center',
                styles.learnMoreLink
              )}
            >
              <span
                className={cn(
                  'uppercase text-m font-bold leading-ml',
                  styles.learnMoreLinkText
                )}
              >
                {t('introLinkText')}
              </span>
              <span className="text-m font-bold leading-m transform translate-x-2">
                →
              </span>
            </a>
          </Link>
        </div>
      </div>
      <div className="w-1/2 pl-4">
        <div className="h-full border-t flex justify-center items-end">
          <div className="w-1/2 tranform translate-y-2">
            <Image
              src={homeIntroImage}
              alt={t('introImageAltText')}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
