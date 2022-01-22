import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { RichText } from 'prismic-reactjs'

export const SinglePressa = ({ pressa }) => {
  const { t } = useTranslation('common')
  return (
    <li className="py-4 border-b uppercase font-bold mb-6 lg:mb-2 lg:pt-2 lg:pb-2 lg:last-of-type:pb-6 lg:last-of-type:mb-0">
      <Link href={pressa.url.url}>
        <a
          className="flex cursor-pointer hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-between w-full">
            {RichText.render(pressa.title)}
            <span className="lg:w-1/4 lg:text-right">
              <span className="lg:hidden">{t('buttons.open')}</span> ↓
            </span>
          </div>
        </a>
      </Link>
    </li>
  )
}
