import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export const Publication = ({ setPublicationIndex, index, item }) => {
  const { t } = useTranslation('common')
  const handleMouseEnter = () => {
    setPublicationIndex(index)
  }

  return (
    <li
      className="py-4 border-b uppercase font-bold mb-8 lg:hidden"
      onMouseEnter={handleMouseEnter}
    >
      <Link href={item.file.url}>
        <a
          className="flex cursor-pointer hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <time className="w-1/6" dateTime={item.year}>
            {item.year}
          </time>
          <div className="w-5/6 flex justify-between">
            <h2>{item.title}</h2>
            <span>{t('buttons.openPdf')}</span>
          </div>
        </a>
      </Link>
    </li>
  )
}
