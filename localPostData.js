/*
Work in progress... not entirely working outside of local dev...
*/

const fastglob = require("fast-glob");
const fs = require("fs");

const title = (content) => {
  const regex = /title: ['|"](.+?)['|"]/;
  return content.match(regex)[1];
};

const url = (content) => {
  const regex = /permalink: ['|"](.+?)['|"]/;
  return content.match(regex) ? content.match(regex)[1] : false;
};

const postJson = async () => {
  // Create a "glob" of all local posts
  const localPosts = await fastglob("./src/posts/*.md", {
    caseSensitiveMatch: false,
  });

  // Loop through those files and add their content to our `posts` Set
  let posts = new Set();
  for (let post of localPosts) {
    const postData = fs.readFileSync(post, { encoding: "utf8", flag: "r" });
    posts.add({
      url: url(postData) || post.replace("./src", "").replace(".md", ""),
      title: title(postData),
      content: postData.replace(/(<([^>]+)>)/gi, "").trim(),
    });
  }

  // Return the posts Set of objects within an array
  return [...posts];
};

const createPosts = async () => {
  var posts = await postJson();

  fs.writeFileSync(
    "./src/_data/localposts.js",
    `/* Do not modify directly */\n\nmodule.exports = ${JSON.stringify(posts)};`
  );
};

createPosts();
