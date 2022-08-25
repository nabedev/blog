const path = require(`path`)

// create topics/{topic}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postListTemplate = path.resolve(`src/components/topics.tsx`)
  const result = await graphql(`
    query TopicIndex {
      allMdx {
        distinct(field: frontmatter___topics)
      }
    }
  `)

  result.data.allMdx.distinct.forEach(topic => {
    createPage({
      path: `/topics/${topic}`,
      component: postListTemplate,
      context: {
        topic,
      },
    })
  })
}
