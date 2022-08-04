import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/Brain.css'
import ScrollObserver from '../utils/scroll-observer'
import About from './About'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>

  )
}

export default MyApp

