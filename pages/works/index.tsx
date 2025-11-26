import styles from '@/styles/page.module.css';

export default function WorksPage() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>$works</h1>
        
        <span className={styles.breadcrumb}>
            <a href="/">Top</a> / Works
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

                <h3>Item Alchemy</h3>
                このMODはFabric用にProjectEのようなEMCシステムと等価交換できる賢者の石などを追加します。<br />
                <br />
                <img src="/image/item_alchemy.png" alt="Item Alchemy スクリーンショット" style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />

                {/* TODO: リンクをアイコンに変更する */}
                <a href="https://www.curseforge.com/minecraft/mc-mods/item-alchemy-fabric" target="_blank" rel="noopener noreferrer">CurseForge</a>&nbsp;|&nbsp;
                <a href="https://modrinth.com/mod/item-alchemy" target="_blank" rel="noopener noreferrer">Modrinth</a>&nbsp;|&nbsp;
                <a href="https://wikichree.com/pitan76/?Item+Alchemy" target="_blank" rel="noopener noreferrer">Wiki</a>&nbsp;|&nbsp;
                <a href="https://github.com/Pitan76/item-alchemy" target="_blank" rel="noopener noreferrer">GitHub</a>

                <h3>Advanced Reborn</h3>
                Tech Rebornのアドオンで数個のマシンと充電パッドなど僕がほしいなと思ったものを追加しています。<br />
                <br />
                <img src="/image/advanced_reborn.png" alt="Advanced Reborn スクリーンショット" style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />

                <a href="https://www.curseforge.com/minecraft/mc-mods/advancedreborn" target="_blank" rel="noopener noreferrer">CurseForge</a>&nbsp;|&nbsp;
                <a href="https://modrinth.com/mod/advanced-reborn" target="_blank" rel="noopener noreferrer">Modrinth</a>&nbsp;|&nbsp;
                <a href="https://wikichree.com/pitan76/?Advanced+Reborn" target="_blank" rel="noopener noreferrer">Wiki</a>&nbsp;|&nbsp;
                <a href="https://github.com/Pitan76/AdvancedReborn" target="_blank" rel="noopener noreferrer">GitHub</a>

                <h3>一覧</h3>
                <ul>
                    <li>
                        <strong><a href="https://wikichree.com/pitan76/?Advanced+Reborn" target="_blank" rel="noopener noreferrer">Advanced Reborn</a></strong><br />
                        さまざまな装置やアイテムを追加するTech RebornのアドオンMod。
                    </li>
                    <li>
                        <strong><a href="https://wikichree.com/pitan76/?Bedrock+Tools76" target="_blank" rel="noopener noreferrer">Bedrock Tools 76</a></strong><br />
                        岩盤、黒曜石のツールを追加するMod。
                    </li>
                    <li>
                        <strong><a href="https://wikichree.com/pitan76/?Cubic+Turret" target="_blank" rel="noopener noreferrer">Cubic Turret</a></strong><br />
                        自動的にエンティティを攻撃するタレットを追加するMod。
                    </li>
                    <li>
                        <strong><a href="https://wikichree.com/pitan76/?Ender+Cane" target="_blank" rel="noopener noreferrer">Ender Cane</a></strong><br />
                        エンダーパールを消費してテレポートする杖を追加するMod。
                    </li>
                    <li>
                        <strong><a href="https://wikichree.com/pitan76/?Enhanced+Quarries" target="_blank" rel="noopener noreferrer">Enhanced Quarries</a></strong><br />
                        BCのようなクァーリーやフィラーを追加するMod。
                    </li>
                    <li>
                        <strong><a href="https://wikichree.com/pitan76/?Item+Alchemy" target="_blank" rel="noopener noreferrer">Item Alchemy</a></strong><br />
                        Project E風のEMCと等価交換できる賢者の石などを追加するMod。
                    </li>
                    <li>
                        <strong><a href="https://wikichree.com/pitan76/?More+Harnesses" target="_blank" rel="noopener noreferrer">More Harnesses</a></strong><br />
                        ハッピーガスト用の新しいハーネスを追加するMod。
                    </li>
                    <li>
                        <strong><a href="https://wikichree.com/pitan76/?PipePlus" target="_blank" rel="noopener noreferrer">PipePlus</a></strong><br />
                        挿入パイプ、自動搬出パイプなどを追加するSimple PipesのアドオンMod。
                    </li>
                    <li>
                        <strong><a href="https://wikichree.com/pitan76/?Simple+Uncrafting+Table" target="_blank" rel="noopener noreferrer">Simple Uncrafting Table</a></strong><br />
                        アイテムを分解して素材に戻すテーブルを追加するMod。
                    </li>
                    <li>
                        <strong><a href="https://wikichree.com/pitan76/?Space+Cube" target="_blank" rel="noopener noreferrer">Space Cube</a></strong><br />
                        Compact Machines風の小さな空間を作成するブロックを追加するMod。
                    </li>
                    <li>
                        <strong><a href="https://wikichree.com/pitan76/?StorageBox+Adapter" target="_blank" rel="noopener noreferrer">StorageBox Adapter</a></strong><br />
                        StorageBox用のアダプターを追加するStorageBoxのアドオンMod。
                    </li>
                    <li>
                        <strong><a href="https://wikichree.com/pitan76/?Storage+Box+for+Fabric" target="_blank" rel="noopener noreferrer">Storage Box for Fabric</a></strong><br />
                        Fabric版のStorageBox Mod。
                    </li>
                    <li>
                        <strong><a href="https://wikichree.com/pitan76/?Universal+Wrench" target="_blank" rel="noopener noreferrer">Universal Wrench</a></strong><br />
                        さまざまなレンチを統合できるUniversal Wrenchを追加するMod。
                    </li>
                </ul>
            </span>

            <span className={styles.card}>
                <h2>その他Mod/プラグイン/拡張機能など</h2>
                <ul>
                    <li>
                        <strong><a href="https://thunderstore.io/c/repo/p/PTOM76/ChatDurationPlus/" target="_blank" rel="noopener noreferrer">ChatDurationPlus</a></strong><br />
                        R.E.P.O向けのチャットの表示時間を延長するMod。
                    </li>
                    <li>
                        <strong><a href="https://github.com/PTOM76/reaper-video-script" target="_blank" rel="noopener noreferrer">Reaper Video Script</a></strong><br />
                        REAPER動画プロセッサ用JSFXスクリプト。
                    </li>
                    <li>
                        <strong><a href="https://github.com/PTOM76/mcpitanlib-intellij-plugin" target="_blank" rel="noopener noreferrer">MCPitanLib IntelliJ Plugin</a></strong><br />
                        MCPitanLib用のテンプレから自動でModの開発環境を構築するIntelliJプラグイン。
                    </li>
                </ul>
            </span>

            <span className={styles.card}>
                <h2>PukiWikiプラグイン/スキン</h2>
                <ul>
                    <li>
                        <strong><a href="https://github.com/PTOM76/pukiwiki-cleaskin" target="_blank" rel="noopener noreferrer">Cleaskin</a></strong><br />
                        ブログとして使えそうな明るいPukiWikiスキン。
                    </li>
                    <li>
                        <strong><a href="https://github.com/PTOM76/PukiWiki-Plugins" target="_blank" rel="noopener noreferrer">PukiWiki-Plugins</a></strong><br />
                        PukiWiki用の各種プラグイン集。(多すぎるため個別リンクは割愛)
                    </li>
                </ul>
            </span>

            <span className={styles.card}>
                <h2>MMDプラグイン</h2>
                <ul>
                    <li>
                        <strong><a href="https://github.com/PTOM76/MMDDiscordRPC" target="_blank" rel="noopener noreferrer">MMDDiscordRPC</a></strong><br />
                        MMD用のDiscord Rich Presenceプラグイン。
                    </li>
                </ul>
            </span>

        </div>
    </div>
  )
};
