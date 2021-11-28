export const range = (length) => Array.from(Array(length).keys())
export const repeat = (times, value) => range(times).map(() => value)

export const isPastEvent = (event) =>
  event.end_date
    ? new Date(event.end_date) < new Date()
    : new Date(event.date) < new Date()

export const not = (fn) => (args) => !fn(args)
