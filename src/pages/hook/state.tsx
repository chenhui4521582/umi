import React, { useState, useEffect, useMemo, memo, useCallback } from 'react';
import { Card, Button, Divider } from 'antd';
import { Prompt } from 'umi';
import style from './style.less'

/*
* 总结：
*  1. 当子组件不想跟着父组件频繁更新的时候，
*   1.1 使用memo包裹，父组件更新时，不会发生更新
*   1.2 当子组件引用父组件的方法时， 使用useCallback包裹,父组件更新时，不会发生更新
*  2. 当子组件内引用父组件方法的时候，父组件可以使用useMemo让子组件不跟父组件一起更新
*/

export default (prop: any) => {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState('');
  const [name, setName] = useState<string>('TestChild组件');
  const expensive = useMemo(() => {
    console.log('父组件');
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
        sum += i;
    }
    return sum;
  }, [count]);

  const cb_setName = useCallback((newName) => {
    return setName(newName)
  }, [])
  return (
    <>
      <Card title="useState" className="auto-height">
        <h4>{count}-{expensive}</h4>
        <p>{val}</p>
        <div>
          <input type="text" value={val} onChange={event => setValue(event.target.value)}/>
          <button onClick={() => setCount(count + 1)}>count+1</button>
          <Divider />
          <MemoChild name={name} setName={cb_setName}/>  
        </div>
      </Card>
    </>
    
  )
}



const Child = (props: any) => {
  console.log('子组件更新了')
  const { name, setName } = props;
  return (
    <div>
      <p>子组件</p>
      <p>{name}</p>
      <button onClick={() => {setName(name + '改变后的Name')}}>改变nanme</button>
      {/* <button>改变nanme</button> */}
    </div>
  )
}

const MemoChild = memo(Child);