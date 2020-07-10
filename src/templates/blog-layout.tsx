import React from "react"
import { graphql, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text } from "theme-ui"
import ScrollSyncTableContents from "../components/scroll-sync-table-contents"

export type HeadingType = {
  depth: number, value: string, id: string
}

type PageContextType = {
  title: string,
  date: string,
  body: string,
  headings: HeadingType[],
}

const BlogLayout: React.FC<PageProps<{}, PageContextType>> = ({ pageContext }) => {
  return <Flex>
    <Box sx={{ minWidth: '100%' }}>
      <Heading>{pageContext.title}</Heading>
      <Text sx={{ color: 'gray' }}>{pageContext.date}</Text>
      <MDXRenderer headings={pageContext.headings}>{pageContext.body}</MDXRenderer>
    </Box>
      {pageContext.headings.length > 0 &&
      <Flex sx={{ flexDirection: 'column', minWidth: 'auto', position: 'sticky', top: 0, height: '100%', mt: 5, ml: 2, display: ['none', 'flex'] }}>
        <ScrollSyncTableContents headings={pageContext.headings} />
      </Flex>
      }
  </Flex>
}

export default BlogLayout
