import React from "react"
import { Link, graphql, PageProps } from "gatsby"
/** @jsx jsx */
import { jsx, Text, Box, Heading } from "theme-ui"

import Layout from "../components/layout"
import { IndexPageQuery } from "../../types/graphql-types"


const IndexPage: React.FC<PageProps<IndexPageQuery>> = ({ data }) => {
  console.log(data)
  return (
    <Layout>
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
    </Layout>
  )
}

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
