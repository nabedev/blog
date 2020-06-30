import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
/** @jsx jsx */
import { jsx, Flex, Box, useColorMode, Heading } from "theme-ui"
import { FaMoon, FaSun, FaGithub } from "react-icons/fa"
import { HeaderQuery } from "../../types/graphql-types"

const Header: React.FC = (data) => {
  const [colorMode, setColorMode] = useColorMode()

  return <StaticQuery
    query={graphql`
      query Header {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data: HeaderQuery) => (
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Flex>
          <Heading>
            <Link to="/" sx={{ variant: 'links.heading', fontWeight: 'display', fontSize: 4 }}>
              {data.site.siteMetadata.title}
            </Link>
          </Heading>
        </Flex>
        <Box>
          <Flex>
            {colorMode === 'default'
            ? <FaMoon size={24} onClick={() => setColorMode('dark')} />
            : <FaSun size={24} onClick={() => setColorMode('default')} />
            }
          <FaGithub size={24} sx={{ ml: 2 }} />
          </Flex>
        </Box>
      </Flex>
    )}
  />
}

export default Header
