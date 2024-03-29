const fg = require('fast-glob')

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Allow lan in development
  server: {
    host: '0.0.0.0',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CLAN UNI',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: '/scripts/rating.js',
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ant-design-vue/dist/antd.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui', '@/plugins/contentData.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    fallback: true,
    routes() {
      // Get all nested files and directories in content directory for production
      return fg(['content/**/*'], { onlyFiles: false }).then((fgResult) => {
        const dynamicRoutes = fgResult.map((fullPath) => {
          const path = fullPath.replace(/^.*?content\//, '')
          const isFile = path.endsWith('.md')
          const route = isFile ? path.slice(0, -3) : path

          return `/blog/${route}`
        })
        return dynamicRoutes
      })
    },
  },
}
