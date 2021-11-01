import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const Publication = ({ publications }) => {
  const [imageIndex, setImageIndex] = useState(0)

  const changeImage = (index) => {
    setImageIndex(index)
  }

  return (
    <section className="flex pt-4">
      <div className="pr-4 w-1/2 relative">
        <div className="pt-4 border-t h-full min-h-2">
          <div className="w-2/3 mx-auto sticky top-4">
            <Image
              src={publications[imageIndex].cover.url}
              alt={publications[imageIndex].title}
              layout="responsive"
              width={912}
              height={1362}
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
              <li
                className="py-4 border-b mb-8 uppercase font-bold last:mb-0"
                key={index}
                onMouseEnter={() => changeImage(index)}
              >
                <Link href={item.file.url}>
                  <a
                    className="flex cursor-pointer hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <time className="w-[3.5rem]" dateTime={item.year}>
                      {item.year}
                    </time>
                    <h2 className="w-[40rem] ml-12 mr-auto">{item.title}</h2>
                    <span>open PDF ↓</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
