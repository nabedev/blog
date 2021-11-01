import React, { useState } from "react"
import {Provider, defaultTheme, View, Flex, Button} from '@adobe/react-spectrum';

import Header from '../components/header'

import "../styles/global.css"


const Layout: React.FC = ({ children }) => {
  // const OSColorMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  // const [colorMode, setColorMode] = useState(OSColorMode);

  // const handleToggleColorMode = () => { setColorMode(colorMode === 'light' ? 'dark' : 'light') }

  return (
    <Provider theme={defaultTheme} colorScheme="dark">
        <View
          maxWidth="768px"
          margin="auto"
          minHeight="100vh"
          padding="size-400"
          UNSAFE_style={{boxSizing: 'border-box'}}
        >
          <View marginTop="size-800">
            {children}
          </View>
        </View>
    </Provider>
  )
}

export default Layout
