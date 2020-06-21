import React from "react"
import { Link, graphql, PageProps } from "gatsby"

/** @jsx jsx */
import { jsx, ThemeProvider, Styled, Text, useColorMode, Divider, Flex, Container, Box, Link as ThemeUiLink } from "theme-ui"
import { Heading, Button } from "@theme-ui/components"
import { FaMoon, FaSun, FaGithub } from "react-icons/fa"

import theme from "../gatsby-plugin-theme-ui"
import Layout from "../components/layout"

type Data = {
  site: {
      siteMetadata: {
        title: string
      }
    }
  allMarkdownRemark: {
    edges: [
      {
        node: {
          excerpt: string
          frontmatter: {
            date: string
            slug: string
            title: string
            description?: string
          }
        }
      }
    ]
  }
}


const IndexPage: React.FC<PageProps<Data>> = ({ data }) => {
  const [colorMode, setColorMode] = useColorMode()
  console.log(theme)
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(edge => (
        <Box pt={5}>
          <Heading>
            <Styled.a as={Link} to={edge.node.frontmatter.slug}>
              {edge.node.frontmatter.title}
            </Styled.a>
          </Heading>
          <Text sx={{ color: 'gray', fontSize: 2 }}>{edge.node.frontmatter.date}</Text>
          <Text sx={{ color: 'gray' }}>{edge.node.frontmatter.description}</Text>
        </Box>
      ))}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            description
          }
        }
      }
    }
  }
`
