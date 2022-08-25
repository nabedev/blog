import React from "react"
import { Link as GatsbyLink, graphql, PageProps } from "gatsby"
import { Flex, Link } from "@adobe/react-spectrum"


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
