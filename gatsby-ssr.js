import React from "react"
import ReactDOM from "react-dom"

import Layout from "./src/layouts/index"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
