import React from "react"
import { graphql, PageProps } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "@adobe/react-spectrum"
import Highlight, { defaultProps } from "prism-react-renderer"
import dracula from "prism-react-renderer/themes/dracula"

const components = {
  a: props => (
    <Link>
      <a {...props} />
    </Link>
  ),
  code: ({ children, className }) => {
    const language = className.replace(/language-/, "")

    return (
      <Highlight
        {...defaultProps}
        code={children}
        language={language}
        theme={dracula}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{ ...style, padding: "20px", overflow: "scroll" }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  },
}

const BlogPost: React.FC<PageProps<GatsbyTypes.BlogPageQuery>> = ({ data }) => (
  <>
    <p>{data.mdx.frontmatter.date}</p>
    <MDXProvider components={components}>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </MDXProvider>
  </>
)

export default BlogPost

export const pageQuery = graphql`
  query BlogPage($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`
