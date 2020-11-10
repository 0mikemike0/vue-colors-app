module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        const arg = args[0];
        arg.template = './public/index.pug';
        return args;
      });
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: ' @import "@/assets/scss/main.scss"; ',
      },
    },
  },
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/production-sub-path/'
  //   : '/',
};
