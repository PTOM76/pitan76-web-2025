import styles from '../styles/top.module.css'
import { Icon } from "@iconify/react";

export default function Top() {
  return (
    <div className={styles.container}>
        <div className={styles.profileContainer}>
            <div className={styles.background}></div>
            <div className={styles.profile}>
                <h1>Pitan</h1>
                <img src="/profile-icon.jpg" alt="Profile Icon" />
                <p>
                    Bug-Creator のぴたんです<br />
                    MODやWebなどを開発しており、機械弱者ですが、技術系が好きです<br />
                    <br />
                </p>

                <div className={styles.links}>
                    <a href="https://twitter.com/PitaQ_Modding" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:twitter" width="40" height="40" style={{ color: "#ffffff", "--glow": "#2ca2eb" }} />
                    </a>
                    <a href="https://youtube.com/@pitaq8539" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:youtube" width="40" height="40" style={{ color: "#ffffff", "--glow": "#f12d2d" }} />
                    </a>
                    <a href="https://github.com/PTOM76/" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:github" width="40" height="40" style={{ color: "#ffffff", "--glow": "#eeecec" }} />
                    </a>
                    <a href="https://pitan76.tumblr.com/links" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:tumblr" width="40" height="40" style={{ color: "#ffffff", "--glow": "#447bf1" }} />
                    </a>
                </div>
            </div>
        </div>

        <div className={styles.description}>
            <div className={styles.cardlist}>
                <a href="/works" className={styles.card}>
                    <h2>Works</h2>
                    <p>
                        今までつくったものを紹介します。
                        <br />
                        <img src="/advanced_reborn.png" alt="works-banner" style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }} />
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
                        <img src="/pitablog.png" alt="blog-banner" style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }} />
                        <br />
                        現時点で運用しているブログですが、バラバラになっているのであまり更新できていません。
                    </p>
                </a>

                <a href="/links" className={styles.card}>
                    <h2>Links</h2>
                    <p>
                        各種SNSや運営サイトなど関連リンク集です。
                        <br />
                        <img src="/modwiki.png" alt="links-banner" style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }} />
                        <br />
                        X、Misskeyなどのアカウントを記載しています。<br />
                        また、WikiChree.COMといったウィキのホスティングサービスも運営しています。
                    </p>
                </a>
            </div>
            <div className={styles.footer}>
                <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a> | <a href="/changelog">Change Log</a>
                <br />
                Copyright © 2021-2025 Pitan | E-mail admin@pitan76.net
                <br />
                <div className={styles.yearLinks}>
                    <a href="https://2023.pitan76.net" target="_blank" rel="noopener noreferrer">≪ 2023</a>        
                    <span>2027...? ≫</span>
                </div>
            </div>
        </div>
    </div>
  )
}
