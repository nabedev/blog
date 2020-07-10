import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import useActiveHeading from "../hooks/use-active-heading"
import { HeadingType } from "../templates/blog-layout"

interface Props {
  headings: HeadingType[]
}

const ScrollSyncTableContents: React.FC<Props> = ({ headings }) => {
  const activeHeading = useActiveHeading(headings.map(heading => heading.id))

  return <React.Fragment>
    {headings.map(heading => (
      <Flex as='nav'>
        <Link
          sx={{ variant: 'links.nav', ml: heading.depth + 2, wordBreak: 'keep-all' }}
          to={`#${heading.id}`}
          className={activeHeading === heading.id ? 'active' : ''}
        >
          {heading.value}
        </Link>
      </Flex>
    ))}
    </React.Fragment>
}

export default ScrollSyncTableContents
