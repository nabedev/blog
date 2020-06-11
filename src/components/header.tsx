import React from "react"
import { PageProps } from "gatsby"

import { Avatar, Typography, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'

interface Props {
  title: string
}

const { Title } = Typography

const Header: React.FC<Props> = ({ title }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex' }}>
      <Avatar shape="square" size={32} icon={<UserOutlined />} />
      <Title level={3}>{title}</Title>
    </div>
    <>
      <Input placeholder="search" style={{ width: "200px" }} size="small" />
    </>
  </div>
)

export default Header