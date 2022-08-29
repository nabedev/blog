import {
  Divider,
  Flex,
  Heading,
  IllustratedMessage,
  Link as SpectrumLink,
  Text,
  View,
} from "@adobe/react-spectrum"
import NotFound from "@spectrum-icons/illustrations/NotFound"
import LinkOut from "@spectrum-icons/workflow/LinkOut"
import { PageProps, graphql } from "gatsby"
import React from "react"

const displayDemo = node => {
  if (!node.demo) {
    return (
      <IllustratedMessage>
        <NotFound />
        <Heading>This is no WebUI</Heading>
      </IllustratedMessage>
    )
  }
  if (node.type === "video") {
    return <video width="100%" controls src={node.demo} />
  }

  return <img src={node.demo} alt="demo" style={{ width: '100%' }} />
}

const renderContent = (yaml, data) => {
  const { node } = data.github.viewer.repositories.edges.find(
    edge => edge.node.url === yaml.repository
  )

  return (
    <View key={yaml.id}>
      <Flex
        direction={{ base: "column", M: "row" }}
        justifyContent="space-between"
        gap="size-150"
      >
        <View flex="1">
          <Heading level={1}>{node.name}</Heading>
          <Flex gap="size-200">
            <SpectrumLink isQuiet variant="">
              <a href={node.url}>
                GitHub <LinkOut size="XS" />
              </a>
            </SpectrumLink>
            {node.homepageUrl && (
              <SpectrumLink isQuiet variant="">
                <a href={node.homepageUrl}>
                  WebSite <LinkOut size="XS" />
                </a>
              </SpectrumLink>
            )}
          </Flex>
          <Heading level={3}>言語</Heading>
          <Flex direction="row" gap="size-100" UNSAFE_style={{flexWrap: 'wrap'}}>
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
                <Text UNSAFE_style={{ fontSize: 10, color: "gray" }}>{`${(
                  (edge.size / node.languages.totalSize) *
                  100
                ).toFixed(1)}%`}</Text>
              </Flex>
            ))}
          </Flex>
          <Divider size="S" marginTop="size-300" />
          <Heading level={3}>技術スタック</Heading>
          <Flex direction="row" gap="size-100">
            {node.repositoryTopics.nodes.map((node, index) => (
              <Flex alignItems="center" gap="size-100" key={index}>
                <Text UNSAFE_style={{ fontSize: 12, fontWeight: "Bold" }}>
                  {node.topic.name}
                </Text>
              </Flex>
            ))}
          </Flex>
          <Divider size="S" marginTop="size-300" />
          <Heading level={3}>説明</Heading>
          <Text UNSAFE_style={{ "white-space": "pre-wrap" }}>
            {yaml.description}
          </Text>
        </View>
        <View flex="1" margin="auto">{displayDemo(yaml)}</View>
      </Flex>
    </View>
  )
}

const Products: React.FC<PageProps<GatsbyTypes.ProductIndexQuery>> = ({
  data,
}) => {
  return (
    <Flex direction="column" gap="size-1000">
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
              repositoryTopics(first: 10) {
                nodes {
                  topic {
                    name
                  }
                }
              }
              name
              url
              homepageUrl
            }
          }
        }
      }
    }
  }
`
