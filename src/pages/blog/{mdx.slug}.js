import React from "react"
import { Link, graphql, PageProps, Page } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPost = ({ data }) => (
  <>
    <p>{data.mdx.frontmatter.date}</p>
    <MDXRenderer>
      {data.mdx.body}
    </MDXRenderer>
  </>
)

export default BlogPost

export const pageQuery = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
  }
}
`
