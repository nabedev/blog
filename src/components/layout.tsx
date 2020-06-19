/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, PageProps } from "gatsby"

import Header from "./header"

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  children: React.ReactNode
}

const Layout: React.FC = ({ children }) => {
  return <div style={{ maxWidth: '42rem', margin: '50px auto', padding: '0px 14px 80% 14px' }}>
      <Header />
      {children}
    </div>
}

export const query = graphql`
query SiteTitleQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`

export default Layout
