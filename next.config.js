require("dotenv").config();
const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");
const isProd = process.env.NODE_ENV === "production";
module.exports = withSass({
  env: {
    API_URL: process.env.API_URL,
    assetPrefix: isProd ? "https://kylawamg.github.io" : "",
  },
});
