import { Link, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="avatar">
            <div className="w-42 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <StaticImage
                src="../images/nabedev.png"
                alt="自分の後ろ姿"
                placeholder="blurred"
                width={200}
                height={200}
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold pt-6">こんにちは 🖐</h1>
          <p className="pt-6">{`I'm Yuki Watanabe, a web developer.`}</p>
          <p className="pb-6">
            This site built with Gatsby.js and deployed to Netlify.
          </p>
          <ul className="menu menu-horizontal bg-base-100 rounded-box p-2">
            <li>
              <Link to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/products">
                Products
              </Link>
            </li>
            <li>
              <a href="https://github.com/nabedev/blog">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
