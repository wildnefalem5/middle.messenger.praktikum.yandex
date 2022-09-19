import { webpackBaseConfig } from "./webpack-base-config";

export const webpackDevConfig = {
  ...webpackBaseConfig,
  mode: "development",
  devServer: {
    open: true,
    host: "localhost",
  },
};
