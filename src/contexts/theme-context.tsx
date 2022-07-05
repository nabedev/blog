import React, { useState } from "react"
import { Provider, defaultTheme } from "@adobe/react-spectrum"

export const ThemeContext = React.createContext()

const ThemeProvider: React.FC = ({ children }) => {
  const [colorMode, setColorMode] = useState("dark")

  const toggleColorMode = () => {
    setColorMode(colorMode === "dark" ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
      <Provider
        theme={defaultTheme}
        colorScheme={colorMode}
        scale="medium"
        locale="ja-JP"
        breakpoints={{ S: 0, M: 768, L: 1024 }}
      >
        {children}
      </Provider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
