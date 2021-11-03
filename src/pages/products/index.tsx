import React from "react"
import { Link, graphql, PageProps, Page } from "gatsby"
import {
  Header,
  Content,
  Heading,
  Text,
  View,
  Flex,
  Divider,
  Image,
  Link as SpectrumLink,
} from "@adobe/react-spectrum"

const Products: React.FC<PageProps> = ({ data }) => (
  <Flex direction="column" gap="size-2000">
    {data.allProductsYaml.nodes.map(node => (
      <View key={node.id}>
        <Heading level={2} marginBottom="size-50">
          {node.name}
        </Heading>
        <Divider />
        <Flex
          direction={{ base: "column", S: "row" }}
          justifyContent="space-between"
          gap="size-150"
          marginTop="size-150"
        >
          <Content flex={1}>
            <Text>{node.description}</Text>
            <SpectrumLink>
              <Link to={node.repository}>repo</Link>
            </SpectrumLink>
          </Content>
          <View padding="size-150" backgroundColor="gray-200" flex={1}>
            {node.type === 'video'
              ? <video width="100%" controls src="https://user-images.githubusercontent.com/26590545/140095941-e66a16ea-9fe9-480e-8c12-f3d54e580f73.mov" />
              : <Image src={node.demo} alt="demo" />
            }
          </View>
        </Flex>
      </View>
    ))}
  </Flex>
)

export default Products

export const pageQuery = graphql`
  query ProductQuery {
    allProductsYaml {
      nodes {
        name
        repository
        description
        id
        demo
        type
      }
    }
  }
`
