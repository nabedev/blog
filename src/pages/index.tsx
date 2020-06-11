import React from "react"
import { PageProps } from "gatsby"

import { List, Input, Layout, Menu, Breadcrumb, Button, Typography, Space, Avatar } from 'antd'
import { GlobalOutlined, UserOutlined, LaptopOutlined, NotificationOutlined, StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons'

import Header from "../components/header"

const { Title, Paragraph, Text } = Typography;
const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const IndexPage: React.FC<PageProps<{}>> = () => (
  <Layout style={{ margin: '50px auto', maxWidth: '800px', padding: '16px'}}>
    <Header title="Blog" />
    <Layout style={{ marginTop: '50px' }}>
      <Content>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              // avatar={<Avatar icon={<GlobalOutlined />} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
      </Content>
    </Layout>
  </Layout>
)

export default IndexPage
