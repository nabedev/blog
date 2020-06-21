import React, { useEffect,useState } from "react"
import { graphql } from "gatsby"

import { Box, Flex, Text, Heading } from "theme-ui"

import Layout from "../components/layout"
import ScrollSyncHeadingTree from "../components/anchor-sync-sidebar"
import theme from "../gatsby-plugin-theme-ui/index"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const [ActiveHead, setActiveHead] = useState('')
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, headings } = markdownRemark
  // useEffect(() => {
  //   const options = {
  //     rootMargin: '0% 0% -100% 0%',
  //     threshold: 0
  //   }

  //   const callback = (
  //     entries => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           setActiveHead(entry.target.id)
  //         }
  //       })
  //   })
    
  //   const observer = new IntersectionObserver(callback, options);
  //   headings.forEach(entry => {
  //     observer.observe(document.getElementById(entry.value))
  //   })
  // })
  console.log(theme)
  return (
    <Layout>
      <Flex>
      <Box pt={5} sx={{ minWidth: '100%' }}>
        <Heading>{frontmatter.title}</Heading>
        <Text sx={{ color: 'gray' }}>{frontmatter.date}</Text>
        <Text dangerouslySetInnerHTML={{ __html: html }} />
      </Box>
      <Flex sx={{ flexDirection: 'column', minWidth: 'auto', position: 'sticky', top: 0, height: '100%'}}>
        <ScrollSyncHeadingTree headings={headings} />
      </Flex>
    </Flex>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      tableOfContents
      headings {
        depth
        value
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
