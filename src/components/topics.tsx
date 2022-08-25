import React from "react"
import { graphql, PageProps } from "gatsby"

import PostList from "./post-list"

const Topic: React.FC<PageProps<GatsbyTypes.TopicQuery>> = ({ data }) => {
  return <PostList data={data} />
}

export default Topic

export const query = graphql`
  query Topic($topic: String) {
    allMdx(
      filter: { frontmatter: { isArchive: { nin: true }, topics: { in: [$topic] } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          topics
        }
      }
    }
  }
`
