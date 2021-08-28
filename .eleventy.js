const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "serverless",
    functionsDir: "./netlify/functions/",
  });

  eleventyConfig.addCollection("allPosts", (collections) => {
    var externalPosts = collections.getAll()[0].data.posts;
    var localPosts = collections.getAll()[0].data.localposts;
    return [...localPosts, ...externalPosts];
  });

  eleventyConfig.addFilter("results", (posts, term) => {
    var results = posts.filter(({ title, url, content }) => {
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
