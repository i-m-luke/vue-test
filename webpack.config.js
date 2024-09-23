//@ts-check

"use strict";

const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

//@ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/

module.exports = () => {
  const root = __dirname;
  return {
    entry: { view: path.join(root, "src", "index.ts") },
    output: {
      path: path.join(root, "out"),
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.js$|\.ts$/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          use: ["vue-style-loader", "css-loader"],
        },
      ],
    },
    plugins: [new VueLoaderPlugin()],
    target: "web",
    devtool: "eval-source-map",
    performance: {
      hints: false,
    },
  };
};
