var CACHE_NAME = "my-site-cache-v1";
var urlsToCache = [
  "/static/js/0.010bdd55.chunk.js",
  "/static/js/1.a36a8d82.chunk.js",
  "/static/js/4.23078a0a.chunk.js",
  "/static/js/5.c843bbe5.chunk.js",
  "/static/js/6.a1041067.chunk.js",
  "/static/js/7.753ae92f.chunk.js",
  "/static/js/8.a27b10b3.chunk.js",
  "/static/js/9.bca2144c.chunk.js",
  "/static/js/10.72f25114.chunk.js",
  "/static/js/11.789e34b9.chunk.js",
  "/static/js/12.750626d6.chunk.js",
  "/static/js/13.a65e1b14.chunk.js",
  "/static/js/14.d481b50d.chunk.js",
  "/static/js/15.3be52b63.chunk.js",
  "/static/js/16.097a8c6a.chunk.js",
  "/static/js/17.75d33dff.chunk.js",
  "/static/js/18.74588347.chunk.js",
  "/static/js/19.e2d1fd83.chunk.js",
  "/static/js/20.e20f6492.chunk.js",
  "/static/js/21.81cc69e7.chunk.js",
  "/static/js/22.cbf05c13.chunk.js",
  "/static/js/23.c8814e12.chunk.js",
  "/static/js/main.1508b0c9.chunk.js",
  "/static/js/runtime-main.e2a96fbd.js",

  "/",
  "/index.html",
];

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
