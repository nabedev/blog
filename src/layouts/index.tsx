import React from "react"
import { SSRProvider, Provider, darkTheme, View } from "@adobe/react-spectrum"

import "../styles/global.css"

const Layout: React.FC = ({ children }) => {
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
          <View marginTop="size-800">{children}</View>
        </View>
      </Provider>
    </SSRProvider>
  )
}

export default Layout
