import React from "react"
import { Link, graphql, PageProps, Page } from "gatsby"
/** @jsx jsx */
import { jsx, Text, Box, Heading } from "theme-ui"

import { BlogIndexQuery } from "../../../types/graphql-types"

const BlogIndex: React.FC<PageProps<BlogIndexQuery>> = ({ data }) => (
  <>
    {data.allMdx.nodes.map(node => (
      <Box sx={{ "&+&": { mt: 5 } }}>
        <Heading>
          <Link to={`/${node.slug}`} sx={{ variant: "links.heading" }}>
            {node.frontmatter.title}
          </Link>
        </Heading>
        <Text sx={{ color: "gray", fontSize: 2 }}>{node.frontmatter.date}</Text>
      </Box>
    ))}
  </>
)

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    allMdx(
      filter: { slug: { glob: "blog/*" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        slug
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
