# 11ty Serverless Search

An example of using [11ty Serverless](https://www.11ty.dev/docs/plugins/serverless/) to create site search using local and External.

External results are fetched from [Stephanie Eckles dev.to profile](https://dev.to/5t3ph). 11ty serverless doesn't currently support typical collections, but it does support collections created from local data under specific conditions. So, we run a prebuild/prestart Node script to generate local data containing an array of the local post data.

When a search is requested, 11ty Serverless serves the page by passing the combined custom collection holding the external and local data through an 11ty filter to search the content and return search results.

## Development Scripts

**`npm start`**

> Run 11ty with hot reload at localhost:8080, including reload based on Sass changes

**`npm run build`**

> Production build includes minified, autoprefixed CSS

Use this as the "Publish command" if needed by hosting such as Netlify.

## Resources to extend this and learn 11ty

**Ensure accessible colors** by adding my [a11y-color-tokens package](https://www.npmjs.com/package/a11y-color-tokens)

**Learn to build an 11ty site in 20 mins** with my [egghead video course](https://5t3ph.dev/learn-11ty) and see how to add a blog and custom data.

**Add auto-generated social media images** with [my plugin](https://www.npmjs.com/package/@11tyrocks/eleventy-plugin-social-images)

**Explore advanced setup of custom data** through my [tutorial on building a community site](https://css-tricks.com/a-community-driven-site-with-eleventy-building-the-site/)

**For a more full-featured starter** check out my [11ty Netlify Jumpstart](https://11ty-netlify-jumpstart.netlify.app/) (also works for hosts other than Netlify).
