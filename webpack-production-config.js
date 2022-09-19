import { webpackBaseConfig } from "./webpack-base-config";

const path = require("path");

export const WebpackProdConfig = {
  ...webpackBaseConfig,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "project.bundle.js",
  },
};
