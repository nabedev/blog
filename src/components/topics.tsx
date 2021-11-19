import React from "react"
import { graphql, PageProps } from "gatsby"

import PostList from "../components/post-list"

const Topic: React.FC<PageProps<GatsbyTypes.TopicQuery>> = ({ data }) => (
  <PostList data={data} />
)

export default Topic

export const query = graphql`
  query Topic($topic: String) {
    allMdx(filter: { frontmatter: { topics: { in: [$topic] } } }) {
      nodes {
        slug
        frontmatter {
          title
          date
          topics
        }
      }
    }
  }
`
