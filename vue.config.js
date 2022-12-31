const { defineConfig } = require('@vue/cli-service')
const publicPath = process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath : publicPath,
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
})
