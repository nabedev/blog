import React from "react"

const Header: React.FC = ({ handleToggleColorMode, colorMode }) => {
  return (
      <button onClick={handleToggleColorMode}>
        {colorMode === "light" ? 'Dark' : 'Light' }
    </button>
  )
}

export default Header
