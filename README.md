# 股海塔羅

用塔羅抽卡的方式管理短線台股觀察池。這是一個純前端網站，可以直接部署到靜態網站服務，也支援手機加入主畫面。

部署到 Netlify 後會掃描上市與上櫃市場、避開興櫃股，再從全市場挑出符合均線、趨勢、量價與默默轉強條件的股票牌。若資料源暫時失敗，畫面會使用上次快取；沒有新資料時只顯示牌庫，不顯示示範股價。

抽卡牌面會顯示目前股價、漲跌幅、均線位置、20 日動能、命中策略與風險提醒。
手機版改成左右滑動的大卡牌，長按或點選卡牌即可在同一個牌庫框中看到快速分析，減少上下移動畫面。

## 最推薦上傳位置

若只想先看靜態畫面，可以用 Netlify Drop：

1. 到 Netlify 建立帳號並開啟 Sites。
2. 選擇 Add new site。
3. 使用 Deploy manually 或拖拉上傳。
4. 上傳 `stock-tarot-site-full-market.zip`，或上傳整個 `new-chat` 資料夾。
5. Netlify 產生網址後，用手機打開該網址。

若要「每次開啟自動更新行情」，推薦用 Netlify 連 GitHub：

1. 把整個 `new-chat` 資料夾放到 GitHub repository。
2. 到 Netlify 選 Add new site，再選 Import from Git。
3. 選你的 GitHub repository。
4. Build command 留空。
5. Publish directory 填 `.`。
6. Functions directory 會由 `netlify.toml` 自動設定為 `netlify/functions`。
7. 部署完成後，用 Netlify 給你的網址打開。

原因是全市場掃描需要 `netlify/functions/market-scan.js`，即時價格更新需要 `netlify/functions/market-data.js`；Git 連線部署或 Netlify CLI 會比較完整地部署 Function。

手機使用方式：

1. Android Chrome 通常會出現安裝提示，也可以按頁面上的「安裝」。
2. iPhone Safari 請按分享按鈕，再選「加入主畫面」。
3. 加入後就能像 App 一樣從手機桌面打開。

## 也可以部署到哪裡

- Netlify：最省事，適合先分享給朋友試用。
- Vercel：也適合靜態網站，之後若接 API 會方便。
- GitHub Pages：適合你想把程式碼放在 GitHub 管理。

## 必要檔案

部署時至少需要這些檔案與資料夾：

- `index.html`
- `styles.css`
- `app.js`
- `manifest.webmanifest`
- `service-worker.js`
- `icons/`
- `netlify/functions/`

`scripts/` 只是用來重新產生圖示，上線時保留或移除都可以。

## 注意

本機用 `file://` 打開時只作介面預覽，不顯示示範股價；部署到 Netlify 後才會啟用全市場掃描與函式更新。股市資料可能延遲，請當作選股輔助與觀察清單，不是直接買賣建議。
