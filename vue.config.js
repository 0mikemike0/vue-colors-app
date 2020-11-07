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
};
