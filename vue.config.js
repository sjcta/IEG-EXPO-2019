// vue.config.js

module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    }
  },
  baseUrl: '/',
  lintOnSave: false,
  outputDir: undefined,
  assetsDir: 'assets',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined
}
