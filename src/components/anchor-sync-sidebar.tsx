import React, { useState, useEffect } from "react"

import { Box, Text, Heading, Flex, Link } from "theme-ui"
import useActiveHeading from "../hooks/use-active-anchor"

type HeadingType = {
  depth: number, value: string
}

interface Props {
  headings: HeadingType[]
}

const ScrollSyncHeadingTree: React.FC<Props> = ({ headings }) => {
  if (headings.length == 0) {
    return <></>
  }

  const activeHeading = useActiveHeading(headings.map(heading => heading.value))

  const [ActiveKey, setActiveKey] = useState("")

  return <>
    {headings.map(heading => (
      <Flex>
        {activeHeading === heading.value ? <Text sx={{ mr: 2 }}>👉</Text> : null}
        <Link href={`#${heading.value}`}>{heading.value}</Link>
      </Flex>
    ))}
    </>
}

export default ScrollSyncHeadingTree
