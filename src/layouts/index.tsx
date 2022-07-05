import React from "react"
import { PageProps } from "gatsby"
import { SSRProvider, View, Flex } from "@adobe/react-spectrum"

import ThemeProvider from "../contexts/theme-context"
import BreadCrumbs from "../components/breadcrumbs"
import Header from "../components/header"

import "../styles/global.css"

const Layout: React.FC<PageProps> = ({ children, location }) => {
  const paths = location.pathname.split("/").filter(item => item !== "")

  return (
    <SSRProvider>
      <ThemeProvider>
        <View
          maxWidth="768px"
          margin="auto"
          minHeight="100vh"
          padding="size-400"
          UNSAFE_style={{ boxSizing: "border-box" }}
        >
          <Flex justifyContent="space-between">
            <BreadCrumbs paths={paths} />
            <Header />
          </Flex>
          <View marginTop="size-800">{children}</View>
        </View>
      </ThemeProvider>
    </SSRProvider>
  )
}

export default Layout
