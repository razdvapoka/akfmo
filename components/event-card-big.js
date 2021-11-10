import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import { format } from 'date-fns'
import { useMemo } from 'react'

export const EventCardBig = ({
  _meta: { uid, tags },
  cover,
  date,
  title,
  location,
  className,
}) => {
  const dateString = useMemo(() => format(new Date(date), 'dd.MM.yy'), [date])
  return (
    <Link href={`/events/${uid}`}>
      <a
        className={cn(
          'bg-pink py-8 grid grid-cols-24 lg:grid-cols-4 lg:py-2 lg:px-6 lg:relative',
          className
        )}
      >
        <div className="col-start-5 col-end-20 uppercase font-bold text-m tracking-wider mb-4 lg:col-start-1 lg:col-span-full lg:mb-2 lg:text-xs">
          {location} | {dateString}
        </div>
        <div className="flex col-start-5 col-end-22 lg:col-start-1 lg:col-span-full lg:flex-col lg:mb-1">
          <div className="w-full">
            <Image
              className="filter grayscale"
              alt={cover.alt || title}
              src={cover.url}
              layout="responsive"
              objectFit="cover"
              width={cover.dimensions.width}
              height={cover.dimensions.height}
            />
          </div>
          <ul className="ml-4 uppercase text-grey2 font-bold text-m tracking-wider space-y-[0.4rem] lg:flex lg:space-y-0 lg:space-x-1 lg:absolute lg:bottom-2 lg:text-xs lg:ml-0">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <h3 className="text-xl font-medium leading-ml mt-2 col-span-11 col-start-5 lg:col-start-1 lg:col-span-full lg:w-full lg:p-0 lg:text-ml lg:pr-4 lg:pb-6 lg:mt-0">
          {title}
        </h3>
      </a>
    </Link>
  )
}
