importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/374c5a025ab81efbd668.js",
    "revision": "c4bda07beaf081e72a5c0dd1b3e51752"
  },
  {
    "url": "/_nuxt/3c04ec50ae915983011a.js",
    "revision": "2a465207a4e430f25b46de3153408fda"
  },
  {
    "url": "/_nuxt/3e0b033b433c914f6379.js",
    "revision": "cbe828c9cf6fc38f4fb17979ab0265b4"
  },
  {
    "url": "/_nuxt/776fcb239fb53abd64fd.js",
    "revision": "997fc7c72c4382d7aeafd57559d11f06"
  },
  {
    "url": "/_nuxt/84579e16391274aa6aa9.js",
    "revision": "f3d7f2d2faaf40c3dbed600661f616ba"
  },
  {
    "url": "/_nuxt/bc3c688dd3ffc89456d1.js",
    "revision": "71fba09b49a24479a988fc859a777ff1"
  },
  {
    "url": "/_nuxt/f3b5729b467df32edfa4.js",
    "revision": "7671fd0ff9b12028968e396cbd328dcf"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  }
], {
  "cacheId": "heroes",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





