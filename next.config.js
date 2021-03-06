require("dotenv").config();
const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");
module.exports = withSass({
  env: {
    API_URL: process.env.API_URL,
    BASE_PATH: "/devspain-front",
  },
  assetPrefix: process.env.BASE_PATH || "",
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || "",
  },
});
