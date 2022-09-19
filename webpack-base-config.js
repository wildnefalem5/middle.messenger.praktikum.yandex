const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function webpackBaseConfig() {
  return {
    entry: "./src/index.ts",
    resolve: {
      extensions: [".ts", ".js"],
      alias: {
        handlebars: "handlebars/dist/handlebars.js",
        "@components": path.resolve(__dirname, "src/components"),
        "@api": path.resolve(__dirname, "src/api"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@images": path.resolve(__dirname, "src/assets/images"),
        "@icons": path.resolve(__dirname, "src/assets/icons"),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      new MiniCssExtractPlugin(),
    ],
    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: ["/node_modules/"],
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-typescript"],
            },
          },
        },
        {
          test: /\.ts$/,
          loader: "ts-loader",
          exclude: ["/node_modules/"],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: "./src/assets/images",
        },
        {
          test: /\.svg$/,
          type: "./src/assets/icons",
        },
        {
          test: /.s?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.hbs/,
          loader: "handlebars-loader",
          exclude: /(node_modules|bower_components)/,
        },
      ],
    },
  };
};
