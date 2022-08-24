import React from "react"
import { Link, graphql, PageProps } from "gatsby"


const TopicIndex: React.FC<PageProps<GatsbyTypes.TopicIndexQuery>> = ({
  data,
}) => (
  <>
    <h1>ALl topics:</h1>
      {data.allMdx.distinct.map((topic, index) => (
        <Link to={`./${topic}`} key={index}>
          {topic}
        </Link>
      ))}
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
