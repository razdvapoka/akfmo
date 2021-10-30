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
      <a className={cn('bg-pink py-8 grid grid-cols-24', className)}>
        <div className="col-start-5 col-end-20 uppercase font-bold text-m tracking-wider mb-4">
          {location} | {dateString}
        </div>
        <div className="flex col-start-5 col-end-22">
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
          <ul className="ml-4 uppercase text-grey2 font-bold text-m tracking-wider space-y-[0.4rem]">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <h3 className="text-xl font-medium leading-ml mt-2 col-span-11 col-start-5">
          {title}
        </h3>
      </a>
    </Link>
  )
}
