// pages/_app.tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <div className={"footer"}>
    <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a> | <a href="/changelog">Change Log</a>
      <br />
      Copyright © 2020-2025 Pitan | E-mail admin@pitan76.net
    </div>
  </>
}
