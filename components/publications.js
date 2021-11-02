import Image from 'next/image'
import { useState } from 'react'
import { Publication } from '.'

export const Publications = ({ publications }) => {
  const [publicationIndex, setPublicationIndex] = useState(0)
  const publication = publications[publicationIndex]

  return (
    <section className="flex pt-4">
      <div className="pr-4 w-1/2">
        <div className="py-4 border-t h-full">
          <div className="w-2/3 mx-auto sticky top-4">
            <Image
              src={publication.cover.url}
              alt={publication.title}
              layout="responsive"
              width={publication.cover.dimensions.width}
              height={publication.cover.dimensions.height}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="pl-4">
          <div className="border-t"></div>
        </div>
        <nav className="pt-4">
          <ul className="border-l pl-4 pt-4">
            {publications.map((item, index) => (
              <Publication
                setPublicationIndex={setPublicationIndex}
                index={index}
                item={item}
                key={index}
              />
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
