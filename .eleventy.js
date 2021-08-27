const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "serverless",
    functionsDir: "./netlify/functions/",
  });

  eleventyConfig.addFilter("results", (posts, term) => {
    var results = Object.entries(posts).filter(([_key, { title, url, content }]) => {
      const regex = RegExp(term, "i");
      if (title && regex.test(title)) return true;
      if (url && regex.test(url)) return true;
      if (content && regex.test(content)) return true;
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
