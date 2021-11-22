import { useMemo } from 'react'
import { format } from 'date-fns'

export const useEventDateString = (date, endDate) => {
  const dateString = useMemo(
    () =>
      `${format(new Date(date), 'dd.MM.yy')}${
        endDate ? `–${format(new Date(endDate), 'dd.MM.yy')}` : ''
      }`,
    [date, endDate]
  )
  return dateString
}
