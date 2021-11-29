import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import { useInvertedContext } from '../lib/contexts'
import styles from './styles.module.scss'
import { useEventDateString } from '../lib/hooks'
import { useMeasure } from 'react-use'

const getPortraitPaths = (width, height) => {
  return [
    `
      M1,${height / 8}
      L1,1
      L${width - 1},1
      L${width - 1},${(height * 2) / 3}
    `,
    `
      M${(width * 4) / 5},${height - 1}
      L1,${height - 1}
      L1,${height / 2}
    `,
  ]
}

const getLandscapePaths = (width, height) => {
  return [
    `
      M${width / 2},${height - 1}
      L1,${height - 1}
      L1,1
      L${width - 1},1
      L${width - 1},${(height * 7) / 8}
    `,
  ]
}

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

  const [ref, rect] = useMeasure()

  const width = rect.width + 2
  const height = rect.height + 2
  const isLandscape = cover.dimensions.width > cover.dimensions.height

  return (
    <div
      ref={ref}
      className={cn(
        'relative',
        { 'text-white': isInverted },
        styles.eventCard,
        className
      )}
    >
      <Link href={`/events/${uid}`}>
        <a className="block pt-4 pb-6 lg:p-2 relative">
          <svg
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width,
              height,
            }}
            viewBox={`0 0 ${width} ${height}`}
          >
            {(isLandscape ? getLandscapePaths : getPortraitPaths)(
              width,
              height
            ).map((path, index) => {
              return (
                <path d={path} key={index} fill="none" stroke="currentColor" />
              )
            })}
          </svg>
          <div className="pl-5 uppercase font-bold text-m tracking-wider mb-4 lg:mb-2 lg:pl-0 lg:text-xs">
            {location} | {dateString}
          </div>
          <div className="flex lg:flex-col">
            <div
              className={cn(
                'pl-5 lg:w-full lg:pl-0 lg:mb-1',
                isLandscape ? 'w-7/10' : 'w-3/5'
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
        </a>
      </Link>
    </div>
  )
}
