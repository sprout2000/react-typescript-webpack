const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type import("webpack").Configuration */
module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  entry: {
    main: "./src/main.tsx",
  },
  output: {
    filename: "[name].js",
    assetModuleFilename: "images/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|svg|ttf|eof|woff?2?)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/images/favicon.svg",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "assets",
          to: "assets",
        },
      ],
    }),
  ],
};
