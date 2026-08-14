import { useRef, useState } from 'react';
import s from '@/styles/carousel.module.css';

type Props = {
    images: string[];
    name: string;
    /** カード内など、高さを抑えたい場所で使う */
    compact?: boolean;
};

/**
 * 画像が1枚のときは単純な画像、複数枚のときはカルーセルとして表示する。
 * 画像はすべてDOM上に残すため、ライトボックスからは全枚数を辿れる。
 */
export default function ImageCarousel({ images, name, compact }: Props) {
    const [index, setIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);

    if (!images || images.length === 0) return null;

    const count = images.length;
    const go = (i: number) => setIndex(((i % count) + count) % count);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    };

    return (
        <div className={compact ? `${s.carousel} ${s.compact}` : s.carousel}>
            <div className={s.viewport} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                <div className={s.track} style={{ transform: `translateX(-${index * 100}%)` }}>
                    {images.map((src, i) => (
                        <a key={`${src}-${i}`} className={s.slide} href={src} target="_blank" rel="noopener noreferrer" tabIndex={i === index ? 0 : -1} aria-hidden={i === index ? undefined : true}>
                            <img
                                src={src}
                                alt={count > 1 ? `${name} スクリーンショット (${i + 1}/${count})` : `Screenshot of ${name}`}
                                className={s.image}
                                loading="lazy"
                            />
                        </a>
                    ))}
                </div>

                {count > 1 && (
                    <>
                        <button type="button" className={`${s.nav} ${s.prev}`} onClick={() => go(index - 1)} aria-label="前の画像">‹</button>
                        <button type="button" className={`${s.nav} ${s.next}`} onClick={() => go(index + 1)} aria-label="次の画像">›</button>
                        <span className={s.counter}>{index + 1} / {count}</span>
                    </>
                )}
            </div>

            {count > 1 && (
                <div className={s.dots}>
                    {images.map((src, i) => (
                        <button
                            key={`dot-${src}-${i}`}
                            type="button"
                            className={i === index ? `${s.dot} ${s.dotActive}` : s.dot}
                            onClick={() => go(i)}
                            aria-label={`${i + 1}枚目を表示`}
                            aria-current={i === index}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
