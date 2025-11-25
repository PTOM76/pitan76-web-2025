// pages/_app.tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const MIN_TIME = 200;
    const start = Date.now();

    const hideLoader = () => {
      const elapsed = Date.now() - start;
      const delay = elapsed < MIN_TIME ? MIN_TIME - elapsed : 0;
      setTimeout(() => {
        setFadeOut(true)
        setTimeout(() => setLoading(false), 500);
      }, delay);
    };

    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const isCached = navEntries[0]?.type === 'back_forward';

    if (isCached) {
      setLoading(false);
      return;
    }
    if (document.readyState === 'complete') {
      hideLoader();
      return;
    }
    window.addEventListener('load', hideLoader);
    return () => window.removeEventListener('load', hideLoader);
  }, []);

  return <>
    <Head>
      <title>Pitan76.NET</title>
      <meta name="description" content="Pitan76's website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {loading && <div className={`loading${fadeOut ? ' fade-out' : ''}`}></div>}

    <noscript>
      <style>{
        `.loading { display: none; }`
      }</style>
    </noscript>

    <Component {...pageProps} />

    <div className={"footer"}>
    <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a> | <a href="/changelog">Change Log</a>
      <br />
      Copyright © 2020-2025 Pitan | E-mail admin@pitan76.net
    </div>
  </>
}
