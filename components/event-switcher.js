import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import { useToggle } from 'react-use'

export const EventSwitcher = () => {
  const [viewAll, toggleViewAll] = useToggle(true)
  const { t } = useTranslation('common')

  return (
    <div className="px-4 border-l border-r mt-10 mb-14">
      <button
        onClick={() => toggleViewAll(true)}
        className={cn(
          'font-bold border-b border-black w-full h-[16rem] text-m text-grey2 uppercase',
          viewAll ? 'text-black' : 'text-grey2'
        )}
      >
        {t('switchEvents.all')}
      </button>
      <button
        onClick={() => toggleViewAll(false)}
        className={cn(
          'font-bold w-full h-[16rem] text-m text-grey2 uppercase',
          !viewAll ? 'text-black' : 'text-grey2'
        )}
      >
        {t('switchEvents.past')}
      </button>
    </div>
  )
}
