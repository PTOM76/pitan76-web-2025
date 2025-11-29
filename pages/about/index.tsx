import styles from '@/styles/page.module.css';
import styles2 from '@/styles/about.module.css'
import { Icon } from '@iconify/react';

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>$about</h1>

            <span className={styles.breadcrumb}>
                <a href="/">Top</a> / About
            </span>

            <div className={styles.cardlist}>
                <span className={styles.card}>
                    <h2>プロフィール</h2>
                    
                    <div className={styles2.profile}>
                        <h1>Pitan</h1>
                        <img id="profile-image" src="/image/profile-icon.jpg" alt="Profile Icon" data-lightbox="false" />
                        <p>
                            はじめまして、ぴたんです。<br />
                            Osaka, Japan / 2005年生まれの学生、現時点で大学生、20歳です。<br />
                            主にマイクラMODを開発していたり、他にも<a href="/works/">こちら</a>から様々な作品を紹介しています。<br />
                            気軽にTwitterなどで関わってくださると嬉しいです！
                        </p>
                    </div>

                    <pre>
$pitan = array(<br />
&nbsp;&nbsp;"name" =&gt; "Pitan",<br />
&nbsp;&nbsp;"yob" =&gt; 2005,<br />
&nbsp;&nbsp;"sex" =&gt; MALE,<br />
&nbsp;&nbsp;"isStudent" =&gt; true,<br />
&nbsp;&nbsp;"lang" =&gt; JA_JP,<br />
&nbsp;&nbsp;"proglang" =&gt; ["php", "java", "cpp"],<br />
&nbsp;&nbsp;"game" =&gt; "minecraft"<br />
);
                    </pre>

                    <p>
                        WikiChree.COM運営、Pitan76.NET管理者、とあるOSSの開発者、マイクラMod開発者 など<br />
                        部長経験あり、IPA試験合格あり、MT免許あり。<br />
                        将来、何をしたいかまったく決めていないのでまずいけど適当に活動してます。<br />
                    </p>

                    <h3>リンク</h3>
                    <div className={styles2.links}>
                        <a href="https://twitter.com/PitaQ_Modding" target="_blank" rel="noopener noreferrer" title="Twitter">
                            <Icon icon="mdi:twitter" width="40" height="40" style={{ color: "#ffffff", "--glow": "#2ca2eb" } as any } />
                        </a>
                        <a href="https://youtube.com/@pitaq8539" target="_blank" rel="noopener noreferrer" title="YouTube">
                            <Icon icon="mdi:youtube" width="40" height="40" style={{ color: "#ffffff", "--glow": "#f12d2d" } as any } />
                        </a>
                        <a href="https://github.com/PTOM76/" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <Icon icon="mdi:github" width="40" height="40" style={{ color: "#ffffff", "--glow": "#eeecec" } as any } />
                        </a>
                        <a href="https://pitan76.tumblr.com/" target="_blank" rel="noopener noreferrer" title="Tumblr">
                            <Icon icon="mdi:tumblr" width="40" height="40" style={{ color: "#ffffff", "--glow": "#447bf1" } as any } />
                        </a>
                        <a href="/links/" title="各種リンク">
                            <Icon icon="mdi:dots-horizontal" width="40" height="40" style={{ color: "#ffffff", "--glow": "#aaaaaa" } as any } />
                        </a>
                    </div>

                    詳細は<a href="/links/">こちら</a>からどうぞ。

                    <h3>過去のプロフィール</h3>
                    <ul>
                        <li><a href="https://2023.pitan76.net/" target="_blank" rel="noopener noreferrer">2023年のプロフィール</a></li>
                        <li><a href="https://pkom.pitan76.net/?K" target="_blank" rel="noopener noreferrer">2020年のプロフィール</a></li>
                    </ul>
                </span>

                <span className={styles.card}>
                    <h2>スキル</h2>
                    <h3>プログラミング言語</h3>
                    <ul>
                        <li>Java (マイクラMod開発/ソフトウェア)</li>
                        <li>PHP (バックエンド/ソフトウェア)</li>
                        <li>C/C++ (組み込み/学習/ソフトウェア)</li>
                        <li>JavaScript/TypeScript (フロントエンド)</li>
                        <li>C# (ゲーム開発/ソフトウェア)</li>
                    </ul>

                    <h3>フレームワーク</h3>
                    なし、あまり使えこなせていません。<br />
                    生で書く派です（笑）(このサイトを除いて)

                    <h3>ツール</h3>
                    <ul>
                        <li>Visual Studio Code (汎用エディタ)</li>
                        <li>Visual Studio 2022 (Winアプリエディタ)</li>
                        <li>IntelliJ IDEA (Java/Kotlinエディタ)</li>
                        <li>Vim (テキストエディタ)</li>
                        <li>EmEditor (テキストエディタ)</li>
                        <li>Git/GitHub (バージョン管理)</li>
                        <li>Apache (Webサーバ)</li>
                        <li>Docker (コンテナ)</li>
                        <li>Cloudflare (CDN/プロキシ)</li>
                        <li>Unity/GodotEngine (ゲームエンジン)</li>
                        <li>XAMPP (ローカルサーバ)</li>
                        <li>Debian/CentOS (Linux)</li>
                        <li>FireAlpaca (ペイント)</li>
                        <li>PukiWiki (CMS)</li>
                        <li>Core Server (レンタルサーバ)</li>
                        <li>Amazon Web Services (クラウド)</li>
                        <li>Edge/Chrome (ブラウザ)</li>
                        <li>Windows/MacOS/CentOS/Debian/iOS/Android (OS)</li>
                        <li>AviUtl (動画編集)</li>
                        <li>Reaper (音声編集)</li>
                        <li>OBS Studio (画面録画)</li>
                        <li>Qiita (技術情報共有サイト)</li>
                        <li>ChatGPT/Gemini (LLM AI)</li>
                        <li>FabricMC (マイクラ ModLoader)</li>
                        <li>GitHub Pages (静的ホスティング)</li>
                    </ul>

                    <br />
                    こちらはGitHubの統計情報を表示しています。<br />
                    <a href="https://github-readme-stats.vercel.app/api/top-langs/?username=PTOM76&theme=transparent&hide_border=true&langs_count=11&hide=HTML,Batchfile,Shell,CSS,XSLT,Makefile,C">
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=PTOM76&theme=transparent&hide_border=true&langs_count=11&hide=HTML,Batchfile,Shell,CSS,XSLT,Makefile,C" alt="Top programming languages" />
                    </a>
                </span>

                <span className={styles.card}>
                    <h2>サイトについて</h2>
                    このサイトはNext.js、GitHub Pagesを用いて構築しました。<br />
                    主に作ったものの紹介などに使おうと考えています。
                    
                    <h3>バナー</h3>
                    ご自由にどうぞ、使うことはないと思いますが、昔ながらのバナーってなんだかロマンがあるのでなんとなくで作ってみました。<br /><br />

                    banner88x31.png<br />
                    <a href="https://www.pitan76.net/" target="_blank" rel="noopener noreferrer">
                        <img src="/image/banner88x31.png" data-lightbox="false" />
                        Pitan76.NET
                    </a>
                    <br />
                    <br />

                    banner200x40.png<br />
                    <a href="https://www.pitan76.net/" target="_blank" rel="noopener noreferrer">
                        <img src="/image/banner200x40.png" data-lightbox="false" />
                        Pitan76.NET - Digital Works!
                    </a>
                </span>

                <span className={styles.nonCard}>
                    banner88x31.png: <br />
                    <pre>
&lt;a href="https://www.pitan76.net/" target="_blank"&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="https://www.pitan76.net/image/banner88x31.png" /&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;Pitan76.NET<br />
&lt;/a&gt;
                    </pre>
                    <br />
                    banner200x40.png: <br />
                    <pre>
&lt;a href="https://www.pitan76.net/" target="_blank"&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="https://www.pitan76.net/image/banner200x40.png" /&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;Pitan76.NET - Digital Works!<br />
&lt;/a&gt;
                    </pre>
                </span>

                <span className={styles.card}>
                    <h3>技術情報</h3>
                    <ul>
                        <li>フレームワーク<br />→ Next.js/React</li>
                        <li>コーディング<br />→ TypeScript</li>
                        <li>ホスティング<br />→ GitHub Pages</li>
                        <li>ドメイン<br />→ Cloudflare Domains</li>
                        <li>プロキシ<br />→ Cloudflare</li>
                        <li>フォント<br />→ Titillium Web, Murecho</li>
                        <li>CI/CD<br />→ GitHub Actions</li>
                        <li>ソースコード<br />→ <a href="https://github.com/PTOM76/pitan76-web-2025" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li>ライセンス<br />→ MIT License</li>
                    </ul>
                </span>

                <span className={styles.card}>
                    <h2>GPG公開鍵</h2>
                    <ul>
                        <li>ファイル: <br />→ <a href="/pgp/public.asc" target="_blank" rel="noopener noreferrer">public.asc</a></li>
                        <li>フィンガープリント: <br />→ <code>0B83 204A 8E18 106D 51BE  9E05 FD1F 668C 83C3 B9F5</code></li>
                    </ul>
                </span>

                <span className={styles.card}>
                    <h2>どうでもいい情報</h2>

                    <h3>過去の名前</h3>
                    <ul>
                        <li>かお/Kao_766 (〜2018年)</li>
                        <li>ボタピカ/Botapica (2018年〜2019年)</li>
                        <li>ぴたん/Pitan, Kee/K, かおなろろ/Kao_766 (2019年〜2020年)</li>
                        <li>ぴたん/Pitan (2020年〜現在)</li>
                    </ul>
                    <br />
                    かつてはKao_766やBotapica、Kなどの名前を使っていました。<br />
                    今でも、Kao_766を名乗ることがあります。
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
            </div>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            title: 'Links'
        }
    };
}
