import { useEffect, useState } from "react";

export const useLoadingScreen = () => {

  // ロード画面
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
  return { loading, fadeOut };
};