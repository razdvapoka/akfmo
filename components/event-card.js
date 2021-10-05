import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import Image from 'next/image'
import { Date } from './'

export const EventCard = ({
  _meta: { uid },
  archived,
  description,
  cover,
  date,
  title,
}) => {
  return (
    <Link href={`/events/${uid}`}>
      <a className="block space-y-2">
        <div className="aspect-w-16 aspect-h-9">
          <Image
            alt={`Cover Image for ${title}`}
            src={cover.url}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2>{title}</h2>
        <RichText render={description} />
        <Date className="block" dateString={date} />
        {archived && <div>archived!</div>}
      </a>
    </Link>
  )
}
