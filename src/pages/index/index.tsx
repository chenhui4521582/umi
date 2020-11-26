import React from 'react'
import { Button } from 'antd'
import { Link } from 'umi'
interface I_controlList {
  name: String,
  url: string
}
export default (props: any) => {
  const controlList: I_controlList[] = [
    {name: '下拉菜单', url: '/control/dropdown'}
  ]  
  return (
    <>
      {
        controlList?.map( (item, index) => (
          <Button key={index} type="primary">
            <Link to={item.url}>{item.name}</Link>
          </Button>
        ))
      }
    </>
  )
}