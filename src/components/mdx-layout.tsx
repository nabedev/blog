import React from "react"
/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"

import ScrollSyncTableContents from "./scroll-sync-table-contents"

const DefaultMDXLayout: React.FC = props => (
  <Flex>
    <Box sx={{ minWidth: "100%" }}>{props.children}</Box>
    {props.data.mdx.tableOfContents.items.length > 0 && (
      <Flex
        sx={{
          flexDirection: "column",
          minWidth: "100%",
          position: "sticky",
          top: 0,
          height: "100%",
          mt: 5,
          ml: 2,
          display: ["none", "flex"],
        }}
      >
        <ScrollSyncTableContents items={props.data.mdx.tableOfContents.items} />
      </Flex>
    )}
  </Flex>
)

export default DefaultMDXLayout
