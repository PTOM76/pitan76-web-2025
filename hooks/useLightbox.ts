import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Slide } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export const useLightbox = () => {
  const router = useRouter();

  const [lightbox, setLightbox] = useState<{open: boolean, slides: Slide[], index: number }>({
    open: false, 
    slides: [],
    index: 0,
  });

  useEffect(() => {
    const images = Array.from(document.querySelectorAll<HTMLImageElement>('img:not([data-lightbox="false"])'));
    const slides = images.map(img => ({ src: img.currentSrc || img.src }));
    setLightbox(prev => ({ ...prev, slides }));

    const cleanups = images.map((img, i) => {
      const onClick = (e: MouseEvent) => {
        e.preventDefault();
        setLightbox({ open: true, slides, index: i });
      };
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', onClick);
      return () => {
        img.removeEventListener('click', onClick);
        img.style.removeProperty('cursor');
      };
    });
    return () => cleanups.forEach(dispose => dispose());
  }, [router.asPath]);
  return { lightbox, setLightbox };
};