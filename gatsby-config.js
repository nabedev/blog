const remarkSlug = require("remark-slug")
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Blog`,
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        documentPaths: [
          "./src/**/*.{ts,tsx,mdx}",
          "./src/pages/blog/**/*.{mdx}",
        ],
        fileName: `types/graphql-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        // MEMO: I would like to extend the query and pass additional data to the defaultLayout through the context, but I'm not sure.
        // (ref: https://github.com/gatsbyjs/gatsby/issues/16845 also https://github.com/gatsbyjs/gatsby/issues/24164)
        // Instead, I'm creating pages programmatically with gatsby-nodeAPI.
        // defaultLayouts: { default: require.resolve("./src/components/blog-layout.tsx") },
        remarkPlugins: [remarkSlug],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-line-breaks`,
        ],
      },
    },
    "gatsby-plugin-theme-ui",
  ],
}
