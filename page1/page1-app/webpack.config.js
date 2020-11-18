const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "demo1",
    projectName: "page1-app",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    module: {
      rules: [{ test: /\.png$/, use: "file-loader" }],
    },
  });
};
