const CACHE_NAME = 'anytimer-v7.18';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './bg-music.mp3'
];

const EXTERNAL_ASSETS = [
  'https://unpkg.com/lucide@latest',
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&display=swap'
];

// Установка: кэшируем локальные и внешние ресурсы
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(ASSETS);
      for (const url of EXTERNAL_ASSETS) {
        try {
          const res = await fetch(url, { mode: 'cors' });
          if (res && res.ok) {
            await cache.put(url, res);
          }
        } catch (e) {
          // Игнорируем сетевые сбои для опциональных внешних ресурсов при оффлайн-сборке
        }
      }
    })
  );
});

// Активация: удаляем устаревшие версии кэша и захватываем клиенты
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

// Запросы: Cache-first с динамическим сохранением сети и оффлайн-навигацией
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Оффлайн fallback для навигации PWA на Android / Windows
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html') || caches.match('./');
          }
        });
    })
  );
});
