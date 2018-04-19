process.env.HEROES_API = process.env.HEROES_API || 'http://localhost:8000'
process.env.GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || '9ded8c99c49ab83cabe8'

export default {
  mode: 'universal', // server-side rendering activated

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: { lang: 'en' },
    title: 'Heroes: Marvel vs DC',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Marvel vs DC Heroes demo' },
      { 'http-equiv': 'Content-Language', content: 'en' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000000' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/auth',
    { src: '~/plugins/sockets', ssr: false }
  ],

   /*
  ** Env
  */
  env: {
    api: process.env.HEROES_API,
    github: {
      oauthUrl: `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
    }
  },
  /*
  ** Server middleware
  */
  serverMiddleware: [
    '~/server-middleware/github-callback',
    '~/server-middleware/logout'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage.html
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://axios.nuxtjs.org/options.html
    proxy: true,
    proxyHeaders: false
  },
  proxy: {
    '/api': {
      target: process.env.HEROES_API,
      pathRewrite: {
        '^/api/': '/'
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
