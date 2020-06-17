require("dotenv").config();
const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");
const isProd = process.env.NODE_ENV === "production";
console.log(isProd);
module.exports = withSass({
  env: {
    API_URL: process.env.API_URL,
    exportPathMap: () => ({
      "/": { page: "/" },
    }),
    assetPrefix: isProd ? "/devspain-front" : "",
  },
});
