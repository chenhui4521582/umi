import React, { useState, useEffect } from 'react';
import { Card, Button } from 'antd';
export default () => {
  /*
  *  总结: 当组件挂载完毕,变更的时候调用, 可以添加第二条参数按需求调用;
  *       相当于ComponentDidMount()， ComponentsDidUpDate()
  */
  useEffect(() => {
    console.log('初始化')
  }, [])
  return (
    <Card title="useEffect" className="auto-height">

    </Card>
  )
}
