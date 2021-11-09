import React from "react"
import { Flex, ActionButton } from "@adobe/react-spectrum"
import Moon from "@spectrum-icons/workflow/Moon"
import Light from "@spectrum-icons/workflow/Light"

const Header: React.FC = ({ handleToggleColorMode, colorMode }) => {
  return (
    <Flex justifyContent="flex-end" width="100%">
      <ActionButton isQuiet onPress={handleToggleColorMode}>
        {colorMode === "light" ? <Moon /> : <Light />}
      </ActionButton>
    </Flex>
  )
}

export default Header
