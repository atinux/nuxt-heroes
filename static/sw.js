importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "heroes",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/9e1fc9f6619ff1196f5e.js",
    "revision": "9e99ff21f4e5fdec7345e3e68a11b820"
  },
  {
    "url": "/_nuxt/a426294f4bb5f337d829.js",
    "revision": "d1e3c58a6ff7351ce6b8c9a5135da472"
  },
  {
    "url": "/_nuxt/a68178971137bead0f2d.js",
    "revision": "d3b7d1a4efacc0060c06324d3920d019"
  },
  {
    "url": "/_nuxt/b3ae6372fd5ea1126807.js",
    "revision": "2affc50ba3cc8951069e2aef8ff9eedf"
  },
  {
    "url": "/_nuxt/cdb3a1332890f6599e90.js",
    "revision": "c7dafc90ca42ab3f6610b790093b1c21"
  },
  {
    "url": "/_nuxt/da9f1f0af4a25fa6fb9a.js",
    "revision": "917b5110c7b3f18409984a69903a2222"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

