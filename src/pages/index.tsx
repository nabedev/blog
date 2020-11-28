import React from "react"
import { Link, PageProps } from "gatsby"
/** @jsx jsx */
import { jsx, Text, Box, Flex, Divider } from "theme-ui"

const IndexPage: React.FC<PageProps> = () => (
  <>
    <Flex sx={{ alignItems: "center" }}>
      <Box sx={{ ml: "8px" }}>
        <Text sx={{ fontSize: 6, fontWeight: "heading" }}>Yuki</Text>
        <Text sx={{ fontSize: 6, fontWeight: "heading" }}>Watanabe</Text>
        <Text>Web developer</Text>
        <Text sx={{ fontSize: 0 }}>
          This site built with Gatsby.js and deployed Netlify.
        </Text>
      </Box>
    </Flex>
    <Divider sx={{ mt: 30, mb: 30 }} />
    <Link to="/blog" sx={{ variant: "links.heading" }}>
      Blog
    </Link>
    <Link to="/demo" sx={{ variant: "links.heading" }}>
      Demo
    </Link>
    <a href="https://github.com/wtnb93" sx={{ variant: "links.heading" }}>
      Github
    </a>
  </>
)

export default IndexPage
