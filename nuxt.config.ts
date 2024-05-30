// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL
    }
  },
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap'
        }
      ],
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: 'black' }
      ]
    }
  },
  devServer: {
    port: 8002
  },
  // https://nuxt.com/docs/getting-started/deployment
  ssr: true,
  srcDir: 'src',
  css: [
    '@/assets/css/main.scss',
    'lightgallery/scss/lightgallery.scss',
    'lightgallery/scss/lg-zoom.scss'
  ],
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@pinia/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],
  i18n: {
    vueI18n: './i18n.config.js',
    strategy: 'prefix_except_default',
    baseUrl: process.env.BASE_URL,
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'ru',
        iso: 'ru-RU'
      }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: 'en'
    }
  },
  image: {
    quality: 80,
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280
    },
    dir: 'assets/img/portfolio'
  },
  site: {
    url: process.env.BASE_URL
  },
  nitro: {
    // https://nitro.unjs.io/config#compresspublicassets
    compressPublicAssets: true,
    preset: 'github-pages'
  }
})
