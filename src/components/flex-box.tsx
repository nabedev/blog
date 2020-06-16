import React, { CSSProperties } from "react"
import { AlignItemsProperty, JustifyContentProperty } from "csstype"
import { PageProps } from "gatsby"

import { Avatar, Divider, Typography, Input, Tooltip, Button, Row, Col } from 'antd'
import { SearchOutlined, GithubOutlined, SettingOutlined, UserOutlined, AlignRightOutlined } from '@ant-design/icons'

interface Props extends React.HTMLAttributes<HTMLElement> {
  justify?: JustifyContentProperty
  align?: AlignItemsProperty
}

const FlexBox: React.FC<Props> = ({ children, justify = 'start', align = 'center', ...props }) => {
  const style: CSSProperties = {...props.style, ...{
    display: 'flex',
    justifyContent: justify,
    alignItems: align,
  }}
  return <div {...props} style={style}>
    {children}
  </div>
}

export default FlexBox
