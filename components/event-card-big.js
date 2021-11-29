import Image from 'next/image'
import cn from 'classnames'
import styles from './styles.module.scss'
import { useEventDateString } from '../lib/hooks'
import { EventLink } from '.'

export const EventCardBig = ({
  _meta: { uid, tags },
  cover,
  date,
  end_date: endDate,
  title,
  location,
  className,
}) => {
  const dateString = useEventDateString(date, endDate)
  const isLandscape = cover.dimensions.width > cover.dimensions.height

  return (
    <EventLink
      href={`/events/${uid}`}
      className={cn(
        'bg-pink py-8 grid grid-cols-24 h-[calc(100vh-4rem)] min-h-[50rem] lg:block lg:h-auto lg:min-h-0 lg:pt-2 lg:pb-8 lg:px-6',
        styles.eventCard,
        className
      )}
    >
      <div className="col-start-2 col-end-15 flex flex-col justify-between lg:block">
        <div className="flex mb-10 lg:mb-0">
          <div className="uppercase font-bold text-m tracking-wider mr-17 lg:mr-0 lg:text-xxs">
            {location} | {dateString}
          </div>
          <ul className="uppercase text-grey2 font-medium text-m tracking-wider flex space-x-4 lg:absolute lg:left-6 lg:bottom-1 lg:flex-wrap lg:space-x-1 lg:mb-1 lg:text-xxs">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block my-2">
          <Image
            className="filter grayscale transition-all"
            alt={cover.alt || title}
            src={cover.url}
            width={cover.dimensions.width}
            height={cover.dimensions.height}
            layout="responsive"
          />
        </div>
        <h3 className="text-xxl font-medium leading-ml lg:text-ml">{title}</h3>
      </div>
      <div className="col-start-17 col-end-24 relative lg:hidden">
        <Image
          className={cn(
            'filter grayscale transition-all',
            styles.eventCardImage
          )}
          alt={cover.alt || title}
          src={cover.url}
          width={cover.dimensions.width}
          height={cover.dimensions.height}
          layout="fill"
          {...(isLandscape
            ? {
                objectFit: 'contain',
                objectPosition: 'bottom',
              }
            : {
                objectFit: 'cover',
                objectPosition: 'center',
              })}
        />
      </div>
    </EventLink>
  )
}
