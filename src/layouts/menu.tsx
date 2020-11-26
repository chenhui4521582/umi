
import React from 'react';
import{ MenuDataItem } from '@ant-design/pro-layout';
import { FolderOutlined } from '@ant-design/icons';
const IconMap = {
  folder: <FolderOutlined />,
};

function formatter(data: MenuDataItem[], parentPath?: string) {
  return data?.map((item) => {
    let { path, icon, children } = item;
    path = parentPath + path;
    const result = {
      ...item,
      icon: icon && IconMap['folder'],
      path
    };
    if (children) {
      result.children = formatter(children, `${path}/`);
    }
    return result;
  });
}

export const getMenuData = (menu: MenuDataItem[]) => formatter(menu, '/');