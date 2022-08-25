import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Link,
  View,
  Text,
} from "@adobe/react-spectrum"
import { Link as GatsbyLink, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import LinkOut from "@spectrum-icons/workflow/LinkOut"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Flex justifyContent="center" height="100vh">
      <Flex direction="column" alignItems="center" justifyContent="center" gap="size-100">
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
          ✋
        </h1>
      </div>
      
      <Text>{`I'm Yuki Watanabe, a web developer.`}</Text>
      <Text>This site built with Gatsby.js and deployed to Netlify.</Text>

      <Flex gap="size-100">
      <div className="spectrum-Heading spectrum-Heading--sizeXS">
        <Link isQuiet variant="secondary">
          <GatsbyLink to="/blog">Blog</GatsbyLink>
        </Link>
        </div>
        <Link variant="secondary">
          <GatsbyLink to="/products">Products</GatsbyLink>
        </Link>
        <Link variant="secondary"><a href="">GitHub <LinkOut size="XS"/></a></Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default IndexPage
