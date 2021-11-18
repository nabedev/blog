import React from "react"
import { Link, graphql, PageProps } from "gatsby"

import {
  Heading,
  Text,
  View,
  Flex,
  Link as SpectrumLink,
} from "@adobe/react-spectrum"

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
}) => (
  <Flex direction="column" gap="size-400">
    {data.allMdx.nodes.map(node => (
      <View key={node.id}>
        <Heading>
          <Link to={`/blog/${node.slug}`}>
            <SpectrumLink isQuiet>{node.frontmatter.title}</SpectrumLink>
          </Link>
        </Heading>
        <Text>{node.frontmatter.date}</Text>
        {node.frontmatter.topics !== null && (
          <Flex>
            <Text>topics:</Text>
            <Flex gap="size-100" wrap>
              {node.frontmatter.topics.map((topic, index) => (
                <SpectrumLink variant="secondary" key={index}>
                  {topic}
                </SpectrumLink>
              ))}
            </Flex>
          </Flex>
        )}
      </View>
    ))}
  </Flex>
)

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        slug
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          topics
        }
      }
    }
  }
`
