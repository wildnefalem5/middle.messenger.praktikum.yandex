const webpackBaseConfig = require("./webpack-base-config");

const path = require("path");

module.exports = function webpackProdConfig() {
  return {
    ...webpackBaseConfig(),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "project.bundle.js",
    },
  };
};
