import React from "react"
import { Link, graphql, PageProps, Page } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import {
  Heading,
  Text,
  View,
  Flex,
  Link as SpectrumLink,
} from "@adobe/react-spectrum"

const BlogIndex: React.FC<PageProps> = ({ data }) => (
  <Flex direction="column" gap="size-150">
    {data.allMdx.nodes.map(node => (
      <View key={node.id}>
        <Heading>
          <Link to={`/blog/${node.slug}`}>
            <SpectrumLink>{node.frontmatter.title}</SpectrumLink>
          </Link>
        </Heading>
        <Text>{node.frontmatter.date}</Text>
      </View>
    ))}
  </Flex>
)

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
