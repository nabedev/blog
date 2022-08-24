import React from "react"
import { PageProps, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <StaticImage
        src="../images/nabedev.png"
        alt="自分の後ろ姿"
        placeholder="blurred"
        width={200}
        height={200}
      />
      <h1>Hello👋</h1>
      <p>{`I'm Yuki Watanabe, a web developer.`}</p>
      <p>This site built with Gatsby.js and deployed to Netlify.</p>

      <Link to="/blog">blog</Link>
      <Link to="/products">products</Link>
      <a href="https://github.com/nabedev/blog">github</a>
    </>
  )
}

export default IndexPage
