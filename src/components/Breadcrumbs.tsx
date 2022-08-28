import { Item, Breadcrumbs as SpectrumBreadcrumbs } from "@adobe/react-spectrum"
import { Link } from "gatsby"
import React from "react"

type Props = {
  paths: string[]
}

const Breadcrumbs: React.FC<Props> = ({ paths }) => {
  if (paths.length === 0) return null

  return (
    <SpectrumBreadcrumbs size="M" marginBottom="size-500" showRoot>
      <Item key="home">
        <Link to="/">Home</Link>
      </Item>
      {paths.map(path => (
        <Item key={path}>
          <Link to={`/${path}`}>{path}</Link>
        </Item>
      ))}
    </SpectrumBreadcrumbs>
  )
}

export default Breadcrumbs
