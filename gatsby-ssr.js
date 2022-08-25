import React from "react"
import {defaultTheme, Provider, SSRProvider} from "@adobe/react-spectrum"

import Layout from "./src/layouts/index"

import './src/styles/global.css'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
