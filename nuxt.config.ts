// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "v-gsap-nuxt",
    "@nuxtjs/sitemap",
  ],
  image: {
    provider: "ipx",
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "fr", name: "French", file: "fr.json" },
    ],
    customRoutes: "config",
    pages: {
      blog: {
        en: "/blog", // -> accessible at /about-us (no prefix since it's the default locale)
        fr: "/presse", // -> accessible at /fr/a-propos
      },
    },
  },
});
("");
