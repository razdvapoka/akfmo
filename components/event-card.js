import Image from 'next/image'
import cn from 'classnames'
import { useInvertedContext } from '../lib/contexts'
import styles from './styles.module.scss'
import { useEventDateString } from '../lib/hooks'
import { EventLink } from '.'

export const EventCard = ({
  _meta: { uid, tags },
  cover,
  date,
  title,
  location,
  className,
  end_date: endDate,
}) => {
  const [isInverted] = useInvertedContext()
  const dateString = useEventDateString(date, endDate)
  return (
    <EventLink
      href={`/events/${uid}`}
      className={cn(
        'block pt-4 pb-6 lg:p-2 lg:relative ',
        isInverted ? 'bg-grey4 text-white' : 'bg-grey1',
        styles.eventCard,
        className
      )}
    >
      <div className="pl-5 uppercase font-bold text-m tracking-wider mb-4 lg:mb-2 lg:pl-0 lg:text-xs">
        {location} | {dateString}
      </div>
      <div className="flex lg:flex-col">
        <div
          className={cn(
            'pl-5 lg:w-full lg:pl-0 lg:mb-1',
            cover.dimensions.width > cover.dimensions.height
              ? 'w-7/10'
              : 'w-3/5'
          )}
        >
          <Image
            className={cn(
              'filter grayscale transition-all ease-out duration-300',
              styles.eventCardImage
            )}
            alt={cover.alt || title}
            src={cover.url}
            layout="responsive"
            objectFit="cover"
            width={cover.dimensions.width}
            height={cover.dimensions.height}
          />
        </div>
        <ul className="ml-4 uppercase text-grey2 font-medium text-m tracking-wider space-y-[0.4rem] lg:ml-0 lg:flex lg:space-y-0 lg:space-x-1 lg:absolute lg:bottom-2 lg:text-xs">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <h3 className="text-xl font-medium leading-ml mt-2 w-4/5 pl-5 lg:w-full lg:p-0 lg:pr-4 lg:pb-6 lg:mt-0 lg:text-ml">
        {title}
      </h3>
    </EventLink>
  )
}
