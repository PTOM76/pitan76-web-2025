import { Icon } from "@iconify/react";
import styles from '../styles/top.module.css';

export default function TopPage() {
    const onClickDownArrow = () => {
        const descEle = document.querySelector(`.${styles.description}`);
        if (descEle) {
            const rect = descEle.getBoundingClientRect();
            const offset = window.pageYOffset || document.documentElement.scrollTop;
            const top = rect.top + offset - 20;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    let angle = 0;
    const rotateProfileImage = () => {
        const img = document.getElementById('profile-image');
        if (!img) return;

        angle += 360;

        img.style.transition = 'transform 1s ease-in-out, filter 1s ease-in-out';
        img.style.transform = `rotateZ(${angle}deg)`;
        img.style.filter = 'sepia(1) hue-rotate(45deg) saturate(5)';

        setTimeout(() => {
            img.style.filter = 'none';
        }, 500);
    };

    return (
        <div className={styles.container}>
            <div className={styles.profileContainer}>
                <div className={styles.background}></div>
                <div className={styles.profile}>
                    <h1>Pitan</h1>
                    <img id="profile-image" src="/image/profile-icon.jpg" alt="Profile Icon" onClick={rotateProfileImage} data-lightbox="false" />
                    <p>
                        Bug-Creator のぴたんです<br />
                        MODやWebなどを開発している技術系が好きな機械弱者
                        -&gt; <a href="/about/">[詳細]</a>
                        <br />
                    </p>

                    <div className={styles.links}>
                        <a href="https://twitter.com/PitaQ_Modding" target="_blank" rel="noopener noreferrer" title="Twitter">
                            <Icon icon="mdi:twitter" width="40" height="40" style={{ color: "#ffffff", "--glow": "#2ca2eb" } as any} />
                        </a>
                        <a href="https://youtube.com/@pitaq8539" target="_blank" rel="noopener noreferrer" title="YouTube">
                            <Icon icon="mdi:youtube" width="40" height="40" style={{ color: "#ffffff", "--glow": "#f12d2d" } as any} />
                        </a>
                        <a href="https://github.com/PTOM76/" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <Icon icon="mdi:github" width="40" height="40" style={{ color: "#ffffff", "--glow": "#eeecec" } as any} />
                        </a>
                        <a href="https://pitan76.tumblr.com/" target="_blank" rel="noopener noreferrer" title="Tumblr">
                            <Icon icon="mdi:tumblr" width="40" height="40" style={{ color: "#ffffff", "--glow": "#447bf1" } as any} />
                        </a>
                        <a href="/links/" title="各種リンク">
                            <Icon icon="mdi:dots-horizontal" width="40" height="40" style={{ color: "#ffffff", "--glow": "#aaaaaa" } as any} />
                        </a>
                    </div>
                </div>

                <div className={styles.downArrow} onClick={onClickDownArrow} title='下にスクロールする'>
                    <Icon icon="mdi:chevron-down" width="48" height="48" style={{ color: "#ffffff8f" } as any} />
                </div>
            </div>

            <div className={styles.description}>
                <div className={styles.cardlist}>
                    <a href="/works/" className={styles.card} title="作品ページ">
                        <h2>Works</h2>
                        <p>
                            今までつくったものを紹介します。
                            <br />
                            <img src="/image/mcmod/advancedreborn.png" alt="works-banner" style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }} data-lightbox="false" />
                            <br />
                            主にマイクラMOD/プラグインやWebサービス、ツールなど。
                            <br />
                            その他PukiWikiプラグインやソフトウェアの拡張機能などもこちらから。
                        </p>
                    </a>

                    <a href="https://blog.pitan76.net/" className={styles.card} title="ブログサイト">
                        <h2>Notes</h2>
                        <p>
                            さまざまなジャンルの記事を書いているぴたぶろぐです。
                            <br />
                            <img src="/image/pitablog.png" alt="blog-banner" style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }} data-lightbox="false" />
                            <br />
                            現時点で運用しているブログですが、バラバラになっているのであまり更新できていません。
                        </p>
                    </a>

                    <a href="/links/" className={styles.card} title="各種リンク">
                        <h2>Links</h2>
                        <p>
                            各種SNSや運営サイトなど関連リンク集です。
                            <br />
                            <img src="/image/modwiki.png" alt="links-banner" style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }} data-lightbox="false" />
                            <br />
                            X、Misskeyなどのアカウントを記載しています。<br />
                            また、WikiChree.COMといったウィキのホスティングサービスも運営しています。
                        </p>
                    </a>

                    <a href="https://2023.pitan76.net/distribution/" className={styles.card} title="配布ページ一覧">
                        <h2>Distribution</h2>
                        <p>
                            配布しているプラグイン、ソフトウェアなどの一覧です。
                            <br />
                            <img src="/image/distribution.png" alt="distribution-banner" style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }} data-lightbox="false" />
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
