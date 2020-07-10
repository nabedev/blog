/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const GithubSlugger = require('github-slugger')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogLayout = require.resolve(`./src/templates/blog-layout.tsx`)

  const result = await graphql(`
    {
      allMdx {
        nodes {
          headings {
            value
            depth
          }
          body
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
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

  const gs = new GithubSlugger()

  result.data.allMdx.nodes.forEach(node => {
    createPage({
      path: node.frontmatter.path,
      component: blogLayout,
      context: {
        title: node.frontmatter.title,
        date: node.frontmatter.date,
        body: node.body,
        // MEMO: The ID of the heading created by remark-slug cannot fetch from graphql, so regenerate it.
        // https://github.com/remarkjs/remark-slug#remarkuseslug
        headings: node.headings.map(heading => {
          heading['id'] = gs.slug(heading.value)
          return heading
        }),
      }
    })
  })
}
