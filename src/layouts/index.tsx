import React, { useState } from "react"
import {
  Provider,
  defaultTheme,
  View,
  Flex,
  Button,
} from "@adobe/react-spectrum"

import Header from "../components/header"

import "../styles/global.css"

const isBrowser = typeof window !== "undefined"

const Layout: React.FC = ({ children }) => {
  const isPrefersColorLight =
    isBrowser && window.matchMedia("(prefers-color-scheme: light)").matches
  const defaultColorMode = isPrefersColorLight ? "light" : "dark"
  const [colorMode, setColorMode] = useState(defaultColorMode)

  const handleToggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light")
  }

  return (
    <Provider theme={defaultTheme} colorScheme={colorMode}>
      <View
        maxWidth="768px"
        margin="auto"
        minHeight="100vh"
        padding="size-400"
        UNSAFE_style={{ boxSizing: "border-box" }}
      >
        <Header
          handleToggleColorMode={handleToggleColorMode}
          colorMode={colorMode}
        />
        <View marginTop="size-800">{children}</View>
      </View>
    </Provider>
  )
}

export default Layout
