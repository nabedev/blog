import React from "react"
import { Link, PageProps } from "gatsby"

import {
  Heading,
  Text,
  View,
  Flex,
  Link as SpectrumLink,
} from "@adobe/react-spectrum"

const PostList: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
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
          <Flex gap="size-100" wrap>
            {node.frontmatter.topics.map((topic, index) => (
              <Link to={`/topics/${topic}`} key={index}>
                <SpectrumLink isQuiet variant="primary" key={index}>
                  {topic}
                </SpectrumLink>
              </Link>
            ))}
          </Flex>
        )}
      </View>
    ))}
  </Flex>
)

export default PostList
