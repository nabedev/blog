import React from "react"
import { Link, PageProps } from "gatsby"
import { SSRProvider, Provider, darkTheme, View } from "@adobe/react-spectrum"
import { Breadcrumbs, Item } from "@adobe/react-spectrum"

import "../styles/global.css"

const renderBreadcrumbs = paths => {
  if (paths.length === 0) {
    return
  }
  return (
    <Breadcrumbs size="M">
      <Item key="home">
        <Link to="/">Home</Link>
      </Item>
      {paths.map(path => (
        <Item key={path}>
          <Link to={`/${path}`}>{path}</Link>
        </Item>
      ))}
    </Breadcrumbs>
  )
}

const Layout: React.FC<PageProps> = ({ children, location }) => {
  const paths = location.pathname.split("/").filter(item => item !== "")
  return (
    <SSRProvider>
      <Provider
        theme={darkTheme}
        colorScheme="dark"
        scale="medium"
        locale="ja-JP"
        breakpoints={{ S: 0, M: 768, L: 1024 }}
      >
        <View
          maxWidth="768px"
          margin="auto"
          minHeight="100vh"
          padding="size-400"
          UNSAFE_style={{ boxSizing: "border-box" }}
        >
          {renderBreadcrumbs(paths)}
          <View marginTop="size-800">{children}</View>
        </View>
      </Provider>
    </SSRProvider>
  )
}

export default Layout
