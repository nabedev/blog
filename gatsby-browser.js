// /**
//  * Implement Gatsby's Browser APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/browser-apis/
//  */

// // You can delete this file if you're not using it
// // require("prismjs/themes/prism-solarizedlight.css")
// import React from 'react'
// import { ThemeProvider, Styled } from 'theme-ui'
// import theme from './src/gatsby-plugin-theme-ui'
// import {MDXProvider} from '@mdx-js/react'
// import Prism from '@theme-ui/prism'


// const components = {
//   code: Prism,
// }
import React from 'react'
import Layout from "./src/components/layout"
import { ThemeProvider } from 'theme-ui'
import theme from "./src/gatsby-plugin-theme-ui"
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>
    {element}
  </Layout>
)
