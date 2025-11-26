// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Lightbox from 'yet-another-react-lightbox';

import { useLightbox } from '@/hooks/useLightbox';
import { useLoadingScreen } from '@/hooks/useLoadingScreen';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { lightbox, setLightbox } = useLightbox();
  const { loading, fadeOut } = useLoadingScreen();

  return <>
    <Head>
      <title>Pitan76.NET</title>
      <meta name="description" content="Pitan76's website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {loading && <div className={`loading${fadeOut ? ' fade-out' : ''}`}></div>}

    <Component {...pageProps} />

    <Lightbox open={lightbox.open} close={() => setLightbox({...lightbox, open: false})}
      slides={lightbox.slides} index={lightbox.index} />

    <div className={"footer"}>
    <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a> | <a href="/changelog">Change Log</a>
      <br />
      Copyright © 2020-2025 Pitan | E-mail admin@pitan76.net
    </div>
  </>
};
