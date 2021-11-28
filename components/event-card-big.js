import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import styles from './styles.module.scss'
import { useEventDateString } from '../lib/hooks'
import { useEffect, useState } from 'react'

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
  const [imageHeight, setImageHeight] = useState(0)

  useEffect(() => {
    if (
      document.documentElement.clientWidth > 1023 &&
      cover.dimensions.height > cover.dimensions.width &&
      cover.dimensions.height / cover.dimensions.width >
        document.documentElement.clientWidth /
          document.documentElement.clientHeight
    ) {
      const h =
        cover.dimensions.width *
        ((document.documentElement.clientHeight - 100) / cover.dimensions.width)

      setImageHeight(h)
    } else {
      setImageHeight(cover.dimensions.height)
    }
  }, [setImageHeight])

  return (
    <Link href={`/events/${uid}`}>
      <a
        className={cn(
          'bg-pink py-8 grid grid-cols-24 lg:grid-cols-4 lg:py-2 lg:px-6 lg:relative px-4',
          styles.eventCard,
          className
        )}
      >
        <div className="col-start-2 col-end-7 uppercase font-bold text-m tracking-wider mb-4 lg:col-start-1 lg:col-span-full lg:mb-2 lg:text-xs">
          {location} | {dateString}
        </div>
        <ul className="ml-4 uppercase text-grey2 font-medium text-m tracking-wider flex space-x-1 lg:absolute lg:bottom-2 lg:left-6 lg:text-xs lg:w-[calc(100vw-12rem)] lg:ml-0">
          {tags.map((tag) => (
            <li key={tag} className="whitespace-nowrap lg:whitespace-normal">
              {tag}
            </li>
          ))}
        </ul>
        <div
          className={cn(
            'flex col-start-18 col-end-24 lg:col-start-1 lg:col-span-full lg:flex-col lg:mb-1 relative max-h-[calc(100vh-8rem)] ',
            cover.dimensions.width > cover.dimensions.height
              ? 'row-span-1'
              : 'row-span-2'
          )}
        >
          <div className="w-full ">
            <Image
              className={cn(
                'filter grayscale transition-all',
                styles.eventCardImage
              )}
              alt={cover.alt || title}
              src={cover.url}
              width={cover.dimensions.width}
              height={imageHeight}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <h3 className="text-xl font-medium leading-ml mt-auto col-start-2 col-end-16 lg:col-start-1 lg:col-span-full lg:w-full lg:p-0 lg:text-ml lg:pr-4 lg:pb-6 lg:mt-0">
          {title}
        </h3>
      </a>
    </Link>
  )
}
