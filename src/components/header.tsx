import React from "react"
import { Link, Page } from "gatsby"
/** @jsx jsx */
import { jsx, Flex, useColorMode, Text } from "theme-ui"
import { FaMoon, FaSun } from "react-icons/fa"
import { FiToggleRight, FiToggleLeft, FiChevronsLeft } from "react-icons/fi"

const Header: React.FC<{ pathname: string }> = ({ pathname }) => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Flex sx={{ justifyContent: "space-between" }}>
      {pathname !== "/" && (
        <Link to="/" sx={{ variant: "links.icon" }}>
          <Flex sx={{ alignItems: "center" }}>
            <FiChevronsLeft sx={{ variant: "buttons.icon", mr: 1 }} />
            Back to top page
          </Flex>
        </Link>
      )}
      <Flex sx={{ ml: "auto" }}>
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
    </Flex>
  )
}

export default Header
