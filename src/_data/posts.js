const axios = require("axios");

const apiRoot = "https://dev.to/api/articles/me/published?per_page=100";

module.exports = async () => {
  const { data } = await axios.get(apiRoot, {
    headers: { "api-key": process.env.DEVTO },
  });

  let response = [];
  // Grab the items and re-format to the fields we want
  if (data.length) {
    response = data.map((item) => {
      return {
        title: item.title,
        url: item.url,
        content: item.body_markdown,
      };
    });
  }
  return response;
};