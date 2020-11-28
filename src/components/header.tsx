import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { jsx, Flex, useColorMode } from "theme-ui"
import { FaMoon, FaSun } from "react-icons/fa"
import { FiToggleRight, FiToggleLeft } from "react-icons/fi"

const Header: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Flex sx={{ float: "right" }}>
      <FaSun
        sx={{ variant: "buttons.icon", mr: 1 }}
        onClick={() => setColorMode("light")}
      />
      {colorMode === "default" ? (
        <FiToggleRight
          sx={{ variant: "buttons.icon" }}
          onClick={() => setColorMode("light")}
        />
      ) : (
        <FiToggleLeft
          sx={{ variant: "buttons.icon" }}
          onClick={() => setColorMode("default")}
        />
      )}
      <FaMoon
        sx={{ variant: "buttons.icon", ml: 1 }}
        onClick={() => setColorMode("default")}
      />
    </Flex>
  )
}

export default Header
