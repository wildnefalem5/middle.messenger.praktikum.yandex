const webpackBaseConfig = require("./webpack-base-config");

module.exports = function webpackDevConfig() {
  return {
    ...webpackBaseConfig(),
    mode: "development",
    devServer: {
      open: true,
      host: "localhost",
    },
  };
};
