import React from 'react'
import {Cascader, Card} from 'antd';
export default (props: any) => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  const handChange = (value) => {
    console.log(value)
  }
  return (
    <>
      <Card
        title="Cascader联级菜单"
        className="auto-height"
      >
        <Cascader options={options} onChange={handChange}></Cascader>
      </Card>
    </>
  )
}