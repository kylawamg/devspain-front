require("dotenv").config();
const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");
const webpack = require("webpack");

const isProd = (process.env.NODE_ENV || "production") === "production";

const assetPrefix = isProd ? "/your-repository-name" : "";
module.exports = withSass({
  env: {
    API_URL: process.env.API_URL,
  },
});
module.exports = {
  exportPathMap: () => ({
    "/": { page: "/" },
    "/page1": { page: "/page1" },
  }),
  assetPrefix: assetPrefix,
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.ASSET_PREFIX": JSON.stringify(assetPrefix),
      })
    );

    return config;
  },
};
