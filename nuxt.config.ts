// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt'
  ],
  pages: true,
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
  layout: true,
})
