import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import { format } from 'date-fns'
import { useMemo } from 'react'
import { useInvertedContext } from '../lib/contexts'
// import useTranslation from 'next-translate/useTranslation'

export const EventCard = ({
  _meta: { uid, tags },
  cover,
  date,
  title,
  location,
  className,
}) => {
  // const { t } = useTranslation('common')
  const [isInverted] = useInvertedContext()
  const dateString = useMemo(() => format(new Date(date), 'dd.MM.yy'), [date])
  return (
    <Link href={`/events/${uid}`}>
      <a
        className={cn(
          'block pt-4 pb-6',
          isInverted ? 'bg-grey4 text-white' : 'bg-grey1',
          className
        )}
      >
        <div className="pl-5 uppercase font-bold text-m tracking-wider mb-4">
          {location} | {dateString}
        </div>
        <div className="flex">
          <div
            className={cn(
              'pl-5',
              cover.dimensions.width > cover.dimensions.height
                ? 'w-7/10'
                : 'w-3/5'
            )}
          >
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
          <ul className="ml-4 uppercase text-grey2 font-medium text-m tracking-wider space-y-[0.4rem]">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <h3 className="text-xl font-medium leading-ml mt-2 w-4/5 pl-5">
          {title}
        </h3>
      </a>
    </Link>
  )
}
