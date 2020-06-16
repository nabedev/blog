import React from "react"
import { graphql } from "gatsby"

import { Anchor,Typography } from "antd"

import Layout from "../components/layout"

const { Link } = Anchor
const { Title, Text, Paragraph } = Typography

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, headings } = markdownRemark

  return (
    <Layout>
        <Title level={4}>{frontmatter.title}</Title>
        <Text>{frontmatter.date}</Text>
        <div style={{ display: 'flex', marginTop: '42px' }}>
        <Paragraph style={{ minWidth: '100%' }}>
          <p dangerouslySetInnerHTML={{ __html: html }} />
        </Paragraph>
        <Anchor style={{ marginLeft: '8px' }}>
          {headings.map(node => <Link href={`#${node.value}`} title={node.value} />)}
        </Anchor>
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
