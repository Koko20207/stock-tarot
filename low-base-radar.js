(() => {
  if (typeof getRadarInsight === "function" || window.__LOW_BASE_RADAR_PATCHED__) return;
  window.__LOW_BASE_RADAR_PATCHED__ = true;

  const group = {
    id: "radar",
    title: "低基期雷達",
    description: "找剛站回關鍵均線、慢慢墊高、還沒有過熱的突破候選股。",
  };
  const items = [
    { id: "lowBaseBreakout", group: "radar", label: "低基期突破候選", shortLabel: "低基期" },
    { id: "quietRiser", group: "radar", label: "默默墊高", shortLabel: "默默墊高" },
    { id: "notOverheated", group: "radar", label: "未過熱", shortLabel: "未過熱" },
  ];

  const esc = (value) => typeof escapeHtml === "function"
    ? escapeHtml(value)
    : String(value ?? "").replace(/[&<>\"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '\"': "&quot;",
        "'": "&#039;",
      })[char]);
  const fmt = (value, digits = 2) => typeof formatNumber === "function" ? formatNumber(value, digits) : String(value);
  const sig = (value, digits = 2) => typeof formatSigned === "function" ? formatSigned(value, digits) : String(value);

  function installFilters() {
    if (!STRATEGY_GROUPS.some((entry) => entry.id === "radar")) STRATEGY_GROUPS.unshift(group);
    items.forEach((item) => {
      if (!STRATEGY_DEFINITIONS.some((entry) => entry.id === item.id)) STRATEGY_DEFINITIONS.unshift(item);
    });
  }

  function enrich(base, stock) {
    const market = stock.market || {};
    const aboveMa20 = Boolean(base.aboveMa20);
    const aboveMa60 = Boolean(base.aboveMa60);
    const ma20Up = Boolean(base.ma20Up);
    const momentum20d = Number.isFinite(market.momentum20d) ? market.momentum20d : null;
    const momentum60d = Number.isFinite(market.momentum60d) ? market.momentum60d : null;
    const distance20 = Number.isFinite(market.distanceTo20dHigh) ? market.distanceTo20dHigh : null;
    const distance60 = Number.isFinite(market.distanceTo60dHigh) ? market.distanceTo60dHigh : null;
    const distance120 = Number.isFinite(market.distanceTo120dHigh) ? market.distanceTo120dHigh : null;
    const distance240 = Number.isFinite(market.distanceTo240dHigh) ? market.distanceTo240dHigh : null;
    const volumeRatio20 = Number.isFinite(market.volumeRatio20) ? market.volumeRatio20 : null;
    const changePct = Number.isFinite(market.changePct) ? market.changePct : 0;
    const notExtended = Number.isFinite(market.ma20) && Number.isFinite(market.price) ? market.price <= market.ma20 * 1.14 : true;
    const calmVolume = Number.isFinite(volumeRatio20) && volumeRatio20 >= 0.75 && volumeRatio20 <= 1.85;
    const room = [distance60, distance120, distance240].some((distance) => Number.isFinite(distance) && distance <= -6) ||
      (Number.isFinite(market.ma240) && Number.isFinite(market.price) && market.price < market.ma240 * 1.18) ||
      (Number.isFinite(momentum60d) && momentum60d <= 32);
    const notOverheated = changePct < 4.5 && (!Number.isFinite(volumeRatio20) || volumeRatio20 < 2.15) && (!Number.isFinite(momentum20d) || momentum20d < 26) && notExtended;
    const quietRiser = aboveMa20 && ma20Up && calmVolume && Number.isFinite(momentum20d) && momentum20d >= 2.5 && momentum20d <= 18 && changePct > -1.8 && changePct < 3.8 && Number.isFinite(distance20) && distance20 <= -0.2;
    const lowBaseBreakout = aboveMa20 && (aboveMa60 || (Number.isFinite(market.ma60) && Number.isFinite(market.price) && market.price >= market.ma60 * 0.98)) && ma20Up && calmVolume && room && notOverheated && Number.isFinite(momentum20d) && momentum20d >= 3 && momentum20d <= 22 && (Number.isFinite(distance20) ? distance20 >= -8 : true);
    return { ...base, lowBaseBreakout, quietRiser, notOverheated };
  }

  function freshness(stock) {
    const updatedAt = stock.market?.updatedAt || state?.marketUpdatedAt;
    if (!updatedAt || state?.marketMode === "preview" || state?.marketMode === "unavailable") return { tone: "stale", label: "資料未連線", detail: "目前只適合看牌面與篩選邏輯，部署連線後才看股價。" };
    const mode = typeof getMarketModeLabel === "function" ? getMarketModeLabel() : "行情";
    const time = typeof formatMarketUpdatedAt === "function" ? formatMarketUpdatedAt(updatedAt) : updatedAt;
    if (state?.marketMode === "public") return { tone: "public", label: "公開盤後", detail: `${mode} ${time}，不是逐筆即時成交。` };
    return { tone: "fresh", label: "資料新鮮", detail: `${mode} ${time}` };
  }

  function radar(stock) {
    const tech = buildTechnicalState(stock);
    const market = stock.market || {};
    const badges = [];
    if (tech.lowBaseBreakout) badges.push("低基期");
    if (tech.quietRiser) badges.push("默默墊高");
    if (tech.notOverheated) badges.push("未過熱");
    if (Number.isFinite(market.distanceTo60dHigh)) badges.push(`距60日高 ${sig(market.distanceTo60dHigh, 1)}%`);
    if (Number.isFinite(market.distanceTo120dHigh)) badges.push(`距120日高 ${sig(market.distanceTo120dHigh, 1)}%`);
    if (Number.isFinite(market.volumeRatio20)) badges.push(`量比 ${fmt(market.volumeRatio20, 2)}x`);
    if (!market.price) return { tone: "stale", title: "雷達待連線", text: "目前沒有市場資料，部署連線後會自動判斷低基期突破。", badges: badges.length ? badges : ["等待資料"] };
    if (!tech.notOverheated) return { tone: "hot", title: "過熱警示", text: "漲幅、量能或離均線距離偏熱，這張牌比較適合等回測，不適合追價。", badges };
    if (tech.lowBaseBreakout) return { tone: "strong", title: "低基期突破候選", text: "剛站回關鍵均線、動能轉強，量能還沒失控，適合觀察回測不破再出手。", badges };
    if (tech.quietRiser) return { tone: "quiet", title: "默默墊高", text: "價格慢慢墊高但還沒爆量，像是市場還沒完全注意到的觀察牌。", badges };
    if (tech.aboveMa20 && !tech.aboveMa60) return { tone: "watch", title: "月線轉強，季線前壓力", text: "短線開始轉強，但中期壓力還在，先看能不能站穩季線。", badges };
    return { tone: "neutral", title: "一般觀察", text: "目前條件還不夠像低基期突破，可以放觀察但不用急。", badges: badges.length ? badges : ["等待訊號"] };
  }

  installFilters();
  const originalBuildTechnicalState = buildTechnicalState;
  buildTechnicalState = (stock) => enrich(originalBuildTechnicalState(stock), stock);

  const originalGetCardBackHtml = getCardBackHtml;
  getCardBackHtml = (stock) => {
    const html = originalGetCardBackHtml(stock);
    if (html.includes("card-back-radar")) return html;
    const info = radar(stock);
    const fresh = freshness(stock);
    const block = `<div class="card-back-radar ${esc(info.tone)}"><span>${esc(info.title)}</span><b>${esc(info.text)}</b></div>`;
    return html.replace('<div class="card-back-price', `${block}<div class="card-back-price`).replace('<div class="card-back-lines">', `<div class="card-back-lines"><span>${esc(fresh.label)}</span>`);
  };

  const originalRenderQuickDetail = renderQuickDetail;
  renderQuickDetail = (stock, modeLabel) => {
    originalRenderQuickDetail(stock, modeLabel);
    if (!quickDetailCard || quickDetailCard.querySelector(".quick-radar-note")) return;
    const info = radar(stock);
    const fresh = freshness(stock);
    const badges = [...info.badges, fresh.label].slice(0, 6);
    quickDetailCard.querySelector(".quick-summary")?.insertAdjacentHTML("afterend", `<div class="quick-radar-note ${esc(info.tone)}"><span>低基期雷達</span><strong>${esc(info.title)}</strong><p>${esc(info.text)}</p></div><div class="quick-data-note ${esc(fresh.tone)}">${esc(fresh.detail)}</div>`);
    quickDetailCard.querySelector(".quick-chip-row")?.insertAdjacentHTML("afterend", `<div class="quick-chip-row radar-chip-row">${badges.map((label) => `<span>${esc(label)}</span>`).join("")}</div>`);
  };

  if (typeof renderStrategyFilters === "function") renderStrategyFilters();
  try {
    const saved = JSON.parse(localStorage.getItem("stock-fishing-filters-v2") || "null");
    (saved?.strategies || []).forEach((id) => {
      const checkbox = document.querySelector(`[data-strategy-filter][value="${id}"]`);
      if (checkbox) checkbox.checked = true;
    });
  } catch (error) {
    console.warn("Low base radar filter restore failed", error);
  }
  if (typeof syncStrategyPillStates === "function") syncStrategyPillStates();
  if (typeof updateStrategySummary === "function") updateStrategySummary();
  if (typeof renderFish === "function") renderFish();
})();
