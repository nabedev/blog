import { Provider, SSRProvider, defaultTheme } from "@adobe/react-spectrum"
import React from "react"

import Layout from "./src/layouts/index"
import "./src/styles/global.css"

export const wrapPageElement = ({ element, props }) => {
  return (
    <SSRProvider>
      <Provider theme={defaultTheme} locale="en-US">
        <Layout {...props}>{element}</Layout>
      </Provider>
    </SSRProvider>
  )
}
