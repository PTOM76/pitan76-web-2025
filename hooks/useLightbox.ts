import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Slide } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export const useLightbox = () => {
  const router = useRouter();

  const [lightbox, setLightbox] = useState<{open: boolean, slides: Slide[], index: number }>({
    open: false,
    slides: [],
    index: 0,
  });

  const cleanupsRef = useRef<(() => void)[]>([]);
  const slideKeyRef = useRef('');
  const openRef = useRef(false);
  openRef.current = lightbox.open;

  useEffect(() => {
    slideKeyRef.current = '';
    let scheduled = 0;

    const bind = () => {
      // 前回ぶんのリスナーを外してから貼り直す
      cleanupsRef.current.forEach(dispose => dispose());
      cleanupsRef.current = [];

      const images = Array.from(document.querySelectorAll<HTMLImageElement>('img:not([data-lightbox="false"])'));
      const slides = images.map(img => ({ src: img.currentSrc || img.src }));

      // ライトボックス表示中はスライドを差し替えない
      const key = slides.map(slide => slide.src).join('|');
      if (key !== slideKeyRef.current && !openRef.current) {
        slideKeyRef.current = key;
        setLightbox(prev => ({ ...prev, slides }));
      }

      images.forEach((img, i) => {
        const onClick = (e: MouseEvent) => {
          e.preventDefault();
          setLightbox({ open: true, slides, index: i });
        };
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', onClick);
        cleanupsRef.current.push(() => {
          img.removeEventListener('click', onClick);
          img.style.removeProperty('cursor');
        });
      });
    };

    // 検索やカルーセルでDOMが入れ替わっても追従させる
    const schedule = () => {
      cancelAnimationFrame(scheduled);
      scheduled = requestAnimationFrame(bind);
    };

    schedule();
    const observer = new MutationObserver(schedule);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(scheduled);
      cleanupsRef.current.forEach(dispose => dispose());
      cleanupsRef.current = [];
    };
  }, [router.asPath]);

  return { lightbox, setLightbox };
};
