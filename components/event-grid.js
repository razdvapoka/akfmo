import { EventCard, EventCardBig } from './'
import cn from 'classnames'

const getColStart = (index) => {
  const remainder = (index + 1) % 3
  return remainder === 0 ? 'col-start-8' : remainder === 2 ? 'col-start-14' : ''
}

export const EventGrid = ({ events }) => {
  return (
    <div className="grid grid-cols-24 gap-y-16 items-center">
      {events.map((event, index) =>
        (index + 1) % 6 === 0 ? (
          <EventCardBig
            key={`${event._meta.uid}-${index}`}
            className="col-span-full w-screen transform -translate-x-4"
            {...event}
          />
        ) : (
          <EventCard
            key={`${event._meta.uid}-${index}`}
            className={cn('col-span-10', getColStart(index))}
            {...event}
          />
        )
      )}
    </div>
  )
}
