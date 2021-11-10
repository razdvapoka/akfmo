export const EventHeader = ({ title, tags }) => {
  return (
    <header className="font-bold lg:mb-4 lg:order-1">
      <ul className="flex uppercase text-m space-x-4 mb-4 lg:flex-col lg:space-x-0 lg:space-y-2">
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <h1 className="text-xxl leading-ml w-5/6 lg:text-mx">{title}</h1>
    </header>
  )
}
