import { createStateContext } from 'react-use'
export const [useInvertedContext, InvertedProvider] = createStateContext(false)
export const [usePrevLocationContext, PrevLocationProvider] =
  createStateContext(null)
export const [useLogoAnimationContext, LogoAnimationProvider] =
  createStateContext(false)
