const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "serverless",
    functionsDir: "./netlify/functions/",
  });

  eleventyConfig.addFilter("results", (posts, term) => {
    var results = Object.entries(posts).filter(([_key, { title, url, content }]) => {
      if (title && title.includes(term)) return true;
      if (url && url.includes(term)) return true;
      if (content && content.includes(term)) return true;
    });

    return results;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
