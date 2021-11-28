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
  const [isSubscribed, setIsSubscribed] = useToggle(false)
  const [isEmailValid, setIsEmailValid] = useToggle(false)
  const [isErrorActive, setIsErrorActive] = useToggle(false)
  const [isInputFocus, setIsInputFocus] = useToggle(false)

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      console.log('work')
      if (isEmailValid) {
        console.log(`subscribed: ${email}`)
        const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
        wait(1000)
          .then((res) => {
            setIsSubscribed(true)
            console.log(res)
            setEmail('')
            setTimeout(() => {
              setIsErrorActive(false)
              setIsTermsActive(false)
              setIsSubscribed(false)
            }, 2000)
          })
          .catch(() => {
            setIsErrorActive(true)
            setIsSubscribed(false)
          })
      }
    },
    [
      email,
      isEmailValid,
      setIsSubscribed,
      setIsErrorActive,
      setEmail,
      setIsTermsActive,
    ]
  )

  const handleEmailChange = useCallback(
    (e) => {
      console.log('work')
      const newEmailValue = e.target.value
      setIsEmailValid(EMAIL_REGEX.test(newEmailValue))
      setEmail(newEmailValue)
    },
    [setEmail, setIsEmailValid]
  )

  const handleTermsChange = (e) => {
    setIsTermsActive(e.target.value)
  }

  const clearInput = () => {
    setEmail('')
  }

  const { t } = useTranslation('common')

  return (
    <section className="flex lg:flex-col">
      <div className="w-1/2 flex flex-col pl-[2.4rem] pt-8 pb-[10rem] pr-10 bg-grey3 lg:w-full lg:p-4">
        <h2 className="text-xl leading-ml uppercase font-bold mb-[20rem] lg:text-m lg:mb-6 lg:normal-case lg:-tracking-[0.01em] lg:font-normal">
          {t('subscribeForm.title')}
        </h2>
        <form className="relative text-m leading-m" onSubmit={handleSubmit}>
          <label>
            <input
              type="email"
              className={cn(
                'uppercase font-bold w-full focus:bg-grey3 bg-grey3 pb-2 pr-4 border-b focus:text-white placeholder-black clear-autofill lg:mb-1',
                (isErrorActive && !isEmailValid) ||
                  (isErrorActive && !isSubscribed) ||
                  (email && !isEmailValid)
                  ? 'text-red'
                  : null
              )}
              name="email"
              required
              disabled={isSubscribed}
              placeholder={t('subscribeForm.input')}
              value={email}
              onChange={handleEmailChange}
              onFocus={() => setIsInputFocus(true)}
              onBlur={() => setTimeout(() => setIsInputFocus(false), 200)}
            />
          </label>
          <label className="absolute right-0 h-4">
            {(email && !isEmailValid && isInputFocus) ||
            (email && isInputFocus) ? (
              <input
                className="bg-grey3 w-4 cursor-pointer align-middle text-center text-white"
                onClick={clearInput}
                type="button"
                value="←"
              />
            ) : (
              <input
                className={cn(
                  'bg-grey3 w-4 cursor-pointer align-middle text-center',
                  isEmailValid ? 'cursor-pointer' : 'pointer-events-none',
                  (isErrorActive && !isEmailValid) ||
                    (isErrorActive && !isSubscribed) ||
                    (email && !isEmailValid)
                    ? 'text-red'
                    : null
                )}
                type="submit"
                value="→"
              />
            )}
          </label>
          <label className="lg:text-xs flex items-center cursor-pointer">
            <input
              required
              type="checkbox"
              checked={isTermsActive}
              onChange={handleTermsChange}
              className="w-0 h-0 opacity-0 -z-1"
            ></input>
            <CheckboxIcon checked={isTermsActive} className="mr-1" /> By
            submitting you are agreeing to the &nbsp;
            <Link href="/terms">
              <a className="underline"> terms and conditions.</a>
            </Link>
          </label>
        </form>
        {isSubscribed ? (
          <div className="uppercase text-xxs leading-m font-medium h-6 pt-[0.2rem]">
            {t('subscribeForm.subscribed')}
          </div>
        ) : null}
        {(isErrorActive && !isEmailValid) ||
        (isErrorActive && !isSubscribed && isEmailValid) ? (
          <div className="uppercase text-xxs leading-m font-medium text-red h-6 pt-[0.2rem]">
            {t('subscribeForm.subscribedError')}
          </div>
        ) : null}
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
