import { Flex, Item, View } from "@adobe/react-spectrum"
import { Link, PageProps } from "gatsby"
import React from "react"

import Breadcrumbs from "../components/Breadcrumbs"

const Layout: React.FC<PageProps> = ({ children, location }) => {
  const paths = location.pathname.split("/").filter(item => item !== "")
  return (
    <View maxWidth="768px" minHeight="100vh" margin="auto">
      <View padding="size-200">
        <Breadcrumbs paths={paths} />
        {children}
      </View>
    </View>
  )
}

export default Layout
