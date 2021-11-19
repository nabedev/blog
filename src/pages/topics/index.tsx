import React from "react"
import { Link, graphql, PageProps } from "gatsby"

import { Heading, Flex, Link as SpectrumLink } from "@adobe/react-spectrum"

const TopicIndex: React.FC<PageProps<GatsbyTypes.TopicIndexQuery>> = ({
  data,
}) => (
  <>
    <Heading>ALl topics:</Heading>
    <Flex gap="size-100">
      {data.allMdx.distinct.map((topic, index) => (
        <Link to={`./${topic}`} key={index}>
          <SpectrumLink>{topic}</SpectrumLink>
        </Link>
      ))}
    </Flex>
  </>
)

export default TopicIndex

export const pageQuery = graphql`
  query TopicIndex {
    allMdx {
      distinct(field: frontmatter___topics)
    }
  }
`
