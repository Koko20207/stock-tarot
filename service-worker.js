const CACHE_NAME = "stock-tarot-v21";
const APP_FILES = [
  "./",
  "./index.html",
  "./styles.css?v=21",
  "./low-base-radar.css?v=21",
  "./app.js?v=21",
  "./low-base-radar.js?v=21",
  "./github-pages-market-cache.js?v=21",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

const MOBILE_TOUCH_FIX_CSS = `
@media (max-width: 780px) {
  .pond-surface {
    -webkit-overflow-scrolling: touch !important;
    overscroll-behavior-x: contain !important;
    overscroll-behavior-y: auto !important;
    touch-action: pan-x pan-y !important;
  }

  .pond-surface .fish.tarot-card {
    touch-action: pan-x pan-y !important;
  }
}
`;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);

  if (
    requestUrl.origin === self.location.origin &&
    requestUrl.pathname.endsWith("/market-cache.json")
  ) {
    event.respondWith(fetch(event.request, { cache: "no-store" }));
    return;
  }

  if (
    requestUrl.origin === self.location.origin &&
    requestUrl.pathname.endsWith("/styles.css")
  ) {
    event.respondWith(
      fetch(event.request, { cache: "no-store" })
        .then((response) => response.text())
        .then((css) =>
          new Response(`${css}\n${MOBILE_TOUCH_FIX_CSS}`, {
            headers: {
              "Content-Type": "text/css; charset=utf-8",
              "Cache-Control": "no-cache",
            },
          })
        )
        .catch(() =>
          caches.match(event.request).then((cached) => {
            if (!cached) {
              return fetch(event.request);
            }

            return cached.text().then(
              (css) =>
                new Response(`${css}\n${MOBILE_TOUCH_FIX_CSS}`, {
                  headers: {
                    "Content-Type": "text/css; charset=utf-8",
                    "Cache-Control": "no-cache",
                  },
                })
            );
          })
        )
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
