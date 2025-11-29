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

                    <h3>Item Alchemy&nbsp;
                        <img src="/image/fabric.png" style={{ display: 'inline', width: 30, height: 30, marginTop: -5 }} title='FabricMC' data-lightbox="false"></img>
                    </h3>
                    このMODはFabric用にProjectEのようなEMCシステムと等価交換できる賢者の石などを追加します。<br />
                    <br />
                    <img src="/image/mcmod/item-alchemy.png" alt="Item Alchemy スクリーンショット" style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />

                    <a href="https://www.curseforge.com/minecraft/mc-mods/item-alchemy-fabric" target="_blank" rel="noopener noreferrer">
                        <div className={styles.curseforgeIcon} title='CurseForge'></div>
                    </a>
                    <a href="https://modrinth.com/mod/item-alchemy" target="_blank" rel="noopener noreferrer">
                        <div className={styles.modrinthIcon} title='Modrinth'></div>
                    </a>
                    <a href="https://wikichree.com/pitan76/?Item+Alchemy" target="_blank" rel="noopener noreferrer">
                        <div className={styles.wikichreeIcon} title='ウィキ'></div>
                    </a>
                    <a href="https://github.com/Pitan76/item-alchemy" target="_blank" rel="noopener noreferrer">
                        <div className={styles.githubIcon} title='ソースコード'></div>
                    </a>

                    <h3>
                        Advanced Reborn&nbsp;
                        <img src="/image/fabric.png" style={{ display: 'inline', width: 30, height: 30, marginTop: -5 }} title='FabricMC' data-lightbox="false"></img>
                    </h3>
                    Tech Rebornのアドオンで数個のマシンと充電パッドなど僕がほしいなと思ったものを追加しています。<br />
                    <br />
                    <img src="/image/mcmod/advancedreborn.png" alt="Advanced Reborn スクリーンショット" style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />

                    <a href="https://www.curseforge.com/minecraft/mc-mods/advancedreborn" target="_blank" rel="noopener noreferrer">
                        <div className={styles.curseforgeIcon} title='CurseForge'></div>
                    </a>
                    <a href="https://modrinth.com/mod/advanced-reborn" target="_blank" rel="noopener noreferrer">
                        <div className={styles.modrinthIcon} title='Modrinth'></div>
                    </a>
                    <a href="https://wikichree.com/pitan76/?Advanced+Reborn" target="_blank" rel="noopener noreferrer">
                        <div className={styles.wikichreeIcon} title='ウィキ'></div>
                    </a>
                    <a href="https://github.com/Pitan76/AdvancedReborn" target="_blank" rel="noopener noreferrer">
                        <div className={styles.githubIcon} title='ソースコード'></div>
                    </a>

                    <h3>Enhanced Quarries&nbsp;
                        <img src="/image/fabric.png" style={{ display: 'inline', width: 30, height: 30, marginTop: -5 }} title='FabricMC' data-lightbox="false"></img>
                    </h3>
                    FabricにBuildCraft風のクァーリーやフィラーを追加するModです。<br />
                    <br />
                    <img src="/image/mcmod/enhancedquarries.png" alt="Enhanced Quarries スクリーンショット" style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />

                    <a href="https://www.curseforge.com/minecraft/mc-mods/enhancedquarries" target="_blank" rel="noopener noreferrer">
                        <div className={styles.curseforgeIcon} title='CurseForge'></div>
                    </a>
                    <a href="https://modrinth.com/mod/enhancedquarries" target="_blank" rel="noopener noreferrer">
                        <div className={styles.modrinthIcon} title='Modrinth'></div>
                    </a>
                    <a href="https://wikichree.com/pitan76/?Enhanced+Quarries" target="_blank" rel="noopener noreferrer">
                        <div className={styles.wikichreeIcon} title='ウィキ'></div>
                    </a>
                    <a href="https://github.com/PTOM76/EnhancedQuarries" target="_blank" rel="noopener noreferrer">
                        <div className={styles.githubIcon} title='ソースコード'></div>
                    </a>

                    <h3>Memory Usage Title&nbsp;
                        <img src="/image/fabric.png" style={{ display: 'inline', width: 30, height: 30, marginTop: -5 }} title='FabricMC' data-lightbox="false"></img>
                        <img src="/image/forge.png" style={{ display: 'inline', width: 30, height: 30, marginTop: -5, marginLeft: '2px' }} title='Minecraft Forge' data-lightbox="false"></img>
                        <img src="/image/neoforge.png" style={{ display: 'inline', width: 30, height: 30, marginTop: -5, marginLeft: '2px' }} title='NeoForge' data-lightbox="false"></img>
                    </h3>
                    メモリ使用量をタイトルバーに表示するModです。<br />
                    <br />
                    <img src="/image/mcmod/memory-usage-title.png" alt="Memory Usage Title スクリーンショット" style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />
                    <a href="https://www.curseforge.com/minecraft/mc-mods/memory-usage-title" target="_blank" rel="noopener noreferrer">
                        <div className={styles.curseforgeIcon} title='CurseForge'></div>
                    </a>
                    <a href="https://modrinth.com/mod/memory-usage-title" target="_blank" rel="noopener noreferrer">
                        <div className={styles.modrinthIcon} title='Modrinth'></div>
                    </a>
                    <a href="https://github.com/PTOM76/memory-usage-title" target="_blank" rel="noopener noreferrer">
                        <div className={styles.githubIcon} title='ソースコード'></div>
                    </a>

                    <h3>Mod Sound Volume Options&nbsp;
                        <img src="/image/fabric.png" style={{ display: 'inline', width: 30, height: 30, marginTop: -5 }} title='FabricMC' data-lightbox="false"></img>
                        <img src="/image/forge.png" style={{ display: 'inline', width: 30, height: 30, marginTop: -5, marginLeft: '2px' }} title='Minecraft Forge' data-lightbox="false"></img>
                        <img src="/image/neoforge.png" style={{ display: 'inline', width: 30, height: 30, marginTop: -5, marginLeft: '2px' }} title='NeoForge' data-lightbox="false"></img>
                    </h3>
                    Modごとに音量を調整できるようにするModです。<br />
                    <br />
                    <img src="/image/mcmod/mod-sound-volume-options.png" alt="Mod Sound Volume Options スクリーンショット" style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />
                    <a href="https://www.curseforge.com/minecraft/mc-mods/mod-sound-volume-options" target="_blank" rel="noopener noreferrer">
                        <div className={styles.curseforgeIcon} title='CurseForge'></div>
                    </a>
                    <a href="https://modrinth.com/mod/mod-volume-options" target="_blank" rel="noopener noreferrer">
                        <div className={styles.modrinthIcon} title='Modrinth'></div>
                    </a>
                    <a href="https://github.com/PTOM76/mod-volume-options" target="_blank" rel="noopener noreferrer">
                        <div className={styles.githubIcon} title='ソースコード'></div>
                    </a>

                    <h3>一覧</h3>
                    <ul>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/additional-small-stairs" target="_blank" rel="noopener noreferrer">Additional Small Stairs</a></strong><br />
                            Small StairsのアドオンMod。
                        </li>
                        <li>
                            <strong><a href="https://wikichree.com/pitan76/?Advanced+Reborn" target="_blank" rel="noopener noreferrer">Advanced Reborn</a></strong><br />
                            さまざまな装置やアイテムを追加するTech RebornのアドオンMod。
                        </li>
                        <li>
                            <strong><a href="https://wikichree.com/pitan76/?Bedrock+Tools76" target="_blank" rel="noopener noreferrer">Bedrock Tools 76</a></strong><br />
                            岩盤、黒曜石のツールを追加するMod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/bew76" target="_blank" rel="noopener noreferrer">Block Entity Wrench</a></strong><br />
                            ブロックエンティティを持つブロックをNBTごと回収できる、回転もできるレンチを追加するMod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/compatdatapacks" target="_blank" rel="noopener noreferrer">CompatDatapacks</a></strong><br />
                            データパックのバージョン互換を追加するMod。
                        </li>
                        <li>
                            <strong><a href="https://wikichree.com/pitan76/?Cubic+Turret" target="_blank" rel="noopener noreferrer">Cubic Turret</a></strong><br />
                            自動的にエンティティを攻撃するタレットを追加するMod。(ファントムを倒すのに便利)
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
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/ignischat" target="_blank" rel="noopener noreferrer">IgnisChat</a></strong><br />
                            LunaChatにあるローマ字変換機能のみをFabricに移植したMod。
                        </li>
                        <li>
                            <strong><a href="https://wikichree.com/pitan76/?Item+Alchemy" target="_blank" rel="noopener noreferrer">Item Alchemy</a></strong><br />
                            Project E風のEMCと等価交換できる賢者の石などを追加するMod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/legacyitemmodels" target="_blank" rel="noopener noreferrer">Legacy Item Models</a></strong><br />
                            1.21.4以降でもItemAssetsなしで自動的にモデルを読み込むようにItemAssetsを生成するMod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/mcpitanlib" target="_blank" rel="noopener noreferrer">MCPitanLib</a></strong><br />
                            私のマイクラmodでよく使う前提Mod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/pukiwiki-link" target="_blank" rel="noopener noreferrer">PukiWiki Link</a></strong><br />
                            MinecraftとPukiWikiを連携させるMod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/memory-usage-title" target="_blank" rel="noopener noreferrer">Memory Usage Title</a></strong><br />
                            メモリ使用量をタイトルバーに表示するMod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/mod-sound-volume-options" target="_blank" rel="noopener noreferrer">Mod Sound Volume Options</a></strong><br />
                            Modごとに音量を調整できるようにするMod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/modlistcmd76" target="_blank" rel="noopener noreferrer">ModList Command</a></strong><br />
                            Mod一覧を表示、出力するコマンドを追加するMod。
                        </li>
                        <li>
                            <strong><a href="https://wikichree.com/pitan76/?More+Harnesses" target="_blank" rel="noopener noreferrer">More Harnesses</a></strong><br />
                            ハッピーガスト用の新しいハーネスを追加するMod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/ordinary-crook" target="_blank" rel="noopener noreferrer">Ordinary Crook</a></strong><br />
                            木の葉を効率よく回収するツールを追加するMod。
                        </li>
                        <li>
                            <strong><a href="https://wikichree.com/pitan76/?PipePlus" target="_blank" rel="noopener noreferrer">PipePlus</a></strong><br />
                            挿入パイプ、自動搬出パイプなどを追加するSimple PipesのアドオンMod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/qrblock76" target="_blank" rel="noopener noreferrer">QRBlock</a></strong><br />
                            QRコードのブロックを追加するMod。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/RecipeImageExporter" target="_blank" rel="noopener noreferrer">Recipe Image Exporter</a></strong><br />
                            クラフトレシピをmodごとに一括で画像エクスポートするツールMod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/remove-mcrealms" target="_blank" rel="noopener noreferrer">Remove MCRealms</a></strong><br />
                            タイトル画面からMinecraft Realmsボタンを削除するMod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/rubycraft-p" target="_blank" rel="noopener noreferrer">RubyCraft-P</a></strong><br />
                            既に開発終了である、初期あたりに試作でつくったMod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/simple-better-batpack-fabric" target="_blank" rel="noopener noreferrer">Simple Better BatPack</a></strong><br />
                            さまざまなバッテリーパックを追加するTechRebornのアドオンMod。
                        </li>
                        <li>
                            <strong><a href="https://wikichree.com/pitan76/?Simple+Uncrafting+Table" target="_blank" rel="noopener noreferrer">Simple Uncrafting Table</a></strong><br />
                            アイテムを分解して素材に戻すテーブルを追加するMod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/small-stairs" target="_blank" rel="noopener noreferrer">Small Stairs</a></strong><br />
                            1/3サイズの階段ブロックを追加するさよ様のModを最新版に対応させたもの。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/solomons-rod-fabric" target="_blank" rel="noopener noreferrer">Solomon's Rod</a></strong><br />
                            さよ様のソロモンの杖を最新版に対応させたMod。
                        </li>
                        <li>
                            <strong><a href="https://wikichree.com/pitan76/?Space+Cube" target="_blank" rel="noopener noreferrer">Space Cube</a></strong><br />
                            Compact Machines風の小さな空間を作成するブロックを追加するMod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/speedy-path" target="_blank" rel="noopener noreferrer">Speedy Path</a></strong><br />
                            特定のブロック上での移動速度を向上させるMod。
                        </li>
                        <li>
                            <strong><a href="https://wikichree.com/pitan76/?StorageBox+Adapter" target="_blank" rel="noopener noreferrer">StorageBox Adapter</a></strong><br />
                            StorageBox用のアダプターを追加するStorageBoxのアドオンMod。
                        </li>
                        <li>
                            <strong><a href="https://wikichree.com/pitan76/?Storage+Box+for+Fabric" target="_blank" rel="noopener noreferrer">Storage Box for Fabric</a></strong><br />
                            Unyoho様のStorageBoxをFabric向けに移植したMod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/tech-hammers" target="_blank" rel="noopener noreferrer">Tech Hammers & Excavators</a></strong><br />
                            ルビーハンマーや電動ハンマーなどを追加するTech RebornとVanilla Hammers/ExcavatorsのアドオンMod。
                        </li>
                        <li>
                            <strong><a href="https://wikichree.com/pitan76/?Universal+Wrench" target="_blank" rel="noopener noreferrer">Universal Wrench</a></strong><br />
                            さまざまなレンチを統合できるUniversal Wrenchを追加するMod。
                        </li>
                        <li>
                            <strong><a href="https://www.curseforge.com/minecraft/mc-mods/yamato-gun" target="_blank" rel="noopener noreferrer">Yamato Gun</a></strong><br />
                            ちょっとした鉄砲を追加するMod。(ファントムを倒すのに便利)
                        </li>

                    </ul>
                </span>

                <span className={styles.card}>
                    <h2>その他Mod/プラグイン/拡張機能など</h2>
                    <h3>Chat Duration Plus (R.E.P.O)</h3>
                    R.E.P.O向けのチャットの表示時間を15秒(設定可能)に延長するMod。
                    <br />
                    <img src="/image/repomod/chatdurationplus.png" alt="Chat Duration Plus スクリーンショット" style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />
                    <a href="https://thunderstore.io/c/repo/p/PTOM76/ChatDurationPlus/" target="_blank" rel="noopener noreferrer">
                        <div className={styles.thunderstoreIcon} title='Thunderstore'></div>
                    </a>
                    <a href="https://www.nexusmods.com/repo/mods/150" target="_blank" rel="noopener noreferrer">
                        <div className={styles.nexusmodsIcon} title='Nexus'></div>
                    </a>
                    <a href="https://github.com/PTOM76/REPO-ChatDurationPlus" target="_blank" rel="noopener noreferrer">
                        <div className={styles.githubIcon} title='GitHub'></div>
                    </a>

                    <h3>一覧</h3>
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
                    <ul>
                        <li>
                            <strong><a href="https://github.com/PTOM76/pukiwiki-cleaskin" target="_blank" rel="noopener noreferrer">Cleaskin</a></strong><br />
                            ブログとして使えそうな明るいPukiWikiスキン。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/PukiWiki-Plugins" target="_blank" rel="noopener noreferrer">PukiWiki-Plugins</a></strong><br />
                            PukiWiki用の各種プラグイン集。(40コほどと多すぎるため個別リンクは割愛)
                        </li>
                        <li>
                            <strong><a href="https://wikichree.com/?WikiChree.COM開発プラグイン" target="_blank" rel="noopener noreferrer">WikiChree.COM開発プラグイン群</a></strong><br />
                            WikiChree.COMオリジナルのPukiWikiプラグイン群。
                        </li>
                        <li>
                            <strong><a href="https://pukiwiki.sourceforge.io/?%E8%87%AA%E4%BD%9C%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/easyedit.inc.php#i6a12c4d" target="_blank" rel="noopener noreferrer">EasyEditプラグイン</a></strong><br />
                            CKEditorを使用して編集するPukiWikiプラグイン。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/PukiWiki-Bot" target="_blank" rel="noopener noreferrer">PukiWiki-Bot</a></strong><br />
                            PukiWikiのボットとやり取りするためのPukiWikiプラグイン。
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
                    <ul>
                        <li>
                            <strong><a href="https://github.com/PTOM76/MMDDiscordRPC" target="_blank" rel="noopener noreferrer">MMDDiscordRPC</a></strong><br />
                            MMD用のDiscord Rich Presenceプラグイン。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/MMDUtility" target="_blank" rel="noopener noreferrer">MMDUtility (フォーク版)</a></strong><br />
                            oigami様のMMD Utilityをv9.32に対応させたフォーク版。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/MMDPluginDLL" target="_blank" rel="noopener noreferrer">MMDPluginDLL (フォーク版)</a></strong><br />
                            Soul-chan様のMMDPluginDLLをv9.32に対応させたフォーク版。
                        </li>
                        <li>
                            <strong><a href="https://github.com/PTOM76/mmdplugin-ExamplePlugin" target="_blank" rel="noopener noreferrer">ExamplePlugin</a></strong><br />
                            MMDPlugin用のプラグイン開発用テンプレート。
                        </li>
                    </ul>
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

                    <h3>WikiChree.COM</h3>
                    無料で使えるPukiWikiホスティングサービス。<br />
                    <img src="/image/web/wikichree.png" alt="WikiChree.COM スクリーンショット" style={{ maxWidth: '100%', height: 'auto', border: '2px solid #ccc', borderRadius: '4px', marginBottom: '16px' }} />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }} title='WikiChree.COM'>
                        -&gt; <a href="https://wikichree.com/" target="_blank" rel="noopener noreferrer">https://wikichree.com/</a>
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
                            <strong><a href="https://psnverse.pitan76.net/" target="_blank" rel="noopener noreferrer">Psnverseコミュニティ</a></strong><br />
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
                    </ul>
                </span>
            </div>
        </div>
    )
};
