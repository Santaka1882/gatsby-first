module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "(ᗜˬᗜ) Aya fumo blog (ᗜˬᗜ)",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
