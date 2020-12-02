import React, { useReducer } from 'react';
import { Card, Button, Divider } from 'antd';
import { Prompt } from 'umi';
interface I_state {
  user: {
    name: String,
    age: number,
  } ,
  logOut: Boolean
}
interface I_action {
  type: String,
  data: any
}
export default (prop: any) => {
  const [state, dispatch] = useReducer((state: I_state, action: I_action) => {
    const { type, data } = action;
    switch (type) {
      case 'SET_NAME':
        let newUserDada = { ...state.user, name: data };
        return {...state, user: newUserDada }
      case 'SET_AGE':
        let newAgeData = { ...state.user, age: data };
        return { ...state, user: newAgeData};
      case 'SET_LOGOUT':
        return { ...state, logout: data }
      default:
        return state;
    }
  }, {
      user: { name: '', age: 0 },
      logOut: true
  })
  const setName = (newName: String) => {
    dispatch({type: 'SET_NAME', data: newName})
  }
  const setAge = (newAge: Number) => {
    dispatch({type: 'SET_AGE', data: newAge})
  }
  const setLogout = (data: Boolean) => {
    dispatch({type: 'SET_LOGOUT', data})
  }
  return (
    <>
      <Card title="useState" className="auto-height">
        <p>{state.user.name}</p>
        <button onClick={()=> {setName('chenhui')}}>设置Name</button>
        <Divider />
        <p>{state.user.age}</p>
        <input type="number"
          placeholder="请输入年龄"
          onChange={event => {
          setAge(Number(event.target.value))
        }}/>
        <Divider />
        <button onClick={()=> {setLogout(true)}}>设置Name</button>
        <Divider />
      </Card>
      <Prompt when={state.logOut} message="当前还没有提交确定离开？"/>
    </>
  )
}
