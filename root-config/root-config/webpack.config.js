const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (webpackConfigEnv) => {
  const orgName = "demo1";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    // devServer: {
    //   historyApiFallback: true,
    // },
    // module: {
    //   rules: [
    //     {
    //       test: /\.s[ac]ss$/i,
    //       use: [
    //         {
    //           loader: MiniCssExtractPlugin.loader,
    //           options: {
    //             hmr: true,
    //             reloadAll: true,
    //           },
    //         },
    //         "css-loader",
    //         "sass-loader",
    //       ],
    //     },
    //   ],
    // },
    // plugins: [
    //   new MiniCssExtractPlugin({
    //     filename: "bundle.[hash].css",
    //   }),
    // ],
  });
};
