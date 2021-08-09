import EventCard from './event-card'

export default function EventGrid({ events }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      {events.map((event) => (
        <EventCard key={event._meta.uid} {...event} />
      ))}
    </div>
  )
}
