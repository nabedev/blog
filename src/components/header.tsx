import React, { useContext } from "react"
import { Flex, ActionButton } from "@adobe/react-spectrum"
import Moon from "@spectrum-icons/workflow/Moon"
import Light from "@spectrum-icons/workflow/Light"

import {ColorModeContext} from '../layouts'

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext)
  return (
    <Flex justifyContent="flex-end" width="100%">
      <ActionButton isQuiet onPress={toggleColorMode}>
        {colorMode === "light" ? <Moon /> : <Light />}
      </ActionButton>
    </Flex>
  )
}

export default Header
