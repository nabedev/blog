import { MDXProvider } from "@mdx-js/react"
import { PageProps, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Highlight, { defaultProps } from "prism-react-renderer"
import dracula from "prism-react-renderer/themes/dracula"
import React from "react"

const components = {
  a: props => <a {...props} />,
  code: ({ children, className }) => {
    const language = className.replace(/language-/, "")

    return (
      <div className="mockup-code">
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
      </div>
    )
  },
}

const BlogPost: React.FC<PageProps<GatsbyTypes.BlogPageQuery>> = ({ data }) => (
  <>
    <h1>{data.mdx.frontmatter.title}</h1>
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
