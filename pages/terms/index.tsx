import styles from '@/styles/page.module.css';

export default function TermsPage() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>$terms</h1>
        
        <span className={styles.breadcrumb}>
            <a href="/">Top</a> / Terms of Service & Privacy Policy
        </span>

        <h1>利用規約</h1>
        <div className={styles.cardlist}>
            <span className={styles.card}>
                <h2>知的財産権</h2>
                <p>
                    当サイト(Pitan76.NET) の<a href="https://github.com/PTOM76/pitan76-web-2025" target="_blank" rel="noopener noreferrer">ソースコード</a>はMITライセンスとします。<br />
                    特別な記述がない限り、文章や画像などのコンテンツもMITライセンスが適用されます。<br />
                    ただし、悪質な転載、利用はしないでください。
                    <br />
                    ただし、配布物の著作権はそれぞれのライセンスに従ってください。<br />
                </p>
            </span>

            <span className={styles.card}>
                <h2>禁止事項</h2>
                <p>
                    当サイトのコンテンツを利用するにあたり、以下の行為を禁止します。<br />
                </p>
                <ul>
                    <li>法令に違反する行為</li>
                    <li>当サイトまたは第三者の権利を侵害する行為</li>
                    <li>当サイトの運営を妨害する行為</li>
                </ul>
            </span>

            <span className={styles.card}>
                <h2>連絡手段</h2>
                <p>
                    当ドメイン内のサイト、サービスに問題がある場合、<a href="/contact/">お問い合わせページ</a>からご連絡ください。<br />
                </p>
            </span>

        </div>

        <h1>プライバシーポリシー</h1>
        <div className={styles.cardlist}>
            <span className={styles.card}>
                <h2>免責事項</h2>
                <p>
                    当サイトで配布されているファイルや外部リンクからのダウンロードやアクセスは自己責任で行ってください。<br />
                    外部リンク先の内容については一切責任を負いかねます。
                </p>
            </span>

            <span className={styles.card}>
                <h2>アクセス解析</h2>
                <p>
                    当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
                    <br />このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
                    このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
                    この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
                    この規約に関して、詳しくは<a target="_blank" href="https://marketingplatform.google.com/about/analytics/terms/jp/">こちら</a>をクリックしてください。
                </p>
            </span>
        </div>
    </div>
  )
}

export async function getStaticProps() {
    return {
        props: {
            title: 'Terms of Service & Privacy Policy'
        }
    };
}
