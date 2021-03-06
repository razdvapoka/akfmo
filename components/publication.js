import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export const Publication = ({ setPublicationIndex, index, item }) => {
  const { t } = useTranslation('common')
  const handleMouseEnter = () => {
    setPublicationIndex(index)
  }
  return (
    <li
      className="border-b uppercase font-bold mb-8 lg:hidden underline-hover"
      onMouseEnter={handleMouseEnter}
    >
      <Link
        href={
          item.externallink
            ? item.externallink.url
            : item.file
            ? item.file.url
            : ''
        }
      >
        <a
          className="flex cursor-pointer py-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <time className="w-1/6" dateTime={item.year}>
            {item.year}
          </time>
          <div className="w-5/6 flex justify-between">
            <h2 className="mr-10">{item.title}</h2>
            <span className="lg:w-1/4 lg:text-right whitespace-nowrap">
              <span className="lg:hidden">{t('buttons.openPdf')}</span> ↓
            </span>
          </div>
        </a>
      </Link>
    </li>
  )
}
