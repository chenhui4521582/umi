import React, { useState, useMemo } from 'react'
import { Card, Divider, Button } from 'antd'
import { useWatch } from '@/utils/watch'

export default () => {
  const [num, setNum] = useState<number>(0);
  /** 计算方法 **/
  let computed_num = useMemo((): String | Number => {
    return `计算属性: ${num + 1}`
  }, [num])
  
  useWatch(num, (newValue, prevValue) => {
    console.log('prevValue: ', prevValue);
    console.log('newValue: ', newValue);
  })

  return (
    <Card
      title="useMemo, memo 使用"
      className="auto-height"
    >
      <div className="title">
        使用useMemo 模拟vue 的computed方法;
      </div>
      <p>
        <span>{num}</span>
        <Button onClick={() => {
          setNum(num + 1)
        }}>修改num</Button>
      </p>


      <p>计算属性{computed_num}</p>
    </Card>
  )
}