const CACHE_NAME = "malfargats-cache-v1";
const urlsToCache = [
  "index.html",
  "style.css",
  "script.js",
  "manifest.json"
];

// Instal·lació del Service Worker
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercepta peticions i serveix en mode offline
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
