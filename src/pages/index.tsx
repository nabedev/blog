import React from "react"
import { Link, PageProps } from "gatsby"
/** @jsx jsx */
import { jsx, Text, Box, Flex, Divider } from "theme-ui"

const IndexPage: React.FC<PageProps> = () => (
  <>
    <Flex sx={{ alignItems: "center" }}>
      <Box sx={{ ml: "8px" }}>
        <Text sx={{ fontSize: 6, fontWeight: "heading" }}>Hello👋</Text>
        <Text sx={{ fontSize: 6, fontWeight: "heading" }}>
          I'm Yuki Watanabe
        </Text>
        <Text>Web developer, lives in Japan🇯🇵</Text>
        <Text>This site built with Gatsby.js and deployed to Netlify.</Text>
      </Box>
    </Flex>
    <Divider sx={{ mt: 30, mb: 30 }} />
    <Link to="/blog" sx={{ variant: "links.heading" }}>
      Blog
    </Link>
    <a href="https://github.com/wtnb93" sx={{ variant: "links.heading" }}>
      Github
    </a>
  </>
)

export default IndexPage
