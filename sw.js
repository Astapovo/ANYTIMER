const CACHE_NAME = 'anytimer-v4'; // <--- ПОДНИМАЙ ВЕРСИЮ (v3, v4...) ПРИ КАЖДОМ ПУШЕ

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './bg-music.mp3'
];

// Установка: мгновенно активируем новый воркер
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Активация: удаляем все старые версии кэша
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Запросы: отдаем из кэша, но если нет — качаем из сети
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});