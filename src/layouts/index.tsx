import React from "react"
import { Link, PageProps } from "gatsby"

import "../styles/global.css"

const renderBreadcrumbs = (paths: string[]) => {
  if (paths.length === 0) {
    return
  }
  return (
    <>
      <Link to="/">Home</Link>
      {paths.map((path, index) => (
        <Link to={`/${path}`} key={index}>
          {path}
        </Link>
      ))}
    </>
  )
}

const Layout: React.FC<PageProps> = ({ children, location }) => {
  const paths = location.pathname.split("/").filter(item => item !== "")
  return (
    <>
      {renderBreadcrumbs(paths)}
      {children}
    </>
  )
}

export default Layout
