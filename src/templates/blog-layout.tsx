import React from "react"
import { graphql, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text } from "theme-ui"
import ScrollSyncHeadingTree from "../components/scroll-sync-heading-tree"

type PageContextType = {
  title: string,
  date: string,
  body: string,
  headings: string,
}

const BlogLayout: React.FC<PageProps<{}, PageContextType>> = ({ pageContext }) => {
  return <Flex>
      <Box sx={{ minWidth: '100%' }}>
        <Heading>{pageContext.title}</Heading>
        <Text sx={{ color: 'gray' }}>{pageContext.date}</Text>
        <MDXRenderer headings={pageContext.headings}>{pageContext.body}</MDXRenderer>
      </Box>
        {
          // TODO: re-write query selector in use-active-heading hook.
          // Heading id given by remark-plugin and the value that return by query are different.
          /* {pageContext.headings.length > 0 &&
          <Flex sx={{ flexDirection: 'column', minWidth: 'auto', position: 'sticky', top: 0, height: '100%', mt: 5, ml: 2 }}>
            <ScrollSyncHeadingTree headings={pageContext.headings} />
          </Flex>
          } */
        }
    </Flex>
}

export default BlogLayout
