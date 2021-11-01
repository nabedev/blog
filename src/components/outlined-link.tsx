import React from "react"
import { Link, PageProps } from "gatsby"

import { Heading, Text, View, Flex } from "@adobe/react-spectrum"
import { useHover } from "@react-aria/interactions"

const OutlinedLink: React.FC = ({ to, icon, heading, text }) => {
  let [events, setEvents] = React.useState([])
  let { hoverProps, isHovered } = useHover({
    onHoverStart: e =>
      setEvents(events => [...events, `hover start with ${e.pointerType}`]),
    onHoverEnd: e =>
      setEvents(events => [...events, `hover end with ${e.pointerType}`]),
  })

  return (
    <div {...hoverProps}>
      <Link to={to}>
        <View
          borderWidth="thick"
          borderColor={isHovered ? "dark" : "light"}
          borderRadius="medium"
          padding="size-150"
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            gap="size-150"
          >
            {icon}
            <View>
              <Heading level={4} margin={0}>
                {heading}
              </Heading>
              <Text>{text}</Text>
            </View>
          </Flex>
        </View>
      </Link>
    </div>
  )
}

export default OutlinedLink
