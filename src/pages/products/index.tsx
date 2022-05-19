import React from "react"
import { Link, graphql, PageProps } from "gatsby"
import {
  Content,
  Heading,
  Text,
  View,
  Flex,
  Divider,
  Image,
  Link as SpectrumLink,
  IllustratedMessage,
} from "@adobe/react-spectrum"
import NotFound from "@spectrum-icons/illustrations/NotFound"
import LinkOut from "@spectrum-icons/workflow/LinkOut"

const displayDemo = node => {
  if (!node.demo) {
    return (
      <IllustratedMessage>
        <NotFound />
        <Heading>No demo</Heading>
      </IllustratedMessage>
    )
  }
  if (node.type === "video") {
    return (
      <video
        width="100%"
        controls
        src="https://user-images.githubusercontent.com/26590545/140095941-e66a16ea-9fe9-480e-8c12-f3d54e580f73.mov"
      />
    )
  }

  return <Image src={node.demo} alt="demo" />
}

const Products: React.FC<PageProps<GatsbyTypes.ProductIndexQuery>> = ({
  data,
}) => {
  console.log(data.allProductsYaml)
  return (
    <Flex direction="column">
      {data.allProductsYaml.nodes.map(node => (
        <View key={node.id}>
          <Flex
            direction={{ base: "column", S: "row" }}
            justifyContent="space-between"
            gap="size-150"
          >
            <View flex={1}>
              <Heading>{node.name}</Heading>
              <SpectrumLink isQuiet variant="">
                <Link to={node.repository}>
                  Github <LinkOut size="XS" />
                </Link>
              </SpectrumLink>
              <Content flex={1} marginTop="size-150">
                <Text UNSAFE_style={{ "white-space": "pre-wrap" }}>
                  {node.description}
                </Text>
              </Content>
            </View>
            <View flex={1}>{displayDemo(node)}</View>
          </Flex>
          <Divider size="S" marginTop="size-500" marginBottom="size-500" />
        </View>
      ))}
    </Flex>
  )
}

export default Products

export const pageQuery = graphql`
  query ProductIndex {
    allProductsYaml {
      nodes {
        name
        repository
        description
        id
        demo
        type
        tags
      }
    }
  }
`
