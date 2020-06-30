import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { jsx, Container, Divider, Text, ThemeProvider } from "theme-ui"
import { MDXProvider } from '@mdx-js/react'

import Header from "./header"

const Layout: React.FC = ({ children }) => (
  <Container sx={{ mt: 5, pl: 2, pr: 2, pb: 2 }}>
    <Header />
    <Divider />
    <main sx={{ pt: 5, mb: '100vh' }}>
      {children}
    </main>
    <footer>
      <Text sx={{ fontSize: 0, }}>
        Built with Gatsby and deployed Netlify.
        Written by <Link to="/about" sx={{ variant: 'styles.a' }}>Yuki Watanabe</Link>
      </Text>
    </footer>
  </Container>
)

export default Layout
