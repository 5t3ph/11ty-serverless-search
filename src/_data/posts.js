const axios = require("axios");

const apiRoot = "https://dev.to/api/articles/me/published?per_page=1";

module.exports = async () => {
  const { data } = await axios.get(apiRoot, {
    headers: { "api-key": process.env.DEVTO },
  });

  let response = new Set();
  // Grab the items and re-format to the fields we want
  if (data.length) {
    data.map((item) => {
      response.add({
        title: item.title,
        url: item.url,
        content: item.body_markdown,
      });
    });
  }
  return [...response];
};
