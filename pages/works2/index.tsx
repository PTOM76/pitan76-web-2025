import worksDataJson from "@/public/api/works/list.json" assert { type: "json" };
import styles from '@/styles/page.module.css';
import s from '@/styles/works2.module.css';
import { Icon } from '@iconify/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import ImageCarousel from '@/components/ImageCarousel';

type Work = {
    id: string;
    name: string;
    description: string;
    version?: string;
    author?: string;
    url: string;
    license?: string;
    createAt?: string;
    updateAt?: string;
    site?: Record<string, string>;
    tag?: string[];
    category: string;
    alias?: string | string[];
    custom?: {
        mcversion?: string;
        cf_projectid?: number;
        images?: string[];
        featured?: boolean;
    };
};

const CATEGORY_ORDER = [
    'mcmod', 'mcplugin', 'repomod', 'pukiwiki', 'pukiwikiskin',
    'mmdplugin', 'chrome-extension', 'app', 'web', 'misc',
];

const CATEGORY_META: Record<string, { label: string }> = {
    mcmod: { label: 'MC Mods' },
    mcplugin: { label: 'MCプラグイン' },
    repomod: { label: 'R.E.P.O Mod' },
    pukiwiki: { label: 'PukiWikiプラグイン' },
    pukiwikiskin: { label: 'PukiWikiスキン' },
    mmdplugin: { label: 'MMDプラグイン' },
    'chrome-extension': { label: 'Chrome拡張機能' },
    app: { label: 'アプリケーション' },
    web: { label: 'Webサービス' },
    misc: { label: 'その他' },
};

/** 元のworksページにあった補足。情報として意味のあるものだけ引き継ぐ */
const SECTION_NOTES: Record<string, React.ReactNode> = {
    mcmod: (
        <>
            Minecraft Java Edition向けのModを開発、配布しています。<br />
            <a href="https://www.curseforge.com/members/pitan76/projects" target="_blank" rel="noopener noreferrer">CurseForge</a>
            {' / '}
            <a href="https://modrinth.com/user/pitan76" target="_blank" rel="noopener noreferrer">Modrinth</a>
            {' / '}
            <a href="https://modparks.pitan76.net/profile/pitan76" target="_blank" rel="noopener noreferrer">ModParks</a>
        </>
    ),
    pukiwiki: (
        <>
            ソースコードは
            <a href="https://github.com/PTOM76/PukiWiki-Plugins/" target="_blank" rel="noopener noreferrer">PukiWiki-Plugins</a>
            にまとめています。
        </>
    ),
    mmdplugin: <>ほとんどのMMDプラグインはMMDPluginを前提とします。</>,
};

/** site のキーごとの表示定義。ここに足せば全カテゴリで自動的に表示される */
const LINK_DEFS: { key: string; title: string; cls?: string; icon?: string }[] = [
    { key: 'curseforge', title: 'CurseForge', cls: 'curseforgeIcon' },
    { key: 'modrinth', title: 'Modrinth', cls: 'modrinthIcon' },
    { key: 'modparks', title: 'ModParks', cls: 'modparksIcon' },
    { key: 'thunderstore', title: 'Thunderstore', cls: 'thunderstoreIcon' },
    { key: 'nexusmods', title: 'Nexus Mods', cls: 'nexusmodsIcon' },
    { key: 'chromewebstore', title: 'Chrome Web Store', cls: 'chromewebstoreIcon' },
    { key: 'wiki', title: 'ウィキ', cls: 'wikichreeIcon' },
    { key: 'github', title: 'ソースコード', cls: 'githubIcon' },
    { key: 'website', title: 'Webサイト', icon: 'mdi:link-variant' },
    { key: 'pkom', title: 'PKOM', icon: 'mdi:web' },
    { key: 'bukkit.org', title: 'BukkitDev', icon: 'mdi:web' },
    { key: 'pukiwiki-official', title: 'PukiWiki公式', icon: 'mdi:file-document-outline' },
    { key: 'gist', title: 'Gist', icon: 'mdi:code-braces' },
];

const PLATFORM_BADGES: { tag: string; src: string; title: string }[] = [
    { tag: 'fabric', src: '/image/fabric.png', title: 'Fabric' },
    { tag: 'forge', src: '/image/forge.png', title: 'Minecraft Forge' },
    { tag: 'neoforge', src: '/image/neoforge.png', title: 'NeoForge' },
    { tag: 'r-e-p-o', src: '/image/repo.png', title: 'R.E.P.O' },
    { tag: 'chrome', src: '/image/chrome.png', title: 'Chrome' },
    { tag: 'windows', src: '/image/windows.png', title: 'Windows' },
    { tag: 'macos', src: '/image/macos.png', title: 'macOS' },
    { tag: 'linux', src: '/image/linux.png', title: 'Linux' },
];

const stripHtml = (text: string) => text.replace(/<[^>]*>/g, ' ');

const toLocalImage = (url: string) =>
    url.startsWith('https://www.pitan76.net/image/')
        ? url.replace('https://www.pitan76.net/image/', '/image/')
        : url;

/** "2024/03/25" と "20260130" の両方を 20240325 のような数値に正規化する */
const parseDate = (value?: string): number => {
    if (!value) return 0;
    const slashed = /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/.exec(value);
    if (slashed) return Number(`${slashed[1]}${slashed[2].padStart(2, '0')}${slashed[3].padStart(2, '0')}`);
    if (/^\d{8}$/.test(value)) return Number(value);
    return 0;
};

const formatDate = (value?: string) => {
    const n = parseDate(value);
    if (!n) return '';
    const t = String(n);
    return `${t.slice(0, 4)}/${t.slice(4, 6)}/${t.slice(6, 8)}`;
};

/** 直接ダウンロードできるURLかどうか */
const isDownloadUrl = (url: string) => /\.(zip|php|jar)$/i.test(url);

type Prepared = Work & {
    images: string[];
    tagList: string[];
    /** カード上に出すタグ。絞り込みや検索には tagList をそのまま使う */
    displayTags: string[];
    searchIndex: string;
    updatedAt: number;
    featured: boolean;
};

const prepare = (list: Work[]): Prepared[] => {
    // カテゴリ内のほとんどが持つタグは、そのカテゴリでは区別に役立たないので
    // カード上では省く (例: MC Modsの "minecraft" "mod" "fabric")
    const sizeByCategory: Record<string, number> = {};
    const tagCountByCategory: Record<string, Record<string, number>> = {};
    list.forEach(work => {
        sizeByCategory[work.category] = (sizeByCategory[work.category] ?? 0) + 1;
        const counts = tagCountByCategory[work.category] ?? (tagCountByCategory[work.category] = {});
        (work.tag ?? []).forEach(tag => { counts[tag] = (counts[tag] ?? 0) + 1; });
    });

    const badgeTags = new Set(PLATFORM_BADGES.map(badge => badge.tag));

    return list.map(work => {
        const custom = work.custom ?? {};
        const images = (custom.images ?? []).map(toLocalImage);
        const tagList = work.tag ?? [];
        const aliases = Array.isArray(work.alias) ? work.alias : work.alias ? [work.alias] : [];
        const categoryLabel = CATEGORY_META[work.category]?.label ?? work.category;

        const total = sizeByCategory[work.category] ?? 1;
        const counts = tagCountByCategory[work.category] ?? {};
        const displayTags = tagList.filter(tag =>
            !badgeTags.has(tag) && (counts[tag] ?? 0) / total <= 0.6
        );

        const searchIndex = [
            work.name, work.id, ...aliases, stripHtml(work.description ?? ''),
            ...tagList, work.author ?? '', work.category, categoryLabel,
            custom.mcversion ?? '',
        ].join(' ').toLowerCase();

        return {
            ...work,
            images,
            tagList,
            displayTags,
            searchIndex,
            updatedAt: Math.max(parseDate(work.updateAt), parseDate(work.createAt)),
            featured: custom.featured === true,
        };
    });
};

function LinkIcons({ work }: { work: Prepared }) {
    const links = work.site ?? {};
    const shown = LINK_DEFS.filter(def => links[def.key]);
    const showDownload = isDownloadUrl(work.url);

    if (shown.length === 0 && !showDownload) return null;

    return (
        <div className={s.links}>
            {showDownload && (
                <a href={work.url} target="_blank" rel="noopener noreferrer" title="ダウンロード">
                    <Icon icon="mdi:download" className={styles.genericIcon} width={30} height={30} />
                </a>
            )}
            {shown.map(def => (
                <a key={def.key} href={links[def.key]} target="_blank" rel="noopener noreferrer" title={def.title}>
                    {def.cls
                        ? <div className={styles[def.cls as keyof typeof styles]} title={def.title} />
                        : <Icon icon={def.icon!} className={styles.genericIcon} width={30} height={30} />}
                </a>
            ))}
        </div>
    );
}

function WorkCard({ work, activeTags, onToggleTag }: {
    work: Prepared;
    activeTags: string[];
    onToggleTag: (tag: string) => void;
}) {
    const custom = work.custom ?? {};
    const badges = PLATFORM_BADGES.filter(b => work.tagList.includes(b.tag));

    const meta = [
        work.version ? `v${work.version}` : '',
        custom.mcversion ? `MC ${custom.mcversion}` : '',
        formatDate(work.updateAt) ? `${formatDate(work.updateAt)} 更新` : '',
    ].filter(Boolean).join(' ・ ');

    // 絞り込み中のタグは省略対象でも必ず出す
    const shownTags = Array.from(new Set([
        ...work.displayTags,
        ...activeTags.filter(tag => work.tagList.includes(tag)),
    ]));
    const visibleTags = shownTags.slice(0, 4);

    return (
        <div className={s.card}>
            <div className={s.cardHeader}>
                <h3 className={s.cardTitle}>
                    <a href={work.url} target="_blank" rel="noopener noreferrer">{work.name}</a>
                </h3>
                {work.featured && <span className={s.featuredMark}>PICK UP</span>}
                {badges.map(b => (
                    <img key={b.tag} src={b.src} className={s.badge} title={b.title} alt={b.title} data-lightbox="false" />
                ))}
            </div>

            <p className={s.cardDesc} dangerouslySetInnerHTML={{ __html: work.description }} />

            <ImageCarousel images={work.images} name={work.name} />

            {meta && <div className={s.meta}>{meta}</div>}

            {visibleTags.length > 0 && (
                <div className={s.cardTags}>
                    {visibleTags.map(tag => (
                        <button
                            key={tag}
                            type="button"
                            className={activeTags.includes(tag) ? `${s.chip} ${s.tagChip} ${s.chipActive}` : `${s.chip} ${s.tagChip}`}
                            onClick={() => onToggleTag(tag)}
                            title={`タグ「${tag}」で絞り込む`}
                        >
                            #{tag}
                        </button>
                    ))}
                    {shownTags.length > visibleTags.length && (
                        <span className={s.tagMore}>+{shownTags.length - visibleTags.length}</span>
                    )}
                </div>
            )}

            <LinkIcons work={work} />
        </div>
    );
}

export default function Works2Page() {
    const router = useRouter();
    const works = useMemo(() => prepare(worksDataJson as unknown as Work[]), []);

    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('all');
    const [tags, setTags] = useState<string[]>([]);
    const [sort, setSort] = useState<'category' | 'updated' | 'name'>('category');

    const searchRef = useRef<HTMLInputElement>(null);
    const initialized = useRef(false);

    // URLクエリから初期状態を復元する(共有・ブックマーク用)
    useEffect(() => {
        if (!router.isReady || initialized.current) return;
        const get = (key: string) => (typeof router.query[key] === 'string' ? router.query[key] as string : '');
        setQuery(get('q'));
        if (get('cat')) setCategory(get('cat'));
        if (get('tag')) setTags(get('tag').split(',').filter(Boolean));
        const nextSort = get('sort');
        if (nextSort === 'updated' || nextSort === 'name' || nextSort === 'category') setSort(nextSort);
        initialized.current = true;
    }, [router.isReady, router.query]);

    // 状態をURLへ反映
    useEffect(() => {
        if (!initialized.current) return;
        const next: Record<string, string> = {};
        if (query.trim()) next.q = query.trim();
        if (category !== 'all') next.cat = category;
        if (tags.length) next.tag = tags.join(',');
        if (sort !== 'category') next.sort = sort;
        router.replace({ pathname: router.pathname, query: next }, undefined, { shallow: true, scroll: false });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, category, tags, sort]);

    // "/" で検索欄にフォーカス
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            const el = document.activeElement;
            const typing = el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement;
            if (e.key === '/' && !typing) {
                e.preventDefault();
                searchRef.current?.focus();
            }
            if (e.key === 'Escape' && typing) searchRef.current?.blur();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = {};
        works.forEach(w => { counts[w.category] = (counts[w.category] ?? 0) + 1; });
        return counts;
    }, [works]);

    const toggleTag = (tag: string) =>
        setTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);

    const filtered = useMemo(() => {
        const needles = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
        return works.filter(w => {
            if (category !== 'all' && w.category !== category) return false;
            if (tags.length && !tags.every(t => w.tagList.includes(t))) return false;
            if (needles.length && !needles.every(n => w.searchIndex.includes(n))) return false;
            return true;
        });
    }, [works, query, category, tags]);

    // 絞り込み結果に出てくるタグを多い順に(選択中のタグは常に表示)
    const tagFacets = useMemo(() => {
        const counts: Record<string, number> = {};
        filtered.forEach(w => w.tagList.forEach(t => { counts[t] = (counts[t] ?? 0) + 1; }));
        tags.forEach(t => { counts[t] = counts[t] ?? 0; });
        return Object.entries(counts)
            .sort((a, b) => (b[1] - a[1]) || a[0].localeCompare(b[0]))
            .slice(0, 18);
    }, [filtered, tags]);

    const sortWorks = (list: Prepared[]) => {
        const sorted = [...list];
        if (sort === 'name') {
            sorted.sort((a, b) => a.name.localeCompare(b.name, 'ja'));
        } else if (sort === 'updated') {
            // 日付が無いものは後ろへ
            sorted.sort((a, b) => (b.updatedAt - a.updatedAt) || a.name.localeCompare(b.name, 'ja'));
        } else {
            sorted.sort((a, b) => {
                if (a.featured !== b.featured) return a.featured ? -1 : 1;
                const ai = CATEGORY_ORDER.indexOf(a.category);
                const bi = CATEGORY_ORDER.indexOf(b.category);
                if (ai !== bi) return ai - bi;
                // 画像があるものを先に出して見つけやすくする
                const aHas = a.images.length > 0 ? 0 : 1;
                const bHas = b.images.length > 0 ? 0 : 1;
                if (aHas !== bHas) return aHas - bHas;
                return b.updatedAt - a.updatedAt;
            });
        }
        return sorted;
    };

    const featured = useMemo(() => filtered.filter(w => w.featured), [filtered]);

    // カテゴリ順のときだけセクション分けする
    const grouped = useMemo(() => {
        if (sort !== 'category') return null;
        return CATEGORY_ORDER
            .map(cat => ({ cat, items: sortWorks(filtered.filter(w => w.category === cat)) }))
            .filter(group => group.items.length > 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filtered, sort]);

    const flat = useMemo(() => (sort === 'category' ? [] : sortWorks(filtered)),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [filtered, sort]);

    const isFiltering = query.trim() !== '' || category !== 'all' || tags.length > 0;

    const reset = () => {
        setQuery('');
        setCategory('all');
        setTags([]);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>$works2</h1>

            <span className={styles.breadcrumb}>
                <a href="/">root</a>/works2
            </span>

            <div className={styles.noticebox}>
                従来の一覧は<a href="/works/">こちら</a>、旧サイトの作品ページは<a href="https://2023.pitan76.net/works.html" target="_blank" rel="noopener noreferrer">こちら</a>から。
            </div>

            <div className={s.toolbar}>
                <div className={s.searchRow}>
                    <div className={s.searchBox}>
                        <Icon icon="mdi:magnify" className={s.searchIcon} width={20} height={20} />
                        <input
                            ref={searchRef}
                            type="search"
                            className={s.searchInput}
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            placeholder="名前・説明・タグで検索"
                            aria-label="作品を検索"
                        />
                        {query && (
                            <button type="button" className={s.clearButton} onClick={() => setQuery('')} aria-label="検索条件をクリア">
                                <Icon icon="mdi:close-circle" width={18} height={18} />
                            </button>
                        )}
                    </div>

                    <select className={s.select} value={sort} onChange={e => setSort(e.target.value as typeof sort)} aria-label="並び順">
                        <option value="category">カテゴリ順</option>
                        <option value="updated">更新が新しい順</option>
                        <option value="name">名前順</option>
                    </select>
                </div>

                <div className={s.chipRow}>
                    <span className={s.chipLabel}>カテゴリ:</span>
                    <button
                        type="button"
                        className={category === 'all' ? `${s.chip} ${s.chipActive}` : s.chip}
                        onClick={() => setCategory('all')}
                    >
                        すべて<span className={s.chipCount}>{works.length}</span>
                    </button>
                    {CATEGORY_ORDER.filter(cat => categoryCounts[cat]).map(cat => (
                        <button
                            key={cat}
                            type="button"
                            className={category === cat ? `${s.chip} ${s.chipActive}` : s.chip}
                            onClick={() => setCategory(prev => (prev === cat ? 'all' : cat))}
                        >
                            {CATEGORY_META[cat]?.label ?? cat}
                            <span className={s.chipCount}>{categoryCounts[cat]}</span>
                        </button>
                    ))}
                </div>

                {tagFacets.length > 0 && (
                    <div className={s.chipRow}>
                        <span className={s.chipLabel}>タグ:</span>
                        {tagFacets.map(([tag, count]) => (
                            <button
                                key={tag}
                                type="button"
                                className={tags.includes(tag) ? `${s.chip} ${s.tagChip} ${s.chipActive}` : `${s.chip} ${s.tagChip}`}
                                onClick={() => toggleTag(tag)}
                            >
                                #{tag}<span className={s.chipCount}>{count}</span>
                            </button>
                        ))}
                    </div>
                )}

                <div className={s.statusRow}>
                    <span className={s.count}>
                        <strong>{filtered.length}</strong> 件 / 全 {works.length} 件
                    </span>
                    {isFiltering && (
                        <button type="button" className={s.resetButton} onClick={reset}>
                            <Icon icon="mdi:filter-remove-outline" width={15} height={15} />絞り込みを解除
                        </button>
                    )}
                </div>

                {grouped && grouped.length > 1 && (
                    <div className={s.jumpNav}>
                        {grouped.map(group => (
                            <a key={group.cat} href={`#cat-${group.cat}`} className={s.jumpLink}>
                                {CATEGORY_META[group.cat]?.label ?? group.cat} ({group.items.length})
                            </a>
                        ))}
                    </div>
                )}
            </div>

            {filtered.length === 0 && (
                <div className={s.empty}>
                    <div className={s.emptyTitle}>該当する作品が見つかりませんでした</div>
                    <p>検索語やカテゴリ、タグの条件を変えてみてください。</p>
                    <button type="button" className={s.resetButton} onClick={reset}>
                        <Icon icon="mdi:filter-remove-outline" width={15} height={15} />絞り込みを解除
                    </button>
                </div>
            )}

            {/* custom.featured を立てた作品はカテゴリ順のときだけ先頭にまとめる */}
            {grouped && featured.length > 0 && (
                <section className={s.section}>
                    <h2>ピックアップ <span className={s.sectionCount}>{featured.length} 件</span></h2>
                    <div className={s.grid}>
                        {featured.map(work => (
                            <WorkCard key={`pick-${work.id}`} work={work} activeTags={tags} onToggleTag={toggleTag} />
                        ))}
                    </div>
                </section>
            )}

            {grouped?.map(group => (
                <section key={group.cat} id={`cat-${group.cat}`} className={s.section}>
                    <h2>
                        {CATEGORY_META[group.cat]?.label ?? group.cat}
                        {' '}<span className={s.sectionCount}>{group.items.length} 件</span>
                    </h2>
                    {SECTION_NOTES[group.cat] && (
                        <p className={s.sectionNote}>{SECTION_NOTES[group.cat]}</p>
                    )}
                    <div className={s.grid}>
                        {group.items.map(work => (
                            <WorkCard key={work.id} work={work} activeTags={tags} onToggleTag={toggleTag} />
                        ))}
                    </div>
                </section>
            ))}

            {!grouped && flat.length > 0 && (
                <div className={s.grid}>
                    {flat.map(work => (
                        <WorkCard key={work.id} work={work} activeTags={tags} onToggleTag={toggleTag} />
                    ))}
                </div>
            )}
        </div>
    );
}
