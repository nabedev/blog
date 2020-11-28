/** @jsx jsx */
import { jsx, Embed, Divider, NavLink, Text, Flex } from "theme-ui"
import { BiCodeAlt } from "react-icons/bi"

interface Props {
  to: string
}

const CodeLink: React.FC<Props> = ({ to }) => (
  <NavLink href={to}>
    <Flex sx={{ alignItems: "center" }}>
      <BiCodeAlt />
      Code
    </Flex>
  </NavLink>
)

export default CodeLink
