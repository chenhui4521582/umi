import React from 'react';
import {Dropdown, Menu, Button, Card} from 'antd';
export default () => {
  const menu = (
    <Menu>
      <Menu.Item>11111</Menu.Item>
      <Menu.Item>222</Menu.Item>
      <Menu.Item>3333</Menu.Item>
      <Menu.Item>4444</Menu.Item>
    </Menu>
  )
  
  return (
    <Card title="下拉菜单" className="auto-height">
      <Dropdown placement="bottomCenter" overlay={menu}>
        <Button>dropdown</Button>
      </Dropdown>
    </Card>

  )
}