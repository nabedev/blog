import React from "react"
import { Link, PageProps } from "gatsby"

import { Heading, Text, Flex } from '@adobe/react-spectrum'

import { SiGithub } from 'react-icons/si'
import Hammer from '@spectrum-icons/workflow/Hammer';
import Document from '@spectrum-icons/workflow/Document'

import OutlinedLink from '../components/outlined-link'

const IndexPage: React.FC<PageProps> = () => (
  <Flex direction="column" alignItems="center">
    <Heading level={1}>Hello👋</Heading>
    <Text>I'm Yuki Watanabe, a web developer.</Text>
    <Text>This site built with Gatsby.js and deployed to Netlify.</Text>

    <Flex gap="size-150" marginTop="size-250">
      <OutlinedLink to="/blog" icon={<Document aria-label="document" />} heading="Blog" text="my blog" />
      <OutlinedLink to="/products" icon={<Hammer aria-label="box" />} heading="Products" text="personal products" />
      <OutlinedLink to="https://github.com/wtnb93" icon={<SiGithub size={24}/>} heading="Github" text="github" />
    </Flex>
  </Flex>
)

export default IndexPage
