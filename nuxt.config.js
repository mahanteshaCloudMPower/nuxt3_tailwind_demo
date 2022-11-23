// https://v3.nuxtjs.org/api/configuration/nuxt.config
// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  head: {
    title: "Nuxt3 Tailwind Demo",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
  },
  ssr: false,
  css: ["~/assets/css/main.css"],

  //  pluggins:[{
  //   src: '~/plugins/JSONViewer'
  //   }],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  buildModules: [
    // ...
  ],
  modules: ["@nuxtjs/tailwindcss"],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
});
