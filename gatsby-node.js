/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogLayout = require.resolve(`./src/templates/blog-layout.tsx`)

  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMdx.nodes.forEach(node => {
    createPage({
      path: node.frontmatter.path,
      component: blogLayout,
    })
  })
}
