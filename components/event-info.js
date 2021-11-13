import { format } from 'date-fns'
import { useMemo } from 'react'
import useTranslation from 'next-translate/useTranslation'

export const EventInfoItem = ({ title, children, date }) => {
  return (
    <div className="pl-2 border-l flex flex-col justify-between w-1/3 lg:border-0 lg:w-full lg:pl-0">
      <h2 className="font-bold">{title}</h2>
      {date ? <time dateTime={date}>{children}</time> : <p>{children}</p>}
    </div>
  )
}

export const EventInfo = ({ event }) => {
  const { t } = useTranslation('common')
  const dateString = useMemo(
    () => format(new Date(event.date), 'dd.MM.yy'),
    [event.date]
  )
  return (
    <div
      className={`
        flex lg:flex-col
        col-start-2 col-end-15 
        lg:col-start-1 lg:col-span-full
        h-20 lg:h-auto
        text-m leading-ml uppercase
        mb-16 lg:mb-8
        space-x-2 lg:space-x-0
        lg:space-y-8
        lg:order-6
      `}
    >
      <EventInfoItem title={t('eventInfo.date')} date={event.date}>
        {dateString}
      </EventInfoItem>
      <EventInfoItem title={t('eventInfo.format')}>
        {event.format}
      </EventInfoItem>
      <EventInfoItem title={t('eventInfo.location')}>
        {event.location}
      </EventInfoItem>
    </div>
  )
}
