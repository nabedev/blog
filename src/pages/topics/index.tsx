import { Flex, Link } from "@adobe/react-spectrum"
import { Link as GatsbyLink, PageProps, graphql } from "gatsby"
import React from "react"

const TopicIndex: React.FC<PageProps<GatsbyTypes.TopicIndexQuery>> = ({
  data,
}) => (
  <Flex gap="size-100">
    {data.allMdx.distinct.map((topic, index) => (
      <Link key={index}>
        <GatsbyLink to={`./${topic}`} key={index}>
          {topic}
        </GatsbyLink>
      </Link>
    ))}
  </Flex>
)

export default TopicIndex

export const pageQuery = graphql`
  query TopicIndex {
    allMdx {
      distinct(field: frontmatter___topics)
    }
  }
`
