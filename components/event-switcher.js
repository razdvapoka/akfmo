import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

export const EventSwitcher = () => {
  const { t } = useTranslation('common')

  return (
    <div className="px-4 border-l border-r mt-10 mb-14 lg:my-4">
      <Link href="/events">
        <a className="flex justify-center items-center font-bold border-b w-full h-[16rem] text-m uppercase lg:h-16 hover:underline cursor-pointer">
          {t('switchEvents.all')}
        </a>
      </Link>
      <Link href="/events/past">
        <a className="flex justify-center items-center font-bold w-full h-[16rem] text-m uppercase lg:h-16 hover:underline cursor-pointer">
          {t('switchEvents.past')}
        </a>
      </Link>
    </div>
  )
}
