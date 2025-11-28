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

  let title = "Pitan76.NET";
  if (pageProps?.title) {
    title = `${pageProps.title} | ${title}`;
  }

  return <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Pitan76's website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {loading && <div className={`loading${fadeOut ? ' fade-out' : ''}`}></div>}

    <Component {...pageProps} />

    <Lightbox open={lightbox.open} close={() => setLightbox({...lightbox, open: false})}
      slides={lightbox.slides} index={lightbox.index} />

    <div className={"footer"}>
      <img src="/image/banner200x40.png" alt="Banner" width={200} height={40} className={"banner"} title="Banner" data-lightbox="false"></img>
      <a href="/terms/">Terms of Service & Privacy Policy</a> | <a href="/changelog/">Change Log</a>
      <br />
      Copyright © 2020-2025 Pitan | E-mail admin@pitan76.net
    </div>
  </>
};
