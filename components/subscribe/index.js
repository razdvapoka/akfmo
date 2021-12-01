import { useState, useCallback } from 'react'
import { useToggle } from 'react-use'
import cn from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import subscribeImage from '../../assets/images/subscribe.jpg'
// import { CheckboxIcon } from '..'
import TickIcon from '../../assets/svg/tick.svg'

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i

export const Subscribe = () => {
  const [email, setEmail] = useState('')
  // const [isTermsActive, setIsTermsActive] = useToggle(false)
  const [isSubmitting, setIsSubmitting] = useToggle(false)
  const [isSubscribed, setIsSubscribed] = useToggle(false)
  const [isErrorActive, setIsErrorActive] = useToggle(false)

  const isEmailValid = EMAIL_REGEX.test(email)

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if (isEmailValid) {
        setIsSubmitting(true)
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/subscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        })
          .then((res) => {
            if (res.status === 200) {
              setIsSubscribed(true)
              setEmail('')
            } else {
              res.json().then(() => {
                setIsErrorActive(true)
              })
            }
          })
          .catch(() => {
            setIsErrorActive(true)
          })
          .finally(() => {
            setIsSubmitting(false)
          })
      }
    },
    [
      email,
      isEmailValid,
      setIsSubscribed,
      setIsErrorActive,
      setEmail,
      setIsSubmitting,
    ]
  )

  const handleEmailChange = useCallback(
    (e) => {
      setIsErrorActive(false)
      setEmail(e.target.value)
    },
    [setEmail, setIsErrorActive]
  )

  // const handleTermsChange = (e) => {
  //   setIsTermsActive(e.target.value)
  // }

  const { t } = useTranslation('common')

  return (
    <section className="flex lg:flex-col relative">
      <div className="absolute -top-8" id="subscribe" />
      <div className="w-1/2 flex flex-col pl-[2.4rem] pt-8 pb-[10rem] pr-10 bg-grey3 lg:w-full lg:p-4">
        <h2 className="text-xl leading-ml font-medium mb-[20rem] lg:text-m lg:mb-6 lg:normal-case lg:tracking-tighter">
          {t('subscribeForm.title')}
        </h2>
        <form className="relative text-m leading-m" onSubmit={handleSubmit}>
          <label>
            <input
              type="email"
              className={cn(
                'uppercase font-bold w-full focus:bg-grey3 bg-grey3 pb-2 pr-4 border-b border-black placeholder-black clear-autofill lg:mb-1',
                isErrorActive
                  ? 'text-red'
                  : email.length > 0
                  ? 'text-white'
                  : null
              )}
              name="email"
              required
              disabled={isSubscribed || isSubmitting}
              placeholder={t('subscribeForm.input')}
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <label className="absolute right-0 h-4">
            {email.length > 0 && !isEmailValid ? (
              <input
                className="bg-grey3 w-4 cursor-pointer align-middle text-center text-white"
                onClick={() => setEmail('')}
                type="button"
                value="←"
              />
            ) : isSubscribed ? (
              <span className="block w-[1.7rem] h-[1.3rem] mt-1">
                <TickIcon />
              </span>
            ) : (
              <input
                className={cn(
                  'bg-grey3 w-4 align-middle text-center',
                  isErrorActive
                    ? 'text-red pointer-events-none'
                    : isEmailValid && !isSubmitting // && isTermsActive
                    ? 'cursor-pointer'
                    : 'pointer-events-none'
                )}
                type="submit"
                value="→"
              />
            )}
          </label>
          <div className="flex justify-end items-baseline mt-1 lg:mt-0 lg:flex-col">
            {/* <label
              className={cn(
                'lg:text-xs flex items-center cursor-pointer select-none font-medium',
                {
                  'pointer-events-none': isSubscribed,
                }
              )}
            >
              <input
                required
                type="checkbox"
                checked={isTermsActive}
                onChange={handleTermsChange}
                className="absolute appearance-none"
              />
              <CheckboxIcon checked={isTermsActive} className="mr-1" />
              <span dangerouslySetInnerHTML={{ __html: t('terms') }} />
            </label> */}
            <div
              className={cn('leading-m font-medium text-xs lg:mt-1', {
                'text-red': isErrorActive,
              })}
            >
              {isSubscribed
                ? t('subscribeForm.subscribed')
                : isErrorActive
                ? t('subscribeForm.subscribedError')
                : null}
            </div>
          </div>
        </form>
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
