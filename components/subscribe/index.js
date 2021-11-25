import { useState, useCallback } from 'react'
import { useToggle } from 'react-use'
import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import subscribeImage from '../../assets/images/subscribe.jpg'
import Link from 'next/link'
import { CheckboxIcon } from '..'

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i

export const Subscribe = () => {
  const [email, setEmail] = useState(null)
  const [isTermsActive, setIsTermsActive] = useToggle(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isEmailValid, setIsEmailValid] = useToggle(false)

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if (isEmailValid) {
        console.log(`subscribed: ${email}`)
        setIsSubscribed(true)
      }
    },
    [email, isEmailValid, setIsSubscribed]
  )

  const handleEmailChange = useCallback(
    (e) => {
      const newEmailValue = e.target.value
      setIsEmailValid(EMAIL_REGEX.test(newEmailValue))
      setEmail(newEmailValue)
    },
    [setEmail, setIsEmailValid]
  )

  const handleTermsChange = (e) => {
    setIsTermsActive(e.target.value)
  }

  const { t } = useTranslation('common')

  return (
    <section className="flex lg:flex-col relative">
      <div className="absolute -top-8" id="subscribe" />
      <div className="w-1/2 flex flex-col pl-[2.4rem] pt-8 pb-[10rem] pr-10 bg-grey3 lg:w-full lg:p-4">
        <h2 className="text-xl leading-ml uppercase font-bold mb-[20rem] lg:text-m lg:mb-6 lg:normal-case lg:-tracking-[0.01em] lg:font-normal">
          {t('subscribeForm.title')}
        </h2>
        {isSubscribed ? (
          <div className="uppercase text-m leading-m font-bold h-6 pt-[0.2rem]">
            {t('subscribeForm.subscribed')}
          </div>
        ) : (
          <form className="relative text-m leading-m" onSubmit={handleSubmit}>
            <label>
              <input
                type="email"
                className={cn(
                  'uppercase font-bold w-full focus:bg-grey3 bg-grey3 pb-2 pr-4 border-b placeholder-black clear-autofill lg:mb-1'
                )}
                name="email"
                placeholder={t('subscribeForm.input')}
                onChange={handleEmailChange}
              />
            </label>
            <label className="absolute right-0 h-4">
              <input
                className={cn(
                  'bg-grey3 w-4 cursor-pointer align-middle',
                  isEmailValid
                    ? 'opacity-100 cursor-pointer'
                    : 'opacity-50 pointer-events-none'
                )}
                type="submit"
                value="→"
              />
            </label>
            <label className="lg:text-[1rem] flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isTermsActive}
                onChange={handleTermsChange}
                className="w-0 h-0 opacity-0 -z-1"
                required
              ></input>
              <CheckboxIcon checked={isTermsActive} className="mr-2" /> By
              submitting you are agreeing to the &nbsp;
              <Link href="/terms">
                <a className="underline"> terms and conditions.</a>
              </Link>
            </label>
          </form>
        )}
      </div>
      <div className="w-1/2 flex justify-center items-center bg-pink lg:w-full lg:p-8">
        <div className="w-1/3 lg:w-full">
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
