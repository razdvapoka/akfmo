import useTranslation from 'next-translate/useTranslation'
import { SinglePressa } from '.'

export const Press = ({ press }) => {
  const { t } = useTranslation('common')
  return (
    <section className="border-t mb-16 pt-2 lg:order-8">
      <h2 className="font-bold uppercase text-m leading-l mb-10 lg:mb-4">
        {t('press.title')}
      </h2>
      <ul>
        {press.map((item, index) => (
          <SinglePressa pressa={item.item} key={index} />
        ))}
      </ul>
    </section>
  )
}
