import React from "react"
import { graphql, PageProps } from "gatsby"

import PostList from "../../components/post-list"

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
}) => <PostList data={data} />

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
