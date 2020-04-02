module.exports = {
  publicPath: '/',
  outputDir: 'webApp',
  pages: {
    index: {
      // page 的入口
      entry: 'src/views/Home/main.ts',
      // 模板来源
      template: 'src/views/Home/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '3keji',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    list: {
      // page 的入口
      entry: 'src/views/List/main.ts',
      // 模板来源
      template: 'src/views/List/list.html',
      // 在 dist/list.html 的输出
      filename: 'list.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '3keji',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'list']
    }
  },
  lintOnSave: true,
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      }
    }
  }
};
