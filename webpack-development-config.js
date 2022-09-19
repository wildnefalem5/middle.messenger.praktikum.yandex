const { webpackBaseConfig } = require("./webpack-base-config");

export const webpackDevConfig = {
  ...webpackBaseConfig,
  mode: "development",
  devServer: {
    open: true,
    host: "localhost",
  },
};
