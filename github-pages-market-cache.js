(() => {
  if (!window.location.hostname.endsWith(".github.io") || window.__GH_MARKET_CACHE_PATCHED__) {
    return;
  }

  window.__GH_MARKET_CACHE_PATCHED__ = true;
  const CACHE_URL = "./market-cache.json";
  const SCAN_STORAGE_KEY = "stock-fishing-market-scan-v2";
  const DATA_STORAGE_KEY = "stock-fishing-market-data-v2";

  function cacheStatusText() {
    const timestamp = typeof formatMarketUpdatedAt === "function"
      ? formatMarketUpdatedAt(state.marketUpdatedAt)
      : state.marketUpdatedAt;
    return timestamp ? `行情快取 ${timestamp}` : "行情快取";
  }

  async function loadPagesMarketCache() {
    const response = await fetch(`${CACHE_URL}?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Market cache ${response.status}`);
    }

    const payload = await response.json();
    const updatedAt = payload.updatedAt || payload.generatedAt || new Date().toISOString();

    if (Array.isArray(payload.stocks) && payload.stocks.length) {
      applyScannedStocks(payload.stocks, {
        updatedAt,
        universeCount: payload.universeCount,
        mode: "cache",
      });
      localStorage.setItem(
        SCAN_STORAGE_KEY,
        JSON.stringify({
          updatedAt: state.marketUpdatedAt,
          universeCount: state.universeCount,
          stocks,
          mode: "cache",
        })
      );
      return payload;
    }

    if (payload.data && Object.keys(payload.data).length) {
      state.marketUpdatedAt = updatedAt;
      state.marketMode = "cache";
      applyMarketData(payload.data);
      localStorage.setItem(
        DATA_STORAGE_KEY,
        JSON.stringify({ updatedAt: state.marketUpdatedAt, data: payload.data, mode: "cache" })
      );
      return payload;
    }

    throw new Error("Market cache has no usable data");
  }

  function rerenderMarketView() {
    renderBucket();
    renderAquarium();
    renderFish();

    const selectedStock = stocks.find((stock) => stock.ticker === state.selectedId);
    if (selectedStock) {
      renderQuickDetail(selectedStock);
      renderDetail(selectedStock);
    }
  }

  const originalGetMarketModeLabel = getMarketModeLabel;
  getMarketModeLabel = function patchedMarketModeLabel() {
    if (state.marketMode === "cache") {
      return "行情快取";
    }
    return originalGetMarketModeLabel();
  };

  if (typeof getDataFreshness === "function") {
    const originalGetDataFreshness = getDataFreshness;
    getDataFreshness = function patchedDataFreshness(stock) {
      if (state.marketMode === "cache" && (stock.market?.updatedAt || state.marketUpdatedAt)) {
        return {
          tone: "public",
          label: "行情快取",
          detail: `${cacheStatusText()}，不是逐筆即時成交。`,
        };
      }
      return originalGetDataFreshness(stock);
    };
  }

  scanFullMarket = async function patchedScanFullMarket() {
    if (state.isScanningMarket) {
      return;
    }

    state.isScanningMarket = true;
    pondStatus.textContent = "讀取 GitHub 行情快取";

    try {
      await loadPagesMarketCache();
      pondStatus.textContent = `${cacheStatusText()}，選出 ${stocks.length} 張牌`;
    } catch (error) {
      console.warn("GitHub Pages market cache failed", error);
      if (!state.marketUpdatedAt) {
        applyUnavailableMarketMode();
      }
      pondStatus.textContent = "行情快取尚未產生，請稍後重新整理";
    } finally {
      state.isScanningMarket = false;
      rerenderMarketView();
    }
  };

  refreshMarketData = async function patchedRefreshMarketData() {
    if (state.isRefreshingMarket) {
      return;
    }

    state.isRefreshingMarket = true;
    pondStatus.textContent = "更新 GitHub 行情快取";

    try {
      await loadPagesMarketCache();
      pondStatus.textContent = cacheStatusText();
    } catch (error) {
      console.warn("GitHub Pages market cache refresh failed", error);
      if (!state.marketUpdatedAt) {
        applyUnavailableMarketMode();
      }
      pondStatus.textContent = "行情快取尚未產生，請稍後重新整理";
    } finally {
      state.isRefreshingMarket = false;
      rerenderMarketView();
    }
  };

  [300, 2500, 6000].forEach((delay) => {
    window.setTimeout(() => {
      state.isScanningMarket = false;
      scanFullMarket();
    }, delay);
  });
})();
