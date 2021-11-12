import React from "react"
import { Heading, IllustratedMessage } from "@adobe/react-spectrum"
import NotFound from "@spectrum-icons/illustrations/NotFound"

const NotFoundPage: React.FC = () => (
  <IllustratedMessage>
    <NotFound />
    <Heading>Error 404: Page not found</Heading>
  </IllustratedMessage>
)

export default NotFoundPage
