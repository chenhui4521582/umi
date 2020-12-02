import React, { useState } from 'react';
import { Button, Divider} from 'antd';
import {connect} from 'dva'
const Index = (props: any) => {
  const hand = () => {
    props.dispatch(
      {type: 'user/save', payload: {name: 'chenhuihui2', age: 500}}
    )
  }
  const hand1 = () => {
    props.dispatch(
      {type: 'user1/queryUser', payload: {name: 'chenhuihui2', age: 500}}
    )
  }
  return (
    <div className="inex">
      {props.user.name},
      {props.user.age}
      <Button onClick={hand}>修改user1</Button>
      <Divider />
      {props.user1.name},
      {props.user1.age}
      <Button onClick={hand1}>修改user2</Button>
      <Divider />
    </div>
  );
}

const mapStateToprops = (state: any) => ({
  user: state.user,
  user1: state.user1
})

export default connect(mapStateToprops)(Index)