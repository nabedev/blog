import React, { useState, useEffect } from "react"
import {
  SSRProvider,
  Provider,
  defaultTheme,
  View,
} from "@adobe/react-spectrum"

import "../styles/global.css"

const Layout: React.FC = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <SSRProvider>
      <Provider theme={defaultTheme} colorScheme="dark">
        <View
          maxWidth="768px"
          margin="auto"
          minHeight="100vh"
          padding="size-400"
          UNSAFE_style={{ boxSizing: "border-box" }}
        >
          <View marginTop="size-800">{children}</View>
        </View>
      </Provider>
    </SSRProvider>
  )
}

export default Layout
