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
      <div className={"banners"}>
        <a href="/"><img src="/image/banner88x31.png" alt="Banner" width={88} height={31} className={"banner"} title="Banner" data-lightbox="false"></img></a>
        <a href="https://wikichree.com/" target="_blank" rel="noopener noreferrer">
          <img src="/image/wikichree88x31.png" alt="Wikichree" width={88} height={31} className={"banner"} title="Wikichree" data-lightbox="false"></img>
        </a>
        <a href="https://psnverse.pitan76.net/" target="_blank" rel="noopener noreferrer">
          <img src="/image/psnverse88x31.png" alt="PSNVerse" width={88} height={31} className={"banner"} title="PSNVerse" data-lightbox="false"></img>
        </a>
      </div>
      
      <a href="/terms/">Terms of Service & Privacy Policy</a> | <a href="/changelog/">Change Log</a>
      <br />
      Copyright © 2020-2025 Pitan | E-mail admin@pitan76.net
    </div>
  </>
};
