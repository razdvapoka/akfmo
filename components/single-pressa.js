import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { RichText } from 'prismic-reactjs'

export const SinglePressa = ({ pressa }) => {
  const { t } = useTranslation('common')
  return (
    <li className="py-4 border-b uppercase font-bold mb-6">
      <Link href={pressa.url.url}>
        <a
          className="flex cursor-pointer hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-between w-full">
            {RichText.render(pressa.title)}
            <span>{t('buttons.openPdf')}</span>
          </div>
        </a>
      </Link>
    </li>
  )
}
