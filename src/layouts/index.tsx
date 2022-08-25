import { Link, PageProps } from "gatsby"
import React from "react"

import {Breadcrumbs, View, Item} from '@adobe/react-spectrum'

const renderBreadcrumbs = (paths: string[]) => {
  if (paths.length === 0) {
    return
  }
  return (
    <Breadcrumbs size="M" marginBottom="size-500">
        <Item key="home">
          <Link to="/">Home</Link>
        </Item>
        {paths.map((path) => (
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
    <View margin="auto" minHeight="100vh" maxWidth="768px">
      {renderBreadcrumbs(paths)}
      <View>
      {children}
      </View>
    </View>
  )
}

export default Layout
