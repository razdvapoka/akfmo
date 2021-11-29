import '../styles/index.scss'
import { LogoAnimationProvider, PrevLocationProvider } from '../lib/contexts'

function MyApp({ Component, pageProps }) {
  return (
    <LogoAnimationProvider>
      <PrevLocationProvider>
        <Component {...pageProps} />
      </PrevLocationProvider>
    </LogoAnimationProvider>
  )
}

export default MyApp
