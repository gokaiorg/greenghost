const CACHE_NAME = "green-ghost-cache-v1";

self.addEventListener("install", () => {
  // Skip waiting to ensure the new service worker activates immediately
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Claim clients immediately so the service worker controls the page without reloading
  event.waitUntil(self.clients.claim());

  // Clean up old caches if needed
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});

self.addEventListener("fetch", () => {
  // Simple cache-first strategy for images, network-first for others could be implemented here.
  // For now, we'll just pass through specific requests or could add basic caching.
  // This is a minimal implementation to satisfy PWA requirements.
});
