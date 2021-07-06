import React from "react"
/** @jsx jsx */
import { jsx, Container } from "theme-ui"

import Header from "./header"

const Layout: React.FC = ({ location, children }) => (
  <Container sx={{ mt: 5, pl: 2, pr: 2, pb: 2 }}>
    <Header pathname={location.pathname} />
    <main sx={{ pt: 5 }}>{children}</main>
  </Container>
)

export default Layout
