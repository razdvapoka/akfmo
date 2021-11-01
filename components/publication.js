import Link from 'next/link'

export const Publication = ({ setPublicationIndex, index, item }) => {
  const handleMouseEnter = () => {
    setPublicationIndex(index)
  }

  return (
    <li
      className="py-4 border-b uppercase font-bold mb-8"
      onMouseEnter={handleMouseEnter}
    >
      <Link href={item.file.url}>
        <a
          className="flex cursor-pointer hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <time className="w-1/6" dateTime={item.year}>
            {item.year}
          </time>
          <h2 className="w-5/6 mr-auto flex justify-between">
            {item.title}
            <span>open PDF ↓</span>
          </h2>
        </a>
      </Link>
    </li>
  )
}
