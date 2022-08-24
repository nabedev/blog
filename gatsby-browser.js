import React from "react"

import Layout from "./src/layouts/index"
import './src/styles/global.css'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
