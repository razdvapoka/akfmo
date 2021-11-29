import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import styles from './styles.module.scss'
import { useEventDateString } from '../../../lib/hooks'
import { EventLink } from '../..'

const OtherEvent = ({
  _meta: { uid },
  title,
  date,
  end_date: endDate,
  location,
  index,
}) => {
  const dateString = useEventDateString(date, endDate)
  return (
    <EventLink
      href={`/events/${uid}`}
      className={cn('block w-1/2 mb-6 lg:min-w-[75%]', styles.otherEvent)}
    >
      {index > 1 && (
        <hr className={cn(styles.otherEventSeparator, 'mb-6 lg:mb-0')} />
      )}
      <div className={cn('', styles.otherEventInnerBox)}>
        <h3 className="text-xl leading-ml tracking-tighter font-medium mb-8 lg:text-mx">
          {title}
        </h3>
        <div className="text-m leading-m uppercase font-bold tracking-wider">{`${location} | ${dateString}`}</div>
      </div>
    </EventLink>
  )
}

export const OtherEvents = ({ events, isPastEvent }) => {
  const { t } = useTranslation('common')
  return (
    <section className="col-start-2 col-end-18 border-t pt-2 lg:w-screen lg:transform lg:translate-x-[-2rem] lg:bg-white lg:border-t-0">
      <h2 className="mb-8 lg:mb-6 text-m leading-m uppercase font-bold tracking-wider lg:ml-4">
        {t(isPastEvent ? 'moreEventsPast' : 'moreEventsUpcoming')}
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap lg:overflow-auto">
        {events.map(({ node }, index) => (
          <OtherEvent key={node._meta.uid} {...node} index={index} />
        ))}
      </div>
    </section>
  )
}
