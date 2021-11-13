import Image from 'next/image'
import { useState } from 'react'
import { Publication, PublicationMobile } from '.'

export const Publications = ({ publications }) => {
  const [publicationIndex, setPublicationIndex] = useState(0)
  const publication = publications[publicationIndex]

  return (
    <section className="flex pt-4 lg:flex-col lg:border-t lg:mb-6">
      <h1 className="hidden lg:inline-flex items-center justify-center pb-4 border-b font-bold uppercase">
        Publications
      </h1>
      <div className="pr-4 w-1/2 lg:hidden">
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
      <div className="w-1/2 lg:w-full">
        <div className="pl-4 lg:pl-0">
          <div className="border-t lg:border-t-0"></div>
        </div>
        <nav className="pt-4 lg:pt-0">
          <ul className="border-l pl-4 pt-4 lg:border-l-0 lg:p-0">
            {publications.map((item, index) =>
              false ? (
                <Publication
                  setPublicationIndex={setPublicationIndex}
                  index={index}
                  item={item}
                  key={index}
                />
              ) : (
                <PublicationMobile item={item} key={index} />
              )
            )}
          </ul>
        </nav>
      </div>
    </section>
  )
}
