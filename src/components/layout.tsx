import React from "react"
import { Box, Container, Divider } from "theme-ui"

import Header from "./header"

const Layout: React.FC = ({ children }) => (
  <Container sx={{ mt: 5, pl: 2, pr: 2, pb: '100%' }}>
    <Header />
    <Divider />
    <main>
      {children}
    </main>
  </Container>
)

export default Layout
