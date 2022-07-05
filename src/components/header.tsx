import React, { useContext } from "react"
import { ActionButton } from "@adobe/react-spectrum"
import Moon from "@spectrum-icons/workflow/Moon"
import Light from "@spectrum-icons/workflow/Light"

import { ThemeContext } from "../contexts/theme-context"

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useContext(ThemeContext)

  return (
    <ActionButton isQuiet onPress={toggleColorMode}>
      {colorMode === "light" ? <Moon /> : <Light />}
    </ActionButton>
  )
}

export default Header
