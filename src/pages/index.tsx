import React from "react"
import { PageProps } from "gatsby"

import { List } from 'antd'

import Header from "../components/header"

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
  <div style={{ maxWidth: '42em', margin: '50px auto' }}>
    <Header title="'s Blog" />
    <List
      itemLayout="horizontal"
      style={{ marginTop: '50px' }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  </div>
)

export default IndexPage
