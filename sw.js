const CACHE = 'inventario-v5';
const ARQUIVOS = [
  './',
  './manifest.webmanifest',
  './icone-180.png',
  './icone-192.png',
  './icone-512.png',
  './vendor/barcode-detector-3.2.1-ponyfill.js',
  './vendor/zxing_reader-3.1.1.wasm'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((nomes) => Promise.all(nomes.filter((n) => n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true })
      .then((r) => r || fetch(e.request))
      .catch(() => (e.request.mode === 'navigate' ? caches.match('./') : Response.error()))
  );
});
