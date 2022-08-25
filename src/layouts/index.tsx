import { Link, PageProps } from "gatsby"
import React from "react"


const renderBreadcrumbs = (paths: string[]) => {
  if (paths.length === 0) {
    return
  }
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {paths.map((path, index) => (
          <li key={index}>
            <Link to={`/${path}`}>{path}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Layout: React.FC<PageProps> = ({ children, location }) => {
  const paths = location.pathname.split("/").filter(item => item !== "")
  return (
      <div className="container mx-md">
      {renderBreadcrumbs(paths)}
      {children}
    </div>
  )
}

export default Layout
