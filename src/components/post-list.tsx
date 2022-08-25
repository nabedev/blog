import React from "react"
import { Link, PageProps } from "gatsby"

const PostList: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
}) => {
  return (
    <div class="flex flex-col gap-y-8">
      {data.allMdx.nodes.map(node => (
        <>
        <a key={node.id} className="link link-hover"><Link to={`/blog/${node.slug}`}>
          {node.frontmatter.title}
        </Link></a>
        <span class="badge">{node.frontmatter.date}</span>
        </>
      ))}
    </div>
  )
}

export default PostList
