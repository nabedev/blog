import React from "react"
import {defaultTheme, Provider} from "@adobe/react-spectrum"

import Layout from "./src/layouts/index"

import './src/styles/global.css'

export const wrapPageElement = ({ element, props }) => {
  return <Provider theme={defaultTheme} locale="en-US">
    <Layout {...props}>{element}</Layout>
  </Provider>
}
