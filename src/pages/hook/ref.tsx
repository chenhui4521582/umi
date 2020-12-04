import React, { useRef, useState, createRef, useEffect } from 'react';
import { Card, Button, notification } from 'antd'
export default () => {
  const [count, setCount] = useState<number>(0);
  const useRefCount = useRef<any>(0);
  const reatRefCount = createRef();
  const openNotification = () => {
    notification.open({
      message: '温馨提示',
      description: `
        useRef: ${useRefCount.current}
        reactRef: ${reatRefCount.current}
      `,
      duration: 2
    });
  };
  useEffect(() => {
    if (!useRefCount.current) {
      useRefCount.current = count;
    }
    if (!reatRefCount.current) {
      reatRefCount.current = count;
    }
  }, [count])
  const showAlert = () => openNotification()
  return (
    <Card
      title="useRef"
      className="auto-height"
    >
      <p>useRef 跟 createRef 的区别</p>
      <p>当前Count：{ count }</p>
      <Button onClick={() => {setCount( count+1 )}}>+1</Button>
      <Button onClick={showAlert}>showAlert</Button>
    </Card>
  )
}