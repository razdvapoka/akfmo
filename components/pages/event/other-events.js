import cn from 'classnames'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import styles from './styles.module.scss'
import format from 'date-fns/format'
import { repeat } from '../../../lib/utils'
import { useMemo } from 'react'

const OtherEvent = ({ _meta: { uid }, title, date, location, index }) => {
  const dateString = useMemo(() => format(new Date(date), 'dd.MM.yyyy'), [date])
  return (
    <Link href={`/events/${uid}`}>
      <a className={cn('block w-1/2 mb-6', styles.otherEvent)}>
        {index > 1 && <hr className={cn(styles.otherEventSeparator, 'mb-6')} />}
        <div className={cn('', styles.otherEventInnerBox)}>
          <h3 className="text-xl leading-ml tracking-tighter font-medium mb-8">
            {title}
          </h3>
          <div className="text-m leading-m uppercase font-bold tracking-wider">{`${location} | ${dateString}`}</div>
        </div>
      </a>
    </Link>
  )
}

export const OtherEvents = ({ events, isPastEvent }) => {
  const { t } = useTranslation('common')
  const fakeEvents = repeat(4, events).flat()
  return (
    <section className="col-start-2 col-end-20 border-t pt-2 lg:hidden">
      <h2 className="mb-8 text-m leading-m uppercase font-bold tracking-wider">
        {t(isPastEvent ? 'moreEventsPast' : 'moreEventsUpcoming')}
      </h2>
      <div className="flex flex-wrap">
        {fakeEvents.map(({ node }, index) => (
          <OtherEvent
            key={`${node._meta.uid}-${index}`}
            {...node}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
