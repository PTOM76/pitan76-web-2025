import styles from '../styles/top.module.css'
import { Icon } from "@iconify/react";

export default function TopPage() {
  return (
    <div className={styles.container}>
        <div className={styles.profileContainer}>
            <div className={styles.background}></div>
            <div className={styles.profile}>
                <h1>Pitan</h1>
                <img src="/image/profile-icon.jpg" alt="Profile Icon" />
                <p>
                    Bug-Creator のぴたんです<br />
                    MODやWebなどを開発しており、機械弱者ですが、技術系が好きです<br />
                    <br />
                </p>

                <div className={styles.links}>
                    <a href="https://twitter.com/PitaQ_Modding" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:twitter" width="40" height="40" style={{ color: "#ffffff", "--glow": "#2ca2eb" } as any } />
                    </a>
                    <a href="https://youtube.com/@pitaq8539" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:youtube" width="40" height="40" style={{ color: "#ffffff", "--glow": "#f12d2d" } as any } />
                    </a>
                    <a href="https://github.com/PTOM76/" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:github" width="40" height="40" style={{ color: "#ffffff", "--glow": "#eeecec" } as any } />
                    </a>
                    <a href="https://pitan76.tumblr.com/links" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:tumblr" width="40" height="40" style={{ color: "#ffffff", "--glow": "#447bf1" } as any } />
                    </a>
                </div>
            </div>
        </div>

        <div className={styles.description}>
            <div className={styles.cardlist}>
                <a href="/works/" className={styles.card}>
                    <h2>Works</h2>
                    <p>
                        今までつくったものを紹介します。
                        <br />
                        <img src="/image/advanced_reborn.png" alt="works-banner" style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }} />
                        <br />
                        主にマイクラMOD/プラグインやWebサービス、ツールなど。
                        <br />
                        その他PukiWikiプラグインやソフトウェアの拡張機能などもこちらから。
                    </p>
                </a>

                <a href="https://blog.pitan76.net/" className={styles.card}>
                    <h2>Notes</h2>
                    <p>
                        さまざまなジャンルの記事を書いているぴたぶろぐです。
                        <br />
                        <img src="/image/pitablog.png" alt="blog-banner" style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }} />
                        <br />
                        現時点で運用しているブログですが、バラバラになっているのであまり更新できていません。
                    </p>
                </a>

                <a href="/links/" className={styles.card}>
                    <h2>Links</h2>
                    <p>
                        各種SNSや運営サイトなど関連リンク集です。
                        <br />
                        <img src="/image/modwiki.png" alt="links-banner" style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }} />
                        <br />
                        X、Misskeyなどのアカウントを記載しています。<br />
                        また、WikiChree.COMといったウィキのホスティングサービスも運営しています。
                    </p>
                </a>

                <a href="https://2023.pitan76.net/distribution/" className={styles.card}>
                    <h2>Distribution</h2>
                    <p>
                        配布しているプラグイン、ソフトウェアなどの一覧です。
                        <br />
                        <img src="/image/distribution.png" alt="distribution-banner" style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }} />
                        <br />
                        私が開発したもの、主にPukiWikiプラグインやマイクラMOD、プラグイン、MMDプラグイン、その他ツールなどの配布ページをまとめたものです。
                    </p>
                </a>
            </div>
            <div className={styles.yearLinks}>
                <a href="https://2023.pitan76.net/" target="_blank" rel="noopener noreferrer">≪ 2023</a>        
                <span>2027...? ≫</span>
            </div>
        </div>
    </div>
  )
}
