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
    <div className="flex h-20 text-m leading-ml uppercase mb-16">
      <div className="pl-2 border-l flex flex-col justify-between w-[24rem]">
        <h2 className="font-bold"> {t('eventInfo.date')}</h2>
        <time dateTime={event.date}>{dateString}</time>
      </div>
      <div className="ml-2 pl-2 border-l flex flex-col justify-between w-[24rem]">
        <h2 className="font-bold">{t('eventInfo.format')}</h2>
        <p>{event.format || 'in development'}</p>
      </div>
      <div className="ml-2 pl-2 border-l flex flex-col justify-between w-[24rem]">
        <h2 className="font-bold">{t('eventInfo.location')}</h2>
        <p>{event.location}</p>
      </div>
    </div>
  )
}
