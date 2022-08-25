import { Link, PageProps } from "gatsby"
import React from "react"

import {Breadcrumbs, View, Item} from '@adobe/react-spectrum'

const renderBreadcrumbs = (paths: string[]) => {
  if (paths.length === 0) {
    return
  }
  return (
    <Breadcrumbs size="M">
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
    <View margin="auto" padding="size-300">
      {renderBreadcrumbs(paths)}
      <View marginTop="size-500">
      {children}
      </View>
    </View>
  )
}

export default Layout
