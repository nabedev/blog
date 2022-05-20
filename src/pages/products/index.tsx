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

const renderContent = (yaml, data) => {
  const { node } = data.github.viewer.repositories.edges.find(
    edge => edge.node.url === yaml.repository
  )
  return (
    <View key={yaml.id}>
      <Flex
        direction={{ S: "column", M: "row" }}
        justifyContent="space-between"
        gap="size-150"
      >
        <View flex={1}>
          <Heading>{node.name}</Heading>
          <SpectrumLink isQuiet variant="">
            <Link to={node.url}>
              GitHub <LinkOut size="XS" />
            </Link>
          </SpectrumLink>
          <Flex direction="row" gap="size-100" marginTop="size-150">
            {node.languages.edges.map((edge, index) => (
              // FIXME
              <Flex alignItems="center" gap="size-100" key={index}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: edge.node.color,
                  }}
                  key={index}
                />
                <Text UNSAFE_style={{ fontSize: 12, fontWeight: "Bold" }}>
                  {edge.node.name}
                </Text>
                <Text UNSAFE_style={{ fontSize: 12, color: "gray" }}>{`${(
                  (edge.size / node.languages.totalSize) *
                  100
                ).toFixed(1)}%`}</Text>
              </Flex>
            ))}
          </Flex>
          <Content flex={1} marginTop="size-150">
            <Text UNSAFE_style={{ "white-space": "pre-wrap" }}>
              {yaml.description}
            </Text>
          </Content>
        </View>
        <View flex={1}>{displayDemo(yaml)}</View>
      </Flex>
      <Divider size="S" marginTop="size-500" marginBottom="size-500" />
    </View>
  )
}

const Products: React.FC<PageProps<GatsbyTypes.ProductIndexQuery>> = ({
  data,
}) => {
  return (
    <Flex direction="column">
      {data.allProductsYaml.nodes.map(node => renderContent(node, data))}
    </Flex>
  )
}

export default Products

export const pageQuery = graphql`
  query ProductIndex {
    allProductsYaml {
      nodes {
        repository
        description
        id
        demo
        type
      }
    }

    github {
      viewer {
        repositories(first: 100) {
          edges {
            node {
              languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
                totalSize
                edges {
                  size
                  node {
                    name
                    color
                  }
                }
              }
              name
              url
            }
          }
        }
      }
    }
  }
`
