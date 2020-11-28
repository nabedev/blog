import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import useActiveHeading from "../hooks/use-active-heading"

type ItemType = {
  url: string
  title: string
  items?: []
}

interface Props {
  items: ItemType[]
}

const ScrollSyncTableContents: React.FC<Props> = ({ items }) => {
  const activeHeading = useActiveHeading(items.map(item => item.url))

  return (
    <>
      {items.map(item => (
        <Flex as="nav" sx={{ mt: 1 }}>
          <Link
            sx={{ variant: "links.nav", wordBreak: "keep-all" }}
            className={`#${activeHeading}` === item.url ? "active" : ""}
            to={item.url}
          >
            {item.title}
          </Link>
        </Flex>
      ))}
    </>
  )
}

export default ScrollSyncTableContents
