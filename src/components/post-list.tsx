import React from "react"
import { Link, PageProps } from "gatsby"

const PostList: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
}) => {
  return (
    <>
      {data.allMdx.nodes.map(node => (
        <Link key={node.id} to={`/blog/${node.slug}`}>
          {node.frontmatter.title}
        </Link>
      ))}
    </>
  )
}

export default PostList
