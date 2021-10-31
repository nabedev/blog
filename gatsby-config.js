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
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `products`,
        path: `${__dirname}/products`,
      },
    },
    `gatsby-plugin-mdx`
  ],
}
