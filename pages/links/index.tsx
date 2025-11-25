import styles from '../../styles/page.module.css'

export default function LinksPage() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>$links</h1>
        
        <span className={styles.breadcrumb}>
            <a href="/">Top</a> / Links
        </span>

        <div className={styles.cardlist}>
            <span className={styles.card}>
                <h2>個人サイト</h2>
                <ul>
                    <li><a href="https://wikichree.com/pitan76/" target="_blank" rel="noopener noreferrer">Pitan Mod Wiki</a><br />
                        私が開発したマイクラmodを解説するためのウィキ。</li>
                    <li><a href="https://blog.pitan76.net/" target="_blank" rel="noopener noreferrer">新ぴたぶろぐ</a><br />
                        自分が書きたいことを書くだけのブログ。</li>
                    <li><a href="https://pukiwiki.pitan76.net/" target="_blank" rel="noopener noreferrer">Pitan's PukiWiki</a><br />
                        PukiWikiに関する情報をまとめたウィキ。</li>
                </ul>

                <hr />
                過去のサイトなど<br />

                <ul>
                    <li><a href="https://2023.pitan76.net/" target="_blank" rel="noopener noreferrer">Pitan76.NET (2023)</a><br />
                        HTML/CSS/JavaScriptのみで構築した個人サイト。Webツールもここにあります。</li>
                    <li><a href="https://2020.pitan76.net/" target="_blank" rel="noopener noreferrer">Pitan's Note (2020)</a><br />
                        PukiWikiで構築した初代の個人サイト。PukiWikiプラグイン等を配布していた。</li>
                    <li><a href="https://blog2.pitan76.net/" target="_blank" rel="noopener noreferrer">ぴたぶろぐ (旧)</a><br />
                        WordPressで運用していた旧ブログサイト。2023年まで運営していました。</li>
                    
                </ul>
            </span>
            
            <span className={styles.card}>
                <h2>Webサービス</h2>
                <ul>
                    <li><a href="https://wikichree.com/" target="_blank" rel="noopener noreferrer">WikiChree.COM</a><br />
                        無料で使えるウィキのホスティングサービス。</li>
                    <li><a href="https://vps-search.pitan76.net/" target="_blank" rel="noopener noreferrer">ボ対検索ツール</a><br />
                        ボイパ対決という音MADに特化した検索ツール。</li>
                    <li>
                        <a href="https://psnverse.pitan76.net/" target="_blank" rel="noopener noreferrer">Psnverseコミュニティ</a><br />
                        PlayStationの非公式掲示板コミュニティ。(2020年以来放置)
                    </li>
                    <li>
                        <a href="https://2023.pitan76.net/tools/" target="_blank" rel="noopener noreferrer">Webツール群</a><br />
                        文字数カウンタなどのWebツールを公開しています。
                    </li>
                    <li>
                        <a href="https://2023.pitan76.net/tools/toquiz/index.html" target="_blank" rel="noopener noreferrer">匿名クイズ</a><br />
                        匿名でクイズを作成・共有できるWebアプリ。
                    </li>
                </ul>
            </span>

            <span className={styles.card}>
                <h2>各種SNS</h2>
                <ul>
                    <li>Twitter <a href="https://twitter.com/PitaQ_Modding" target="_blank" rel="noopener noreferrer">@PitaQ_Modding</a></li>
                    <li>Misskey.io <a href="https://misskey.io/@pitan76" target="_blank" rel="noopener noreferrer">@pitan76</a></li>
                    <li>YouTube <a href="https://www.youtube.com/@pitaq8539" target="_blank" rel="noopener noreferrer">@pitaq8539</a></li>
                    <li>mixi2 <a href="https://mixi.social/@pitaq" target="_blank" rel="noopener noreferrer">@pitaq</a></li>
                    <li>Tumblr <a href="https://pitan76.tumblr.com/" target="_blank" rel="noopener noreferrer">$pitan's_space</a></li>
                    <li>GitHub <a href="https://github.com/PTOM76" target="_blank" rel="noopener noreferrer">PTOM76</a></li>
                    <li>Discord <a href="https://discord.gg/KrYFxKawQc" target="_blank" rel="noopener noreferrer">discord.gg/KrYFxKawQc</a></li>
                </ul>
            </span>

            <span className={styles.card}>
                <h2>その他ブログ</h2>
                <ul>
                    <li>note.com <a href="https://note.com/pitan76" target="_blank" rel="noopener noreferrer">pitan76</a></li>
                    <li>Qiita <a href="https://qiita.com/PitaQ" target="_blank" rel="noopener noreferrer">PitaQ</a></li>
                </ul>
            </span>

            <span className={styles.card}>
                <h2>その他リンク</h2>
                <ul>
                    <li><a href="https://www.curseforge.com/members/pitan76/projects" target="_blank" rel="noopener noreferrer">CurseForge</a></li>
                    <li><a href="https://modrinth.com/user/pitan76" target="_blank" rel="noopener noreferrer">Modrinth</a></li>
                </ul>
            </span>
        </div>
    </div>
  )
}
