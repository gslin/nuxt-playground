// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  pages: true,
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
  layout: true,
})
