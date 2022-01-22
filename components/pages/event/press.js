import useTranslation from 'next-translate/useTranslation'
import { SinglePressa } from '../../'

export const Press = ({ press }) => {
  const { t } = useTranslation('common')
  return (
    <section className="border-t mb-12 pt-2 col-start-2 col-end-18 lg:mb-0">
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
