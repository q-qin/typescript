module.exports = {
  origin: 'https://test.miniprogram.com',
  entry: '/index',
  router: { index: ['/index'] },
  redirect: {
    notFound: 'app',
    accessDenied: 'app'
  },
  generate: {
    app: 'noconfig',
    appWxss: 'default',
    autoBuildNpm: 'yarn'
  },
  app: {
    backgroundTextStyle: 'dark',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: 'kbone'
  },
  appExtraConfig: {
    sitemapLocation: 'sitemap.json'
  },
  global: {
    share: true,
    windowScroll: false,
    backgroundColor: '#F7F7F7',
    rem: true
  },
  pages: {},
  optimization: {
    domSubTreeLevel: 10,

    elementMultiplexing: true,
    textMultiplexing: true,
    commentMultiplexing: true,
    domExtendMultiplexing: true,

    styleValueReduce: 5000,
    attrValueReduce: 5000
  },
  projectConfig: {
    appid: 'wxb78e572fba08283e',
    projectname: 'typescript'
  },
  packageConfig: {
    name: 'typescript'
  },
  // vue-cli 相关配置
  vue: {
    entryFileName: 'main.mp.ts',
    cdnPath: '/',
    cdnLimit: 10240
  }
};
