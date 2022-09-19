const webpackDevConfig = require("./webpack-development-config");
const webpackProdConfig = require("./webpack-production-config");

const isProduction = process.env.NODE_ENV == "production";

module.exports = () => {
  return isProduction ? webpackProdConfig() : webpackDevConfig();
};
