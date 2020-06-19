import React from "react"
import { Link, graphql, PageProps } from "gatsby"

import { List, Typography, Space } from 'antd'

import Layout from "../components/layout"

import "antd/dist/antd.dark.less"

const { Title, Text } = Typography

type Data = {
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
  return (
    <Layout>
      <List
        itemLayout="horizontal"
        dataSource={data.allMarkdownRemark.edges}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<Title level={3}><Link to={item.node.frontmatter.slug}>{item.node.frontmatter.title}</Link></Title>}
              description={
                <Space direction="vertical">
                  <Text>{item.node.frontmatter.date}</Text>
                  <Text>{item.node.frontmatter.description}</Text>
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
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
