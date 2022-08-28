import { Flex, Link, Text } from "@adobe/react-spectrum"
import { Link as GatsbyLink, PageProps } from "gatsby"
import React from "react"

const PostList: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
}) => {
  return (
    <Flex direction="column" gap="size-500">
      {data.allMdx.nodes.map(node => (
        <Flex key={node.id} direction="column" gap="size-100">
          <Link variant="secondary">
            <GatsbyLink to={`/blog/${node.slug}`}>
              {node.frontmatter.title}
            </GatsbyLink>
          </Link>

          <Text>{node.frontmatter.date}</Text>

          <Flex gap="size-100">
            {node.frontmatter.topics.map((topic, index) => (
              <Link isQuiet key={index} variant="primary">
                <GatsbyLink to={`/topics/${topic}`}>{topic}</GatsbyLink>
              </Link>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}

export default PostList
