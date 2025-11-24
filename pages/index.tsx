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
                        <Icon icon="mdi:twitter" width="40" height="40" style={{ color: "#ffffff", filter: "drop-shadow(0 0 6px #2fafff)" }} />
                    </a>
                    <a href="https://youtube.com/@pitaq8539" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:youtube" width="40" height="40" style={{ color: "#ffffff", filter: "drop-shadow(0 0 6px #ff2f2f)" }} />
                    </a>
                    <a href="https://github.com/PTOM76/" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:github" width="40" height="40" style={{ color: "#ffffff", filter: "drop-shadow(0 0 6px #ffffff)" }} />
                    </a>
                    <a href="https://pitan76.tumblr.com/links" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:tumblr" width="40" height="40" style={{ color: "#ffffff", filter: "drop-shadow(0 0 6px #417dff)" }} />
                    </a>
                </div>
            </div>
        </div>

        <div className={styles.description}>
            <div className={styles.cardlist}>
                <a href="/works" className={styles.card}>
                    <h2>Works</h2>
                    <p>
                        今までつくったものを紹介します
                    </p>
                </a>

                <a href="/blog" className={styles.card}>
                    <h2>Blog</h2>
                    <p>
                        技術系を中心に記事を書いています
                    </p>
                </a>
                <a href="/links" className={styles.card}>
                    <h2>Links</h2>
                    <p>
                        SNSや運営サイトなど関連リンク集です
                    </p>
                </a>
            </div>
            Copyright © 2021-2025 Pitan | E-mail admin@pitan76.net
        </div>
    </div>
  )
}
