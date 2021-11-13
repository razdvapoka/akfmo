export const EventHeader = ({ title, tags }) => {
  return (
    <header className="font-bold col-start-2 col-end-18">
      <ul className="flex uppercase text-m mb-4">
        {tags.map((tag, index) => (
          <li key={index} className="mr-2 last:mr-0">
            {tag}
          </li>
        ))}
      </ul>
      <h1 className="text-xxl leading-ml">{title}</h1>
    </header>
  )
}
