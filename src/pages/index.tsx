import React from "react"
import { Link, graphql, PageProps, Page } from "gatsby"
/** @jsx jsx */
import { jsx, Text, Box, Heading } from "theme-ui"

import { IndexPageQuery } from "../../types/graphql-types"


const IndexPage: React.FC<PageProps<IndexPageQuery>> = ({ data }) => (
  <React.Fragment>
    {data.allMdx.nodes.map(node => (
      <Box sx={{ '&+&': { mt: 5 } }}>
        <Heading>
          <Link to={node.frontmatter.path} sx={{ variant: 'links.heading' }}>
            {node.frontmatter.title}
          </Link>
        </Heading>
        <Text sx={{ color: 'gray', fontSize: 2 }}>{node.frontmatter.date}</Text>
        <Text sx={{ color: 'gray' }}>{node.frontmatter.description}</Text>
      </Box>
    ))}
  </React.Fragment>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    allMdx {
      nodes {
        frontmatter {
          title
          path
          date(formatString: "MMMM DD, YYYY")
          description
        }
      }
    }
  }
`
