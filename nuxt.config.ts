// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxthq/studio',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-og-image'
  ],

  content: {
    markdown: {
      anchorLinks: false,
    },
  },

  // force module initialization on dev env
  studio: {
    enabled: true
  },

  // Fonts
  fontMetrics: {
    fonts: ['Poppins']
  },

  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Poppins: [400, 600]
    }
  },

  routeRules: {
    '/api/search.json': { prerender: true },
  },

  // Devtools / Typescript
  devtools: { enabled: true },

  typescript: { strict: false },

  compatibilityDate: '2024-07-11'
})
