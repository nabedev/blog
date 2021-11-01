import React from "react"
import ReactDOM from "react-dom"

import Layout from "./src/layouts/index"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)


// https://github.com/gatsbyjs/gatsby/issues/8560#issuecomment-535265414
export function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback)
  }
}
