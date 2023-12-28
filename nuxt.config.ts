// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  layout: true,
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-mdi',
  ],
  pages: true,
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
})
