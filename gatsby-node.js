const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(filter: {fileAbsolutePath: {regex: "/blog/blog/"}}) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve(`./src/components/posts-page-layout.tsx`),
      context: { id: node.id },
    })
  })
}