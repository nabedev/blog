import React, { useState, useEffect } from "react"
import { navigate } from '@reach/router';
import { AlignItemsProperty, JustifyContentProperty } from "csstype"
import { DataNode } from "rc-tree/lib/interface"

import { Tree, Avatar, Divider, Typography, Input, Tooltip, Button, Row, Col } from 'antd'
import { FrownOutlined, GithubOutlined, SettingOutlined, UserOutlined, AlignRightOutlined } from '@ant-design/icons'

import useActiveHeading from "../hooks/use-active-anchor"

type HeadingType = {
  depth: number, value: string
}

interface Props {
  headings: HeadingType[]
}

const ScrollSyncHeadingTree: React.FC<Props> = ({ headings }) => {
  if (headings.length == 0) {
    return
  }

  const activeHeading = useActiveHeading(headings.map(heading => heading.value))

  const [ActiveKey, setActiveKey] = useState("")

  const { DirectoryTree } = Tree
  const root = []
  for (let i = headings.length -1; i >= 0; i--) {
    createTreeDataRecursive(root, headings, headings[i], i)
  }

  return <Tree
    treeData={root}
    selectedKeys={[activeHeading]}
    // onSelect={selectedKeys => {
    //   console.log(selectedKeys)
    //   if (selectedKeys[0] == undefined) return
    //     setActiveHeading(selectedKeys[0])
    // }}
    onSelect={p => navigate(`#${p[0]}`) }
    showIcon
    defaultExpandAll
  />
}

const createTreeDataRecursive = (root, nodeList, node, index) => {
  // depthが1ならrootに追加
  if (node.depth == 1) {
    root.unshift(shape(node))
    return
  }

  // nodelist[index-1]に親がいるかを探し、あれば追加
  for (let i = index - 1; i >= 0; i--) {
    if (nodeList[i].depth < node.depth) {
      if (!('children' in nodeList[i])) { nodeList[i]["children"] = [] }
      nodeList[i].children = []
      nodeList[i].children.unshift(shape(node))
      return
    }
  }

  // なければrootにpush
  root.unshift(shape(node))
}

const shape = (node): DataNode => {
  const href = `#${node.value}`
  return {
    title: node.value,
    key: node.value,
    isLeaf: true,
    children: node.children || [],
  }
}

export default ScrollSyncHeadingTree
