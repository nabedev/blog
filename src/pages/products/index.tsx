import React from "react"
import { Link, graphql, PageProps, Page } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { StaticImage } from 'gatsby-plugin-image'


import { Header, Heading, Text, View, Flex, Divider, Link as SpectrumLink } from '@adobe/react-spectrum'


const CustomH1 = ({ children }) => (
  <>
    <Heading level={2} marginBottom="size-50">
      {children}
    </Heading>
    <Divider />
  </>
)

const components = {
  h1: CustomH1
}

const Products: React.FC<PageProps> = ({ data }) => (
  <Flex direction="column" gap="size-150">
    <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    {data.allMdx.nodes.map(node => (
      <View key={node.id}>
        <MDXProvider components={components}>
          <MDXRenderer>
            {node.body}
          </MDXRenderer>
        </MDXProvider>
      </View>
    ))}
  </Flex>
)

export default Products

export const pageQuery = graphql`
  query ProductQuery{
    allMdx(
      filter: {fileAbsolutePath: {regex: "/products/"}}
      sort: { fields: frontmatter___date, order: DESC }
    ) {



      
      nodes {
        id
        body
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          demo
        }
      }
    }
  }
`
