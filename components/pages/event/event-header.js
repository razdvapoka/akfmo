import { useTp } from '../../../lib/tp'

export const EventHeader = ({ title, tags }) => {
  const titleTp = useTp(title)
  return (
    <header className="font-bold col-start-2 col-end-16 lg:mb-0">
      <ul className="flex uppercase text-m space-x-4 mb-4 lg:flex-col lg:space-x-0 lg:space-y-1">
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <h1
        className="text-xxl leading-ml lg:text-mx"
        dangerouslySetInnerHTML={{ __html: titleTp }}
      />
    </header>
  )
}
