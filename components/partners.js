import useTranslation from 'next-translate/useTranslation'
import { SinglePartner } from '.'

export const Partners = ({ partners }) => {
  const { t } = useTranslation('common')

  return (
    <section className="border-t mb-16 pt-2 col-start-2 col-end-20 lg:mt-4 lg:mb-4">
      <h2 className="font-bold uppercase text-m leading-l mb-10 lg:mb-6">
        {t('partners.title')}
      </h2>
      <ul className="space-y-4 lg:space-y-6">
        {partners.map((item, index) => (
          <SinglePartner partner={item.item} key={index} />
        ))}
      </ul>
    </section>
  )
}
