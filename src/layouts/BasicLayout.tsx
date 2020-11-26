import React, { useState, useEffect } from 'react';
import ProLayout, { MenuDataItem } from '@ant-design/pro-layout';
import { IRouteComponentProps } from 'umi'
import { Dropdown, Spin, Menu } from 'antd'
import { Link } from 'umi';
import { queryMenus } from '@/services/global'
import { FolderOutlined, LogoutOutlined, UserOutlined, EditOutlined } from '@ant-design/icons';
import { getMenuData } from './menu'
import '@/assets/global.less'
export default (props: IRouteComponentProps) => {
  const [menus, setMenus] = useState<MenuDataItem[]>([]);
  useEffect(() => {
    async function _getMenu () {
      let res:any = await queryMenus()
      let {menuList} = res?.obj;
      setMenus(menuList)
    }
    _getMenu()
  }, []);
  const handleMenuClick = () => {
    
  }
  /** 右上角用户操作 **/
  const dropdownMenu = (
    <Menu style={{width: 160}} onClick={handleMenuClick}>
      <Menu.Item key="account">
        <UserOutlined />账户信息
      </Menu.Item>
      <Menu.Item key="changPwd">
        <EditOutlined />修改密码
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined />退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      {
        <ProLayout
          style={{
            minHeight: '100vh',
            overflow: 'hidden'
          }}
          title="antd pro"
          menuDataRender={() => {
            return getMenuData(menus)
          }}
          menuItemRender={(menuItemProps: any, defaultDom: any) => {
            return (
              <Link to={menuItemProps.path}>{defaultDom}</Link>
            )
          }}
          rightContentRender = {() => (
            <div style={{marginRight: 20}}>
              <Dropdown overlay={dropdownMenu}>
                <span>
                  <span><UserOutlined />用户信息</span>
                </span>
              </Dropdown>
            </div>
          )}
        >
          {props.children}
        </ProLayout>
      }
    </>
 
  )
}