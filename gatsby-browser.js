import React from "react"
import Layout from "./src/layouts/index"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

const ReactDOM = require('react-dom')

export function replaceHydrateFunction() {
    return (element, container, callback) => {
        ReactDOM.render(element, container, callback)
    }
}
