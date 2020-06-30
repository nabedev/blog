import React, { Children } from "react"
import { StaticQuery, graphql, Link, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

/** @jsx jsx */
import { jsx, Flex, Box, useColorMode, Heading, Text } from "theme-ui"
import { FaMoon, FaSun, FaGithub } from "react-icons/fa"
import Layout from "../components/layout"
import ScrollSyncHeadingTree from "../components/scroll-sync-heading-tree"
import { BlogLayoutQuery } from "../../types/graphql-types"

const BlogLayout: React.FC<PageProps<BlogLayoutQuery>> = ({ data }) => {
  console.log(data)
  return <Layout>
    <Flex>
      <Box sx={{ minWidth: '100%' }}>
        <Heading>{data.mdx.frontmatter.title}</Heading>
        <Text sx={{ color: 'gray' }}>{data.mdx.frontmatter.date}</Text>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Box>
      {
        data.mdx.headings.length > 0 &&
          <Flex sx={{ flexDirection: 'column', minWidth: 'auto', position: 'sticky', top: 0, height: '100%', mt: 5, ml: 2 }}>
            <ScrollSyncHeadingTree headings={data.mdx.headings} />
          </Flex>
      }
    </Flex>
  </Layout>
}

export default BlogLayout

export const pageQuery = graphql`
  query BlogLayout($path: String) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        description
      }
      headings {
        depth
        value
      }
    }
  }
`
