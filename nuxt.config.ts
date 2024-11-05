// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxthq/studio",
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
    "@nuxt/scripts",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/robots",
  ],

  colorMode: {
    classSuffix: "",
  },

  sitemap:{
    enabled: false,
  },

  robots: {
    enabled: false
  },
  // https://content.nuxt.com/
  content: {
    // documentDriven: {
    //   injectPage: false,
    // },
    build: {
      markdown: {
        highlight: false,
      }
    }
  },

  ogImage: {
    defaults: {
      component: "OgImage",
    },
  },

  runtimeConfig: {
    public: {
      posthogPublicKey: process.env.POSTHOG_PUBLIC_KEY,
      posthogHost: process.env.POSTHOG_HOST
    },
  },
  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ["/", "/sitemap.xml"],
    },
    alias: {
      '#content/server': '~~/mocks/content-server'
    }
  },
  site: {
    url: "https://example.com",
  },
  compatibilityDate: "2024-09-20",
});