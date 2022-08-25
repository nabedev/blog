import { Flex, Link, Text, View } from "@adobe/react-spectrum"
import { Link as GatsbyLink, PageProps } from "gatsby"
import React from "react"

const PostList: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
}) => {
  console.log({ data })
  return (
    <Flex direction="column" gap="size-600">
      {data.allMdx.nodes.map(node => (
        <Flex key={node.id} direction="column" gap="size-100">

          <div className="spectrum-Heading spectrum-Heading--sizeXS">
            <Link isQuiet>
            <GatsbyLink to={`/blog/${node.slug}`}>
              {node.frontmatter.title}
            </GatsbyLink>
            </Link>
          </div>

          <div className="spectrum-HelpText spectrum-HelpText--sizeM spectrum-HelpText--neutral is-disabled">
            <div className="spectrum-HelpText-text">{node.frontmatter.date}</div>
          </div>

          <Flex gap="size-100">
            {node.frontmatter.topics.map((topic, index)=> (
              <Link isQuiet key={index}>
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
