import React, { useState } from "react"
import {Provider, defaultTheme, View, Flex, Button} from '@adobe/react-spectrum';

import Header from './header'

const Layout: React.FC = ({ location, children }) => {
  const OSColorMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  const [colorMode, setColorMode] = useState(OSColorMode);

  const handleToggleColorMode = () => { setColorMode(colorMode === 'light' ? 'dark' : 'light') }

  return (
  <Provider theme={defaultTheme} colorScheme={colorMode} height="100vh">
    <View padding="size-800">
      <Flex
        direction="column"
        maxWidth="768px"
        margin="auto"
      >
        <Header handleToggleColorMode={handleToggleColorMode} colorMode={colorMode} />
        <View marginTop="size-800">
        {children}
        </View>
      </Flex>
    </View>
  </Provider>
  )
}

export default Layout
