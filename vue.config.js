const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  lintOnSave: false, // 关闭保存时的 lint 检查
  transpileDependencies: true,
  chainWebpack: config => {
    // 关键修复：必须同时处理两种 SVG 引用方式
    // 1. 清除默认 svg 规则（针对所有 SVG 文件）
    config.module.rules.delete('svg')

    // 2. 添加 SVG 雪碧图规则（仅处理指定目录）
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(path.resolve('src/assets/svg')) // 你的 SVG 目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 3. 其他 SVG 文件使用 file-loader（避免冲突）
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .exclude.add(path.resolve('src/assets/svg'))
      .end()
      .use('file-loader')
      .loader('file-loader')
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.eladmin.uandj.site',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 去掉 /api 前缀（如果后端不需要）
        }
      }
    }
  }
})
