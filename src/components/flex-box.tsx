import React from "react"
import { PageProps } from "gatsby"

import { Avatar, Divider, Typography, Input, Tooltip, Button, Row, Col } from 'antd'
import { SearchOutlined, GithubOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'

interface Props {
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
  align?: 'top' | 'center' | 'bottom'
}

const FlexBox: React.FC<Props> = ({ children, justify = 'start', align = 'center' }) => {
  const properties = {
    display: 'flex',
    justifyContent: justify,
    alignItems: align
  }
  return <div style={properties}>
    {children}
  </div>
}

export default FlexBox
