import styles from '@/styles/page.module.css';

export default function WorksPaintPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>$paint</h1>

            <span className={styles.breadcrumb}>
                <a href="/">root</a>/<a href="../">works</a>/paint
            </span>

            <div className={styles.cardlist}>
                <span className={styles.card}>
                    <h2>オリキャラ3 - 2026.01</h2>
                    <img src="/image/paint/original-chara-3_2.png" alt="オリキャラ3 斜顔" className={styles.paint} />
                    <img src="/image/paint/original-chara-3_1.png" alt="オリキャラ3 正面" className={styles.paint} />
                    <img src="/image/paint/original-chara-3_3.jpg" alt="オリキャラ3 正面withメガネ" className={styles.paint} />
                    <img src="/image/paint/original-chara-3_4.png" alt="オリキャラ3 斜顔2" className={styles.paint} />
                    <p> 
                        猫耳少年のオリジナルキャラクタです。相変わらず線が雑ですね...w
                    </p>
                </span>

                <span className={styles.card}>
                    <h2>ぴたねこ - 2025.09</h2>
                    <img src="/image/profile-icon.jpg" alt="ぴたねこ" className={styles.paint} />
                    <p>
                        論理ゲート耳少年オリキャラを改変したやつです。現時点(2025-2026)でのPitaQのアイコンです。
                    </p>
                </span>

                <span className={styles.card}>
                    <h2>論理ゲート耳少年オリキャラ - 2025.08</h2>
                    <img src="/image/paint/logic-gate-ears-boy_1.jpg" alt="論理ゲート耳少年オリキャラ 正面" className={styles.paint} />
                    <img src="/image/paint/logic-gate-ears-boy_2.png" alt="論理ゲート耳少年オリキャラ 斜顔" className={styles.paint} />
                    <img src="/image/paint/logic-gate-ears-boy_3.png" alt="論理ゲート耳少年オリキャラ 横顔" className={styles.paint} />
                    <p>
                        猫耳を論理回路の記号、AND回路、NOT回路にして目を0と1にした少年のオリジナルキャラクタです。
                    </p>
                </span>

                <span className={styles.card}>
                    <h2>Atri - 2024.10</h2>
                    <img src="/image/paint/atri.png" alt="Atri" className={styles.paint} />
                    <p>
                        ATRI -My Dear Moments- の登場人物であるアトリです。
                    </p>
                </span>

                <span className={styles.card}>
                    <h2>カウンター用オリキャラ - 2024.10</h2>
                    <img src="/image/paint/counter-original-chara.png" alt="カウンター用オリキャラ" className={styles.paint} />
                    <p>
                        GitHubのプロフィールにてスターをカウントするために使っていたオリジナルキャラです。
                    </p>
                </span>

                <p>
                    これ以前に描いた絵って全部紛失してしまったのでわかりません。今も下手ですが、もっと下手な頃もあったはずなんですけど...
                </p>
            </div>
        </div>
    )
};
