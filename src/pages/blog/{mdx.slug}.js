import React from "react"
import { Link, graphql, PageProps, Page } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPost = ({ data }) => (
  <>
    <p>{data.mdx.frontmatter.date}</p>
    <MDXProvider>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </MDXProvider>
  </>
)

export default BlogPost

export const pageQuery = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`
