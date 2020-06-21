import React from "react"
import { PageProps, StaticQuery, graphql, Link } from "gatsby"

import { Flex, Styled, Box, Text, useColorMode } from "theme-ui"
import { FaMoon, FaSun, FaGithub } from "react-icons/fa"


const Header: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode()
  return <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={ data => (
        <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Styled.a as={Link} to="/">
            <Text sx={{ fontSize: 5, fontWeight: 'display' }}>{data.site.siteMetadata.title}</Text>
          </Styled.a>
          <Box>
            <Flex>
            {colorMode == 'light'
              ? <FaMoon size={24} onClick={() => setColorMode('default')} />
              : <FaSun size={24} onClick={() => setColorMode('light')} />
            }
            <FaGithub size={24} />
            </Flex>
          </Box>
        </Flex>
      )}
  />
}

export default Header