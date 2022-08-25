import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Link,
  Text,
} from "@adobe/react-spectrum"
import { Link as GatsbyLink, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Flex justifyContent="center" minHeight="100vh">
      <Flex direction="column" alignItems="center" justifyContent="center">
      <StaticImage
        src="../images/nabedev.png"
        alt="自分の後ろ姿"
        placeholder="blurred"
        width={200}
        height={200}
        style={{
          borderRadius: "50%",
        }}
      />
      <div className="spectrum">
        <h1 className="spectrum-Heading spectrum-Heading--sizeXXL spectrum-Heading--heavy">
          こんにちは ✋
        </h1>
      </div>
      <Text>{`I'm Yuki Watanabe, a web developer.`}</Text>
      <Text>This site built with Gatsby.js and deployed to Netlify.</Text>

      <ButtonGroup marginTop="size-225">
        <GatsbyLink to="/blog">Blog</GatsbyLink>
        <Link variant="primary">
          <GatsbyLink to="/blog">BLog</GatsbyLink>
        </Link>
        <Link>The missing link.</Link>
      </ButtonGroup>
      </Flex>
    </Flex>
  )
}

export default IndexPage
