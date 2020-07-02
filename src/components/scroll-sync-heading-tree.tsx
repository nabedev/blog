import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import useActiveHeading from "../hooks/use-active-heading"

type HeadingType = {
  depth: number, value: string
}

interface Props {
  headings: HeadingType[]
}

const ScrollSyncHeadingTree: React.FC<Props> = ({ headings }) => {
  const activeHeading = useActiveHeading(headings.map(heading => heading.value))

  return <React.Fragment>
    {headings.map(heading => (
      <Flex as='nav'>
        <Link
          sx={{ variant: 'links.nav', ml: heading.depth + 2, wordBreak: 'keep-all' }}
          to={`#${heading.value}`}
          className={activeHeading === heading.value ? 'active' : ''}
        >
          {heading.value}
        </Link>
      </Flex>
    ))}
    </React.Fragment>
}

export default ScrollSyncHeadingTree
