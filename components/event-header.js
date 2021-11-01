export const EventHeader = ({ title, tags }) => {
  return (
    <header className="font-bold">
      <ul className="flex uppercase text-m">
        {tags.map((tag, index) => (
          <li key={index} className="mr-2 last:mr-0">
            {tag}
          </li>
        ))}
      </ul>
      <h1 className="text-xxl leading-ml w-5/6">{title}</h1>
    </header>
  )
}
