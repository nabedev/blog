import React, { useEffect,useState } from "react"
import { graphql } from "gatsby"

import { Anchor,Typography, Affix, Tree } from "antd"

import Layout from "../components/layout"
import ScrollSyncHeadingTree from "../components/anchor-sync-sidebar"

const { Link } = Anchor
const { Title, Text, Paragraph } = Typography

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
  // console.log('outside')
  return (
    <Layout>
        <Title level={4}>{frontmatter.title}</Title>
        <Text>{frontmatter.date}</Text>
        <div style={{ display: 'flex', marginTop: '42px' }}>
          <Paragraph style={{ minWidth: '100%' }}>
            <p dangerouslySetInnerHTML={{ __html: html }} />
          </Paragraph>
          <Affix>
            <ScrollSyncHeadingTree headings={headings} />
          </Affix>
        </div>
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
