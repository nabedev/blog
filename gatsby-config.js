module.exports = {
  siteMetadata: {
    title: `Blog`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    `gatsby-plugin-mdx`,
    "gatsby-plugin-theme-ui",
  ],
}
