import useTranslation from 'next-translate/useTranslation'
import { SinglePartner } from '.'

export const Partners = ({ partners }) => {
  const { t } = useTranslation('common')

  return (
    <section className="border-t mb-16 pt-2">
      <h2 className="font-bold uppercase text-m leading-l mb-10">
        {t('partners.title')}
      </h2>
      <ul className="space-y-4">
        {partners.map((item, index) => (
          <SinglePartner partner={item.item} key={index} />
        ))}
      </ul>
    </section>
  )
}
