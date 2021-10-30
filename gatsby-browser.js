// /**
//  * Implement Gatsby's Browser APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/browser-apis/
//  */

import React from "react"
import Layout from "./src/components/layout"

import "./src/styles/global.css"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
