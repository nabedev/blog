import React from "react"
import { PageProps } from "gatsby"

import { Avatar, Divider, Typography, Input, Tooltip, Button, Row, Col } from 'antd'
import { SearchOutlined, GithubOutlined, SettingOutlined, UserOutlined, PropertySafetyFilled } from '@ant-design/icons'

import FlexBox from "./flex-Box"
import './input.less'

interface Props {
  title: string
}

const { Title } = Typography

const Header: React.FC<Props> = ({ title }) => (
  <FlexBox justify="space-between">
    <FlexBox>
      <Avatar shape="square" size={32} icon={<UserOutlined />} />
      <Title level={3} style={{ marginBottom: 0, marginLeft: '8px' }}>{title}</Title>
    </FlexBox>
    <FlexBox>
      <Input
        placeholder="search"
        prefix={<SearchOutlined />}
      />
      <Divider type="vertical" />
      <Tooltip title="Turn on Darkmode">
        <Button shape="circle" icon={<SettingOutlined />} />
      </Tooltip>
      <Divider type="vertical" />
      <Tooltip title="Jump github">
        <Button shape="circle" icon={<GithubOutlined />} />
      </Tooltip>
    </FlexBox>
  </FlexBox>
)

export default Header