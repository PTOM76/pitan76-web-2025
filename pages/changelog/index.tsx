import styles from '@/styles/page.module.css'

export default function ChangelogPage() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>$changelog</h1>
        
        <span className={styles.breadcrumb}>
            <a href="/">Top</a> / Change Log
        </span>

        <div className={styles.cardlist}>
            <span className={styles.card}>
                <h2>2025 - [<a href="https://pitan76.net/">pitan76.net</a>]</h2>
                TypeScript と Next.js で構築した個人サイト、GitHub Pages上でホスティング
                <br /><br />
                <ul>
                    <li>2025.12.03 - <a href="/empty/">Empty</a> ページの追加</li>
                    <li>2025.12.02 - <a href="/works/">作品</a> ページのjson化</li>
                    <li>2025.12.02 - 背景に星空エフェクト、カーソルの軌跡エフェクトを追加</li>
                    <li>2025.11.30 - <a href="/about/">詳細</a> ページの追加、バナーの作成</li>
                    <li>2025.11.25 - 新規にトップページや変更履歴(changelog)などのページを作成</li>
                    <li>2025.11.25 - Pitan76.NET のリニューアル。2022年のPitan's Noteに用いていたSF風デザインを復刻</li>
                </ul>
            </span>

            <span className={styles.card}>
                <h2>2023 - [<a href="https://2023.pitan76.net/">2023.pitan76.net</a>]</h2>
                HTML/CSS/JavaScript のみのノンフレームワークの2000年代レトロな個人サイト、GitHub Pages上でホスティング
                <br /><br />
                <img src="/image/2023-pitan76net.png" alt="2023.pitan76.net スクリーンショット" style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />
                <ul>
                    <li>2025.11.25 - pitan76.net から 2023.pitan76.net へ移転</li>
                    <li>2025.04.21 - Copyrightを2025年に更新</li>
                    <li>2024.10.23 - 「<a href="https://2023.pitan76.net/tools/textcount.html">文字数カウンター</a>」ページの追加</li>
                    <li>2024.06.16 - 「<a href="https://2023.pitan76.net/distribution/">配布ページ一覧</a>」ページの追加</li>
                    <li>2024.04.21 - 「<a href="https://2023.pitan76.net/tools/toquiz/">匿名クイズ</a>」ページの追加</li>
                    <li>2023.12.07 - 「<a href="https://2023.pitan76.net/tools/piano.html">ウェブピアノ</a>」ページの追加</li>
                    <li>2023.12.06 - 「<a href="https://2023.pitan76.net/tools/sui.html">SpecialUnicodeInputer</a>」、「<a href="https://2023.pitan76.net/tools/mc/csa.html">コマンドセクションアシスタントのWeb版</a>」ページの追加、「<a href="https://2023.pitan76.net/tools/">Webツール</a>」へのツールのリンク追加</li>
                    <li>2023.11.23 - 「<a href="https://2023.pitan76.net/tools/">Webツール</a>」「<a href="https://2023.pitan76.net/tools/regexp.html">正規表現チェッカー</a>」ページの追加</li>
                    <li>2023.07.25 - ホームページ改善、「<a href="https://2023.pitan76.net/contact.html">連絡について</a>」「<a href="https://2023.pitan76.net/changelog.html">更新履歴</a>」「<a href="https://2023.pitan76.net/works.html">作品</a>」「<a href="https://2023.pitan76.net/terms.html">利用規約</a>」ページの作成</li>
                    <li>2023.07.24 - ホームページ公開</li>
                </ul>
            </span>

            <span className={styles.card}>
                <h2>2022 - [<a href="https://2020.pitan76.net/">2020.pitan76.net</a>]</h2>
                初代の個人サイトを2022年にデザインを変更したもの、他は引き継ぎ同様、無料のVPS上でホスティング
                <br /><br />
                <img src="/image/2022-pitan76net.png" alt="Pitan's Note スクリーンショット" style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />
                <ul>
                    <li>2025.11.25 - pkom.pitan76.net から 2023.pitan76.net へ移転</li>
                    <li>2023.07.03 - pkom.ml の廃止に基づき、pkom.pitan76.net へ移転</li>
                    <li>2023.05.20 - Pitan's Note に改名</li>
                    <li>2022.08.14 - サイトデザインを一新してSF風に</li>
                </ul>
            </span>

            <span className={styles.card}>
                <h2>2020 - [<a href="https://web.archive.org/web/20201024122447/http://pkom.ml/">archive.org</a>]</h2>
                PukiWikiで構築した初代の個人サイト、PukiWikiプラグイン等を配布していた。
                <br /><br />
                <img src="/image/2020-pitan76net.png" alt="Pitan's Note スクリーンショット" style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />
                <ul>
                    <li>2020.11.19 - K's Note に改名</li>
                    <li>2020.08.09 - Kの自己満研究 として公開</li>
                </ul>
            </span>
        </div>
    </div>
  )
}

export async function getStaticProps() {
    return {
        props: {
            title: 'Changelog'
        }
    };
}
