import { EventCard, EventCardBig } from './'
import cn from 'classnames'
import { useMemo } from 'react'

const getColStart = (index) => {
  const remainder = (index + 1) % 3
  return remainder === 0
    ? 'col-start-8'
    : remainder === 2
    ? 'col-start-14'
    : 'col-start-2'
}

export const EventGrid = ({ events }) => {
  const sortedEvents = useMemo(
    () => events.sort((event1, event2) => (event1.date < event2.date ? 1 : -1)),
    [events]
  )
  return (
    <div className="grid grid-cols-24 gap-y-16 items-center lg:gap-y-6">
      {sortedEvents.map((event, index) =>
        (index + 1) % 6 === 0 ? (
          <EventCardBig
            key={`${event._meta.uid}-${index}`}
            className="col-span-full w-screen transform -translate-x-4"
            {...event}
          />
        ) : (
          <EventCard
            key={`${event._meta.uid}-${index}`}
            className={cn(
              'col-span-10 lg:col-span-full lg:col-start-1',
              getColStart(index)
            )}
            {...event}
          />
        )
      )}
    </div>
  )
}
