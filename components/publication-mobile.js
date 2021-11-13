import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

export const PublicationMobile = ({ item }) => {
  const { t } = useTranslation('common')

  return (
    <li className="pt-6 uppercase font-bold mb-4 hidden lg:block">
      <header className="pb-2 border-b">
        <time dateTime={item.year}>[ {item.year} ]</time>
        <h2 className="w-3/4">{item.title}</h2>
      </header>
      <div className="py-4">
        <div className="w-2/3 mx-auto">
          <Image
            src={item.cover.url}
            alt={item.title}
            layout="responsive"
            width={item.cover.dimensions.width}
            height={item.cover.dimensions.height}
            objectFit="cover"
          />
        </div>
      </div>
      <Link href={item.file.url}>
        <a
          className="flex cursor-pointer py-3 border justify-center rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('buttons.openPdf')}
        </a>
      </Link>
    </li>
  )
}
