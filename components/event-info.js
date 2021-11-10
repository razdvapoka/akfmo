import { format } from 'date-fns'
import { useMemo } from 'react'
import useTranslation from 'next-translate/useTranslation'

export const EventInfo = ({ event }) => {
  const { t } = useTranslation('common')
  const dateString = useMemo(
    () => format(new Date(event.date), 'dd.MM.yy'),
    [event.date]
  )
  return (
    <div className="flex h-20 text-m leading-ml uppercase mb-16 space-x-2 w-7/10 lg:space-x-0 lg:space-y-8 lg:flex-col lg:h-auto lg:mb-8 lg:order-6">
      <div className="pl-2 border-l flex flex-col justify-between w-1/3 lg:border-0 lg:w-full lg:pl-0">
        <h2 className="font-bold"> {t('eventInfo.date')}</h2>
        <time dateTime={event.date}>{dateString}</time>
      </div>
      <div className="pl-2 border-l flex flex-col justify-between w-1/3 lg:border-0  lg:w-full lg:pl-0">
        <h2 className="font-bold">{t('eventInfo.format')}</h2>
        <p>{event.format}</p>
      </div>
      <div className="pl-2 border-l flex flex-col justify-between w-1/3 lg:border-0  lg:w-full lg:pl-0">
        <h2 className="font-bold">{t('eventInfo.location')}</h2>
        <p>{event.location}</p>
      </div>
    </div>
  )
}
