import React from "react"
import { PageProps, StaticQuery, graphql, Link } from "gatsby"

import { Avatar, Divider, Typography, Input, Tooltip, Button, Row, Col } from 'antd'
import { BulbOutlined, SearchOutlined, GithubOutlined, SettingOutlined, UserOutlined, PropertySafetyFilled } from '@ant-design/icons'

import FlexBox from "./flex-Box"

const { Title } = Typography

const Header: React.FC = () => (
  <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={ data => (
        <FlexBox justify="space-between" style={{ marginBottom: '50px' }}>
          <FlexBox>
            <Avatar shape="square" size={32} icon={<UserOutlined />} />
            <Link to="/">
              <Title level={2} style={{ marginBottom: 0, marginLeft: '8px' }}>{data.site.siteMetadata.title}</Title>
            </Link>
          </FlexBox>
          <FlexBox>
            {/* <Input
              placeholder="search"
              prefix={<SearchOutlined />}
            />
            <Divider type="vertical" /> */}
            <Tooltip title="Turn on Darkmode">
              <Button shape="circle" icon={<BulbOutlined />} />
            </Tooltip>
            <Divider type="vertical" />
            <Tooltip title="Jump github">
              <Button shape="circle" icon={<GithubOutlined />} />
            </Tooltip>
          </FlexBox>
        </FlexBox>
      )}
    />
)

export default Header