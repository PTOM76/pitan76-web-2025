import worksDataJson from "@/public/api/works/list.json" assert { type: "json" };
import styles from '@/styles/page.module.css';
import { Icon } from '@iconify/react';

export default function WorksPage() {
    let worksData: any[] = worksDataJson; // list.json

    const mcmods = worksData.filter(d => d.category === "mcmod");
    const repomods = worksData.filter(d => d.category === "repomod");
    const pukiwikiplugins = worksData.filter(d => d.category === "pukiwiki");
    const pukiwikiskins = worksData.filter(d => d.category === "pukiwikiskin");
    const mmdplugins = worksData.filter(d => d.category === "mmdplugin");
    const chromeexts = worksData.filter(d => d.category === "chrome-extension");

    // pitan76.netならば相対パスにする
    worksData.forEach(data => {
        const custom = data.custom ?? {};
        const images: string[] = (custom.images as string[]) ?? [];

        images.forEach((url: string, index: number) => {
            if (!url.startsWith('https://www.pitan76.net/image/')) return;
            images[index] = url.replace('https://www.pitan76.net/image/', '/image/');
        });
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>$works</h1>

            <span className={styles.breadcrumb}>
                <a href="/">root</a>/works
            </span>

            <div className={styles.noticebox}>
                旧サイトの作品ページは<a href="https://2023.pitan76.net/works.html" target="_blank" rel="noopener noreferrer">こちら</a>、もしくは<a href="https://2023.pitan76.net/distribution/" target="_blank" rel="noopener noreferrer">配布ページ一覧</a>から
            </div>

            <div className={styles.cardlist}>
                <span className={styles.card}>
                    <h2>MC Mods</h2>
                    Minecraft Java Edition向けのModを開発、配布しています。<br />
                    以下のサイトにてダウンロードできます。<br />
                    <ul>
                        <li><a href="https://www.curseforge.com/members/pitan76/projects">CurseForge</a></li>
                        <li><a href="https://modrinth.com/user/pitan76">Modrinth</a></li>
                    </ul>
                    <br />
                    ※かなり数が多いため、ここでは記載されていないModもあります。<br />

                    {mcmods.map((data, index) => {
                        const custom = data.custom ?? {};
                        const images: string[] = (custom.images as string[]) ?? [];
                        const tag: string[] = data.tag ?? [];
                        const links: any = data.site ?? {};

                        return (
                            <div key={index}>
                                <h3>
                                    <a href={data.url} target="_blank" rel="noopener noreferrer">{data.name}</a>&nbsp;
                                    {tag.includes('fabric') && <img src="/image/fabric.png" style={{ display: 'inline', width: '30px', height: '30px', marginTop: '-5px' }} title="FabricMC" data-lightbox="false" ></img>}
                                    {tag.includes('forge') && <img src="/image/forge.png" style={{ display: 'inline', width: '30px', height: '30px', marginTop: '-5px' }} title="Minecraft Forge" data-lightbox="false" ></img>}
                                    {tag.includes('neoforge') && <img src="/image/neoforge.png" style={{ display: 'inline', width: '30px', height: '30px', marginTop: '-5px' }} title="NeoForge" data-lightbox="false" ></img>}
                                </h3>

                                <p style={{ marginBottom: '8px' }} dangerouslySetInnerHTML={{ __html: data.description }} />

                                {images.length > 0 && (
                                    <a href={images[0]} target="_blank" rel="noopener noreferrer">
                                        <img src={images[0]} alt={`Screenshot of ${data.name}`} style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />
                                    </a>
                                )}
                                {Object.keys(links).length > 0 && (
                                    <div>
                                        {links.curseforge && (
                                            <a href={links.curseforge} target="_blank" rel="noopener noreferrer">
                                                <div className={styles.curseforgeIcon} title='CurseForge'></div>
                                            </a>
                                        )}
                                        {links.modrinth && (
                                            <a href={links.modrinth} target="_blank" rel="noopener noreferrer">
                                                <div className={styles.modrinthIcon} title='Modrinth'></div>
                                            </a>
                                        )}
                                        {links.wiki && (
                                            <a href={links.wiki} target="_blank" rel="noopener noreferrer">
                                                <div className={styles.wikichreeIcon} title='ウィキ'></div>
                                            </a>
                                        )}
                                        {links.github && (
                                            <a href={links.github} target="_blank" rel="noopener noreferrer">
                                                <div className={styles.githubIcon} title='ソースコード'></div>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </span>

                <span className={styles.card}>
                    <h2>その他Mod/プラグイン/拡張機能など</h2>

                    {repomods.map((data, index) => {
                        const custom = data.custom ?? {};
                        const images: string[] = (custom.images as string[]) ?? [];
                        const tag: string[] = data.tag ?? [];
                        const links: any = data.site ?? {};
                        return (
                            <div key={index}>
                                <h3>
                                    <a href={data.url} target="_blank" rel="noopener noreferrer">{data.name}</a>&nbsp;
                                    {tag.includes('r-e-p-o') && <img src="/image/repo.png" style={{ display: 'inline', width: '30px', height: '30px', marginTop: '-5px' }} title="R.E.P.O" data-lightbox="false" ></img>}
                                </h3>
                                <p style={{ marginBottom: '8px' }} dangerouslySetInnerHTML={{ __html: data.description }} />
                                {images.length > 0 && (
                                    <a href={images[0]} target="_blank" rel="noopener noreferrer">
                                        <img src={images[0]} alt={`Screenshot of ${data.name}`} style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />
                                    </a>
                                )}
                                {Object.keys(links).length > 0 && (
                                    <div>
                                        {links.thunderstore && (
                                            <a href={links.thunderstore} target="_blank" rel="noopener noreferrer">
                                                <div className={styles.thunderstoreIcon} title='Thunderstore'></div>
                                            </a>
                                        )}
                                        {links.nexusmods && (
                                            <a href={links.nexusmods} target="_blank" rel="noopener noreferrer">
                                                <div className={styles.nexusmodsIcon} title='Nexus'></div>
                                            </a>
                                        )}
                                        {links.github && (
                                            <a href={links.github} target="_blank" rel="noopener noreferrer">
                                                <div className={styles.githubIcon} title='ソースコード'></div>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {chromeexts.map((data, index) => {
                        const custom = data.custom ?? {};
                        const images: string[] = (custom.images as string[]) ?? [];
                        const tag: string[] = data.tag ?? [];
                        const links: any = data.site ?? {};
                        return (
                            <div key={index}>
                                <h3>
                                    <a href={data.url} target="_blank" rel="noopener noreferrer">{data.name}</a>&nbsp;
                                    {tag.includes('chrome') && <img src="/image/chrome.png" style={{ display: 'inline', width: '30px', height: '30px', marginTop: '-5px' }} title="R.E.P.O" data-lightbox="false" ></img>}
                                </h3>
                                <p style={{ marginBottom: '8px' }} dangerouslySetInnerHTML={{ __html: data.description }} />
                                {images.length > 0 && (
                                    <a href={images[0]} target="_blank" rel="noopener noreferrer">
                                        <img src={images[0]} alt={`Screenshot of ${data.name}`} style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />
                                    </a>
                                )}
                                {Object.keys(links).length > 0 && (
                                    <div>
                                        {links.chromewebstore && (
                                            <a href={links.chromewebstore} target="_blank" rel="noopener noreferrer">
                                                <div className={styles.chromewebstoreIcon} title='Chrome Web Store'></div>
                                            </a>
                                        )}
                                        {links.github && (
                                            <a href={links.github} target="_blank" rel="noopener noreferrer">
                                                <div className={styles.githubIcon} title='ソースコード'></div>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    <h3>一覧</h3>
                    <ul>
                        <li>
                            <strong><a href="https://github.com/PTOM76/reaper-video-script" target="_blank" rel="noopener noreferrer">Reaper Video Script</a></strong><br />
                            REAPER動画プロセッサ用JSFXスクリプト。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/mcpitanlib-intellij-plugin" target="_blank" rel="noopener noreferrer">MCPitanLib IntelliJ Plugin</a></strong><br />
                            MCPitanLib用のテンプレから自動でModの開発環境を構築するIntelliJプラグイン。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/bukkit-plugins/clearvehicle" target="_blank" rel="noopener noreferrer">ClearVehicle</a></strong><br />
                            乗り物(トロッコ、ボートなど)の数を制限するBukkitプラグイン。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/McSEmeGUI" target="_blank" rel="noopener noreferrer">McSEmeGUI</a></strong><br />
                            初めてつくったBukkitプラグイン、GUIでマイクラのコンソールを操作できる。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/ellipsiSk" target="_blank" rel="noopener noreferrer">ellipsiSk</a></strong><br />
                            試しにつくったSkriptプラグイン。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/SkVaniject" target="_blank" rel="noopener noreferrer">SkVaniject</a></strong><br />
                            Skellettで代用できるらしいです、Objective操作のSkriptプラグイン。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/Skript" target="_blank" rel="noopener noreferrer">Skriptのスクリプト群</a></strong><br />
                            作成したSkriptのスクリプト集。
                        </li>
                    </ul>
                </span>

                <span className={styles.card}>
                    <h2>PukiWikiプラグイン/スキン</h2>

                    <a href="https://github.com/PTOM76/PukiWiki-Plugins/" title="ソースコード" target="_blank" rel="noopener noreferrer">
                        <div className={styles.githubIcon} style={{ float: 'right' }}></div>
                    </a>

                    {pukiwikiplugins.map((data, index) => {
                        const custom = data.custom ?? {};
                        const images: string[] = (custom.images as string[]) ?? [];
                        const links: any = data.site ?? {};

                        return (
                            <div key={index}>
                                <h3>
                                    <a href={data.url} target="_blank" rel="noopener noreferrer">{data.name}</a>&nbsp;
                                </h3>
                                <p style={{ marginBottom: '8px' }} dangerouslySetInnerHTML={{ __html: data.description }} />
                                {images.length > 0 && (
                                    <a href={images[0]} target="_blank" rel="noopener noreferrer">
                                        <img src={images[0]} alt={`Screenshot of ${data.name}`} style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />
                                    </a>
                                )}
                                {Object.keys(links).length > 0 && (
                                    <div>
                                        <a href={data.url} target="_blank" rel="noopener noreferrer" title='ダウンロード'>
                                            <Icon icon="mdi:download" className={styles.downloadIcon} width={30} height={30}></Icon>
                                        </a>

                                        {links.github && (
                                            <a href={links.github} target="_blank" rel="noopener noreferrer">
                                                <div className={styles.githubIcon} title='ソースコード'></div>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {pukiwikiskins.map((data, index) => {
                        const custom = data.custom ?? {};
                        const images: string[] = (custom.images as string[]) ?? [];
                        const links: any = data.site ?? {};
                        return (
                            <div key={index}>
                                <h3>
                                    <a href={data.url} target="_blank" rel="noopener noreferrer">{data.name}</a>&nbsp;
                                </h3>
                                <p style={{ marginBottom: '8px' }} dangerouslySetInnerHTML={{ __html: data.description }} />
                                {images.length > 0 && (
                                    <a href={images[0]} target="_blank" rel="noopener noreferrer">
                                        <img src={images[0]} alt={`Screenshot of ${data.name}`} style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />
                                    </a>
                                )}
                                {Object.keys(links).length > 0 && (
                                    <div>
                                        {links.github && (
                                            <a href={links.github} target="_blank" rel="noopener noreferrer">
                                                <div className={styles.githubIcon} title='ソースコード'></div>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}


                    <h3>一覧</h3>
                    <ul>
                        <li>
                            <strong><a href="https://wikichree.com/?WikiChree.COM開発プラグイン" target="_blank" rel="noopener noreferrer">WikiChree.COM開発プラグイン群</a></strong><br />
                            WikiChree.COMオリジナルのPukiWikiプラグイン群。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/PukiBot-Py" target="_blank" rel="noopener noreferrer">PukiBot-Py</a></strong><br />
                            PukiWikiのボットを作成するためのPythonライブラリ。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/Mini-PukiBot-Py" target="_blank" rel="noopener noreferrer">Mini-PukiBot-Py</a></strong><br />
                            PukiBot-Pyの軽量版ライブラリ。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/PukiBot-Java" target="_blank" rel="noopener noreferrer">PukiBot-Java</a></strong><br />
                            PukiWikiのボットを作成するためのJavaライブラリ。
                        </li>
                    </ul>
                </span>

                <span className={styles.card}>
                    <h2>MMDプラグイン</h2>
                    ほとんどのMMDプラグインはMMDPluginを前提とします。<br />

                    {mmdplugins.map((data, index) => {
                        const custom = data.custom ?? {};
                        const images: string[] = (custom.images as string[]) ?? [];
                        const links: any = data.site ?? {};

                        return (
                            <div key={index}>
                                <h3>
                                    <a href={data.url} target="_blank" rel="noopener noreferrer">{data.name}</a>&nbsp;
                                </h3>
                                <p style={{ marginBottom: '8px' }} dangerouslySetInnerHTML={{ __html: data.description }} />
                                {images.length > 0 && (
                                    <a href={images[0]} target="_blank" rel="noopener noreferrer">
                                        <img src={images[0]} alt={`Screenshot of ${data.name}`} style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />
                                    </a>
                                )}
                                {Object.keys(links).length > 0 && (
                                    <div>
                                        {links.github && (
                                            <a href={links.github} target="_blank" rel="noopener noreferrer">
                                                <div className={styles.githubIcon} title='ソースコード'></div>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </span>

                <span className={styles.card}>
                    <h2>ツール/ソフトウェア</h2>
                    <ul>
                        <li>
                            <strong><a href="https://github.com/PTOM76/MD2PKWK" target="_blank" rel="noopener noreferrer">MD2PKWK (PHP/CLI)</a></strong><br />
                            PHP-CLIで動作するMarkdown形式からPukiWiki形式に変換するツール。<br />
                            PHPではあるが、CLIであることに注意、Webサーバでは基本的に動作しない。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/Git-Account-Manager" target="_blank" rel="noopener noreferrer">Git Account Manager (Windows)</a></strong><br />
                            Gitアカウントを複数管理するためのWindows向けの支援ツール。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/discord-turnstile-verify-bot" target="_blank" rel="noopener noreferrer">Turnstile Verify (Discord Bot)</a></strong><br />
                            Cloudflare TurnstileでDiscordのユーザ認証を行うためのBot。PHPで動作。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/PlayerRealmsServerChecker" target="_blank" rel="noopener noreferrer">PlayerRealms Server Checker (Discord Bot)</a></strong><br />
                            Player Realmsの各サーバー情報を取得して表示するDiscordのボット。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/png-to-8bit-png-converter-php" target="_blank" rel="noopener noreferrer">PNG to 8bit PNG Converter (PHP/Web)</a></strong><br />
                            PNG画像を8bit色のPNG画像に変換するPHP製のWebツール。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/my-tools-tool" target="_blank" rel="noopener noreferrer">My Tools Tool (Windows)</a></strong><br />
                            PukiWikiのmytoolsプラグインで動くツールの詰め合わせ。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/MMDPluginInstallManager" target="_blank" rel="noopener noreferrer">MMD Plugin Install Manager (フォーク版)</a></strong><br />
                            oigami様のMMD Plugin Install Managerを現時点で最新のv9.32に対応させたフォーク版。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/PaperMCDownloader" target="_blank" rel="noopener noreferrer">PaperMC Downloader (Java)</a></strong><br />
                            PaperMCのサーバーのダウンロード支援ツール。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/MyBlogs" target="_blank" rel="noopener noreferrer">MyBlogs (PHP/Web)</a></strong><br />
                            PHP製のシンプルなブログシステム。
                        </li>
                    </ul>
                </span>

                <span className={styles.card}>
                    <h2>Webサービス</h2>
                    いくつかのWebサービス/ツールを公開しています。<br />

                    <h3>WikiChree.COM</h3>
                    無料で使えるPukiWikiホスティングサービス。<br />
                    <img src="/image/web/wikichree.png" alt="WikiChree.COM スクリーンショット" style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }} title='WikiChree.COM'>
                        -&gt; <a href="https://wikichree.com/" target="_blank" rel="noopener noreferrer">https://wikichree.com/</a>
                    </span>

                    <h3>DokuFarm</h3>
                    無料で使えるDokuWikiホスティングサービス。<br />
                    <img src="/image/web/dokufarm.png" alt="DokuFarm スクリーンショット" style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }} title='DokuFarm'>
                        -&gt; <a href="https://doku.wikichree.com/" target="_blank" rel="noopener noreferrer">https://doku.wikichree.com/</a>
                    </span>

                    <h3>ボ対検索ツール</h3>
                    ボイパ対決という音MADに特化した検索ツール。<br />
                    <img src="/image/web/vps-search.png" alt="ボ対検索ツール スクリーンショット" style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }} title='ボ対検索ツール'>
                        -&gt; <a href="https://vps-search.pitan76.net/" target="_blank" rel="noopener noreferrer">https://vps-search.pitan76.net/</a>
                    </span>

                    <h3>一覧</h3>
                    <ul>
                        <li>
                            <strong><a href="https://wikichree.com/" target="_blank" rel="noopener noreferrer">WikiChree.COM</a></strong><br />
                            無料で使えるウィキ、PukiWikiのホスティングサービス。
                        </li>
                        <li>
                            <strong><a href="https://vps-search.pitan76.net/" target="_blank" rel="noopener noreferrer">ボ対検索ツール</a></strong><br />
                            ボイパ対決という音MADに特化した検索ツール。
                        </li>
                        <li>
                            <strong><a href="https://psnverse.pitan76.net/" target="_blank" rel="noopener noreferrer">Psnverse</a></strong><br />
                            PlayStationの非公式掲示板コミュニティ。(2020年以来放置)
                        </li>
                        <li>
                            <strong><a href="https://2023.pitan76.net/tools/toquiz/index.html" target="_blank" rel="noopener noreferrer">匿名クイズ</a></strong><br />
                            匿名でクイズを作成できるWebツール。
                        </li>
                        <li>
                            <strong><a href="https://2023.pitan76.net/tools/" target="_blank" rel="noopener noreferrer">2023.pitan76.net/tools/</a></strong><br />
                            2023年に作成したWebツールのまとめページ。
                        </li>
                        <li>
                            <strong><a href="https://pkom.pitan76.net/?Web%E3%83%84%E3%83%BC%E3%83%AB" target="_blank" rel="noopener noreferrer">2020.pitan76.net/?Webツール</a></strong><br />
                            2020年に作成したWebツールのまとめページ。
                        </li>
                    </ul>
                </span>

                <span className={styles.card}>
                    <h2>その他</h2>
                    <ul>
                        <li>
                            <strong><a href="https://github.com/PTOM76/tuibian" target="_blank" rel="noopener noreferrer">Tuibian</a></strong><br />
                            TUIベースのDebian派生カスタムLinuxディストリ/TUIアプリ。
                        </li>
                        <li>
                            <strong><a href="https://maven.pitan76.net/" target="_blank" rel="noopener noreferrer">Mavenリポジトリ</a></strong><br />
                            私のMavenリポジトリです。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/github-pitan76-star-counter" target="_blank" rel="noopener noreferrer">GitHub Star Counter</a></strong><br />
                            GitHubアカウントの合計スター数のカウンタ画像を出力するPHP製ツール。
                        </li>
                        <li>
                            <strong><a href="./paint/">お絵描きまとめページ</a></strong><br />
                            素人の私が描いた絵とか載せてます。
                        </li>
                    </ul>
                </span>
            </div>
        </div>
    )
};
