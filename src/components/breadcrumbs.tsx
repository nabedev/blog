import React from "react"
import { Link } from "gatsby"
import { Breadcrumbs, Item } from "@adobe/react-spectrum"

type Props = {
  paths: String[]
}

const BreadCrumbs: React.FC<Props> = ({ paths }) => {
  if (paths.length === 0) {
    return <></>
  }

  return (
    <Breadcrumbs size="M">
      <Item key="home">
        <Link to="/">Home</Link>
      </Item>
      {paths.map(path => (
        <Item key={path}>
          <Link to={`/${path}`}>{path}</Link>
        </Item>
      ))}
    </Breadcrumbs>
  )
}

export default BreadCrumbs
