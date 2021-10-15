import { useState } from 'react'
import { useToggle } from 'react-use'
import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import subscribeImage from '../../assets/images/subscribe.jpg'

export const Subscribe = () => {
  const [email, changeEmail] = useState(null)
  const [isEmailInvalid, setIsEmailInvalid] = useToggle(false)
  const { t } = useTranslation('common')

  const subscribeSend = () => {
    alert(email)
  }

  const validateEmail = (event) => {
    event.preventDefault()
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    re.test(String(email).toLowerCase())
      ? subscribeSend()
      : setIsEmailInvalid(true)
  }

  const _handleKeyDown = (e) => {
    e.key === 'Enter' ? validateEmail(e) : null
  }

  return (
    <section className="flex">
      <div className="w-1/2 flex flex-col pl-[2.4rem] pt-8 pb-[10rem] pr-10 bg-grey3">
        <h2 className="text-xl leading-ml uppercase font-bold mb-[20rem]">
          {t('subscribeForm.title')}
        </h2>
        <form className="relative text-m leading-m" onSubmit={validateEmail}>
          <label>
            <input
              type="email"
              className={cn(
                'uppercase  font-bold w-full focus:bg-grey3 bg-grey3 pb-2 pr-4 border-b placeholder-black',
                {
                  'border-pink': isEmailInvalid,
                }
              )}
              name="email"
              placeholder={t('subscribeForm.input')}
              onKeyDown={_handleKeyDown}
              onChange={(e) => {
                changeEmail(e.target.value)
                setIsEmailInvalid(false)
              }}
            />
          </label>
          <label className="absolute right-0 cursor-pointer h-4">
            <input
              className="bg-grey3 w-4 cursor-pointer align-middle"
              type="submit"
              value="→"
            />
          </label>
        </form>
      </div>
      <div className="w-1/2 flex justify-center items-center bg-pink">
        <div className="w-1/3">
          <Image
            src={subscribeImage}
            alt={t('subscribeForm.imageAlt')}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}
