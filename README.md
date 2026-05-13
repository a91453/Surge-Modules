# Surge-Modules

> 個人收集與整理的 **Surge** 模組、腳本、規則集與配置片段,涵蓋廣告攔截、DNS、代理、串流、解鎖會員與各式實用工具。

<p align="left">
  <img alt="Surge" src="https://img.shields.io/badge/Surge-iOS%20%7C%20macOS-FF6B00?style=flat-square&logo=apple&logoColor=white" />
  <img alt="Stars" src="https://img.shields.io/github/stars/a91453/Surge-Modules?style=flat-square&color=ffb400" />
  <img alt="Forks" src="https://img.shields.io/github/forks/a91453/Surge-Modules?style=flat-square&color=brightgreen" />
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/a91453/Surge-Modules?style=flat-square&color=blue" />
  <img alt="Repo Size" src="https://img.shields.io/github/repo-size/a91453/Surge-Modules?style=flat-square" />
  <img alt="Modules" src="https://img.shields.io/badge/Modules-77-9cf?style=flat-square" />
  <img alt="Rules" src="https://img.shields.io/badge/Rules-15-purple?style=flat-square" />
</p>

---

## 目錄結構

| 目錄 | 內容 | 數量 |
| :--- | :--- | :---: |
| [`modules/`](./modules) | Surge `.sgmodule` 模組,依功能分為六大類 | 77 |
| [`scripts/`](./scripts) | 模組所依賴的 JavaScript 腳本,目錄與 `modules/` 一一對應 | — |
| [`rules/`](./rules) | 規則集 `.list` 檔(Apple / Netflix / Youtube …) | 15 |
| [`mocks/`](./mocks) | Mock 回應(reject-200 / reject-img / reject-video …) | — |
| [`maplocal/`](./maplocal) | Map Local 替換用資源(JSON / PAC) | — |
| [`dconf/`](./dconf) | Surge 配置片段(GROUP / MITM / PROXY / RULE / SSID / WARP) | 7 |
| [`servers/`](./servers) | 訂閱用節點開關清單 | 2 |
| [`certificate/`](./certificate) | MITM 用 CA 憑證 | 3 |

---

## 模組總覽

### 廣告攔截 · Adblock

| 模組 | 說明 |
| :--- | :--- |
| [`Adblock.sgmodule`](./modules/adblock/Adblock.sgmodule) | 套用 hostsVN 規則集進行越南本地廣告攔截 |
| [`Adguard.sgmodule`](./modules/adblock/Adguard.sgmodule) | AdGuard 行動規則 |
| [`Adsinapp.sgmodule`](./modules/adblock/Adsinapp.sgmodule) | App 內廣告過濾 |
| [`AntiAdbDetect.sgmodule`](./modules/adblock/AntiAdbDetect.sgmodule) | 對抗網站「偵測廣告攔截」彈窗 |
| [`EndlessGoogle.sgmodule`](./modules/adblock/EndlessGoogle.sgmodule) | Google 搜尋結果無限滾動 |
| [`Youtube Ads.sgmodule`](./modules/adblock/Youtube%20Ads.sgmodule) | YouTube 影片 / 廣告攔截 |

### DNS

| 模組 | 說明 |
| :--- | :--- |
| [`ASN.sgmodule`](./modules/dns/ASN.sgmodule) | 啟用 ASN 解析輔助分流 |
| [`AutoNextDNS.sgmodule`](./modules/dns/AutoNextDNS.sgmodule) | 自動同步 NextDNS LinkedIP |
| [`IPv6.sgmodule`](./modules/dns/IPv6.sgmodule) | IPv6 相關設定 |
| [`NextDNS.sgmodule`](./modules/dns/NextDNS.sgmodule) | NextDNS DoH(Ultra-Low 延遲) |

### 代理 · Proxy

| 模組 | 說明 |
| :--- | :--- |
| [`Alohavpn.sgmodule`](./modules/proxy/Alohavpn.sgmodule) | Aloha VPN 解鎖 / 處理 |
| [`Proxy for Common Port.sgmodule`](./modules/proxy/Proxy%20for%20Common%20Port.sgmodule) | 為常見埠 (80/443 等) 強制走代理 |
| [`Warp++.sgmodule`](./modules/proxy/Warp%2B%2B.sgmodule) | 每 15 秒透過 Cron 自動刷新 WARP+ 流量(1GB/15s) |
| [`WarpPanel+.sgmodule`](./modules/proxy/WarpPanel%2B.sgmodule) | Cloudflare 1.1.1.1 面板擴充顯示 |

### 串流 · Streaming

| 模組 | 說明 |
| :--- | :--- |
| [`Boom.sgmodule`](./modules/streaming/Boom.sgmodule) | Boom Music 處理 |
| [`Fix-Youtube-login.sgmodule`](./modules/streaming/Fix-Youtube-login.sgmodule) | 修正 YouTube 登入問題 |
| [`Nhaccuatui.sgmodule`](./modules/streaming/Nhaccuatui.sgmodule) | NhacCuaTui(越南音樂)解鎖 |
| [`Spotify.sgmodule`](./modules/streaming/Spotify.sgmodule) | Spotify Premium 部分解鎖(iOS 15) |
| [`VeboTV.sgmodule`](./modules/streaming/VeboTV.sgmodule) | VeboTV 解鎖 |
| [`Youtube.sgmodule`](./modules/streaming/Youtube.sgmodule) | YouTube 增強(去廣告 / 後台播放等) |

### 實用工具 · Tools

| 模組 | 說明 |
| :--- | :--- |
| [`Buy-itunes.sgmodule`](./modules/tools/Buy-itunes.sgmodule) | iTunes 付款驗證腳本 |
| [`GameMod.sgmodule`](./modules/tools/GameMod.sgmodule) | 遊戲相關 Mod 入口 |
| [`Genunlock.sgmodule`](./modules/tools/Genunlock.sgmodule) | 通用解鎖規則 |
| [`Github-Private.sgmodule`](./modules/tools/Github-Private.sgmodule) | 私有 GitHub Raw 內容存取 |
| [`Hyperweb.sgmodule`](./modules/tools/Hyperweb.sgmodule) | Hyperweb 加速腳本 |
| [`MITM All.sgmodule`](./modules/tools/MITM%20All.sgmodule) | 一次啟用所有 MITM hostname(調試用) |
| [`Old_iPA_Downloader.sgmodule`](./modules/tools/Old_iPA_Downloader.sgmodule) | 下載歷史版本 iPA |
| [`Pushover.sgmodule`](./modules/tools/Pushover.sgmodule) | Pushover 推送整合 |
| [`Q-Search.sgmodule`](./modules/tools/Q-Search.sgmodule) | 自訂搜尋引擎導向 |
| [`Revenuecat.sgmodule`](./modules/tools/Revenuecat.sgmodule) | 攔截 RevenueCat v1 訂閱檢查 |
| [`Revenuecat-v2.sgmodule`](./modules/tools/Revenuecat-v2.sgmodule) | 攔截 RevenueCat v2 REST API(可與 v1 並存) |
| [`Shopee.sgmodule`](./modules/tools/Shopee.sgmodule) | Shopee 自動簽到 / Cookie 抓取 |
| [`StoreKit2.sgmodule`](./modules/tools/StoreKit2.sgmodule) | StoreKit 2 解鎖(實驗性) |
| [`Trace.sgmodule`](./modules/tools/Trace.sgmodule) | 抓包輔助與請求追蹤 |
| [`UserScript.sgmodule`](./modules/tools/UserScript.sgmodule) | Greasy Fork 風格 UserScript 注入 |
| [`iPA Install.sgmodule`](./modules/tools/iPA%20Install.sgmodule) | 從 Safari 直接安裝 iPA |

### App 解鎖 · Unlock

> 共 41 個 App 解鎖模組。展開查看完整清單。

<details>
<summary><b>展開所有 Unlock 模組</b></summary>

| 模組 | App |
| :--- | :--- |
| [`AltStore.sgmodule`](./modules/unlock/AltStore.sgmodule) | AltStore |
| [`AnkiApp.sgmodule`](./modules/unlock/AnkiApp.sgmodule) | AnkiApp |
| [`Busuu.sgmodule`](./modules/unlock/Busuu.sgmodule) | Busuu(語言學習) |
| [`Camera360.sgmodule`](./modules/unlock/Camera360.sgmodule) | Camera360 |
| [`Camscanner.sgmodule`](./modules/unlock/Camscanner.sgmodule) | CamScanner Gold |
| [`Chess.sgmodule`](./modules/unlock/Chess.sgmodule) | Chess.com |
| [`Craft.sgmodule`](./modules/unlock/Craft.sgmodule) | Craft |
| [`Dayone.sgmodule`](./modules/unlock/Dayone.sgmodule) | Day One |
| [`Document-PdfExpert-ScannerPro.sgmodule`](./modules/unlock/Document-PdfExpert-ScannerPro.sgmodule) | Documents / PDF Expert / Scanner Pro |
| [`Drops.sgmodule`](./modules/unlock/Drops.sgmodule) | Drops |
| [`ElsaSpeak.sgmodule`](./modules/unlock/ElsaSpeak.sgmodule) | ELSA Speak |
| [`Endel.sgmodule`](./modules/unlock/Endel.sgmodule) | Endel |
| [`Enpass.sgmodule`](./modules/unlock/Enpass.sgmodule) | Enpass |
| [`FacePlay.sgmodule`](./modules/unlock/FacePlay.sgmodule) | FacePlay |
| [`Fantastical.sgmodule`](./modules/unlock/Fantastical.sgmodule) | Fantastical |
| [`Fimo.sgmodule`](./modules/unlock/Fimo.sgmodule) | FIMO |
| [`Fitplan.sgmodule`](./modules/unlock/Fitplan.sgmodule) | Fitplan |
| [`Grammarly.sgmodule`](./modules/unlock/Grammarly.sgmodule) | Grammarly |
| [`Grindr.sgmodule`](./modules/unlock/Grindr.sgmodule) | Grindr XTRA / Unlimited |
| [`Gyroscope.sgmodule`](./modules/unlock/Gyroscope.sgmodule) | Gyroscope |
| [`Kinemaster.sgmodule`](./modules/unlock/Kinemaster.sgmodule) | KineMaster |
| [`Lensa.sgmodule`](./modules/unlock/Lensa.sgmodule) | Lensa / Prisma / Skim |
| [`Lightroom.sgmodule`](./modules/unlock/Lightroom.sgmodule) | Lightroom |
| [`Mate.sgmodule`](./modules/unlock/Mate.sgmodule) | Mate Translate |
| [`Mix.sgmodule`](./modules/unlock/Mix.sgmodule) | Mix |
| [`Monkey.sgmodule`](./modules/unlock/Monkey.sgmodule) | Monkey |
| [`MuscleBooster.sgmodule`](./modules/unlock/MuscleBooster.sgmodule) | Muscle Booster |
| [`Nicegram.sgmodule`](./modules/unlock/Nicegram.sgmodule) | Nicegram |
| [`Notability.sgmodule`](./modules/unlock/Notability.sgmodule) | Notability |
| [`Pacer.sgmodule`](./modules/unlock/Pacer.sgmodule) | Pacer |
| [`Picsart.sgmodule`](./modules/unlock/Picsart.sgmodule) | Picsart |
| [`Pixelup.sgmodule`](./modules/unlock/Pixelup.sgmodule) | Pixelup |
| [`Quizlet.sgmodule`](./modules/unlock/Quizlet.sgmodule) | Quizlet |
| [`Reddit.sgmodule`](./modules/unlock/Reddit.sgmodule) | Reddit Premium |
| [`Sololearn.sgmodule`](./modules/unlock/Sololearn.sgmodule) | Sololearn |
| [`Textnow.sgmodule`](./modules/unlock/Textnow.sgmodule) | TextNow |
| [`Truecaller.sgmodule`](./modules/unlock/Truecaller.sgmodule) | Truecaller |
| [`Unlock-Duo.sgmodule`](./modules/unlock/Unlock-Duo.sgmodule) | Duolingo |
| [`Wink.sgmodule`](./modules/unlock/Wink.sgmodule) | Wink |
| [`Xmind.sgmodule`](./modules/unlock/Xmind.sgmodule) | XMind |
| [`iTranslate.sgmodule`](./modules/unlock/iTranslate.sgmodule) | iTranslate |

</details>

---

## 規則集 · Rules

| 規則檔 | 行數 | 用途 |
| :--- | :---: | :--- |
| [`Apple.list`](./rules/Apple.list) | 27 | Apple 服務分流 |
| [`AppleTV.list`](./rules/AppleTV.list) | 3 | Apple TV+ 串流 |
| [`Antirevoke.list`](./rules/Antirevoke.list) | 9 | 防止企業簽名被吊銷 |
| [`Black.list`](./rules/Black.list) | 2 | 黑名單(直接 REJECT) |
| [`White.list`](./rules/White.list) | 1 | 白名單(強制 DIRECT) |
| [`Facebook.list`](./rules/Facebook.list) | 1 | Facebook |
| [`HBO.list`](./rules/HBO.list) | 8 | HBO Max |
| [`Kakaotalk.list`](./rules/Kakaotalk.list) | 3 | KakaoTalk |
| [`Netflix.list`](./rules/Netflix.list) | 10 | Netflix |
| [`OTA.list`](./rules/OTA.list) | 5 | iOS OTA 更新阻擋 |
| [`Speedtest.list`](./rules/Speedtest.list) | 5 | 測速服務 |
| [`Spotify.list`](./rules/Spotify.list) | 5 | Spotify |
| [`TestFlight.list`](./rules/TestFlight.list) | 2 | TestFlight |
| [`Youtube.list`](./rules/Youtube.list) | 5 | YouTube |
| [`YouTubeMusic.list`](./rules/YouTubeMusic.list) | 2 | YouTube Music |

---

## 配置片段 · dconf

可以用 Surge 的 `include` 機制把這些片段拼進主配置:

| 檔案 | 段落 |
| :--- | :--- |
| [`GROUP.dconf`](./dconf/GROUP.dconf) | `[Proxy Group]` |
| [`PROXY.dconf`](./dconf/PROXY.dconf) | `[Proxy]` |
| [`RULE.dconf`](./dconf/RULE.dconf) | `[Rule]` |
| [`MITM.dconf`](./dconf/MITM.dconf) | `[MITM]`(含 CA 設定) |
| [`REPLICA.dconf`](./dconf/REPLICA.dconf) | `[Replica]` |
| [`SSID.dconf`](./dconf/SSID.dconf) | SSID 切換策略 |
| [`WARP.dconf`](./dconf/WARP.dconf) | WARP 相關設定 |

---

## 使用方式

### 1. 一鍵安裝(iOS / macOS Surge)

在 Surge 內透過模組 URL 直接安裝,例如:

```
https://raw.githubusercontent.com/a91453/Surge-Modules/main/modules/streaming/Spotify.sgmodule
```

> 把上面網址中的 `streaming/Spotify.sgmodule` 換成你需要的模組路徑即可。

### 2. include 片段到主配置

```ini
#!INCLUDE=https://raw.githubusercontent.com/a91453/Surge-Modules/main/dconf/MITM.dconf
```

### 3. 引用規則集

```ini
RULE-SET,https://raw.githubusercontent.com/a91453/Surge-Modules/main/rules/Netflix.list,PROXY
```

---

## 注意事項

- 多數解鎖模組需要啟用 **MITM** 並信任本機 CA,首次使用請先安裝並信任 [`certificate/`](./certificate) 中的憑證。
- `dconf/MITM.dconf` 內附了預設的 CA p12 與 passphrase,**僅供本人 / 測試用途**,正式部署請自行生成新的 CA。
- 解鎖類模組依賴第三方 App 的 API 結構,**版本更新可能導致失效**,如遇問題請開 Issue 回報。
- 本倉庫腳本來源涵蓋多位社群作者(見 commit history),僅作個人收集整理使用。

---

## 變更紀錄

請參考 [Commits](../../commits/main) 與 [Pull Requests](../../pulls?state=closed)。近期更新:

- 新增 RevenueCat v2 API 解鎖模組
- 新增 StoreKit 2 實驗性解鎖模組
- 新增 Grindr XTRA / Unlimited 解鎖模組
- 將原 `Surge-LK` 全部模組遷移至本倉庫,並依功能重新分為六大目錄

---

## 致謝

模組與腳本內容彙整自多位社群作者的貢獻,包含但不限於:`boybh/Surge-LK`、`bigdargon/hostsVN`、`NextDNS`、`Cloudflare WARP`、以及各模組原作者(請參考各 `.sgmodule` / `.js` 檔案頭部說明)。
