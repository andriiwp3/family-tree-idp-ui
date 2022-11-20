import type { AppProps } from 'next/app'
import { ThemeProvider, StoreProvider } from '../features/common'
import '../features/common/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  )
}
