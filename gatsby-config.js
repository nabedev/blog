require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Blog`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-typegen`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          // {
          //   resolve: `gatsby-remark-copy-linked-files`,
          //   options: {
          //     destinationDir: `path/to/dir`,
          //     ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
          //   },
          // },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
              backgroundColor: `none`,
              withWebp: `true`,
            },
          },
        ],
      },
    },
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
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
      },
    },
  ],
}
