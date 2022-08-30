import { Flex, Link, Text } from "@adobe/react-spectrum"
import "@spectrum-css/typography/"
import LinkOut from "@spectrum-icons/workflow/LinkOut"
import { Link as GatsbyLink, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Flex minHeight="94vh">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap="size-100"
        margin="auto"
      >
        <StaticImage
          src="../images/nabedev.png"
          alt="自分の後ろ姿"
          placeholder="blurred"
          width={200}
          height={200}
          imgStyle={{
            borderRadius: "50%",
          }}
        />
        <div className="spectrum">
          <h1 className="spectrum-Heading spectrum-Heading--sizeXXL spectrum-Heading--heavy">
            ✋
          </h1>
        </div>

        <Text>{`I'm Yuki Watanabe, a web developer.`}</Text>
        <Text>This site built with Gatsby.js and deployed to Netlify.</Text>

        <Flex gap="size-100">
          <Link variant="secondary">
            <GatsbyLink to="/blog">Blog</GatsbyLink>
          </Link>
          <Link variant="secondary">
            <GatsbyLink to="/products">Products</GatsbyLink>
          </Link>
          <Link variant="secondary">
            <a href="https://github.com/nabedev/blog">
              GitHub <LinkOut size="XS" />
            </a>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default IndexPage
