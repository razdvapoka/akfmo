export const range = (length) => Array.from(Array(length).keys())
export const repeat = (times, value) => range(times).map(() => value)
