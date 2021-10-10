import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import { useToggle } from 'react-use'

export const EventSwitcher = () => {
  const [viewAll, toggleViewAll] = useToggle(true)
  const { t } = useTranslation('common')

  return (
    <div className="px-4 w-full border-l border-r mb-[6rem]">
      <button
        onClick={() => toggleViewAll(true)}
        className={cn(
          'font-bold border-b border-black inline-flex w-full h-[16rem] text-m justify-center items-center text-grey2 uppercase',
          {
            'text-black': viewAll,
          }
        )}
      >
        {t('switchEvents.all')}
      </button>
      <button
        onClick={() => toggleViewAll(false)}
        className={cn(
          'font-bold inline-flex w-full h-[16rem] text-[1.6rem] justify-center items-center text-grey2 uppercase',
          {
            'text-black': !viewAll,
          }
        )}
      >
        {t('switchEvents.past')}
      </button>
    </div>
  )
}
