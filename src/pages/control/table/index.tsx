import React, { useState, useEffect } from 'react';
import {Card, Table, Button, Popconfirm} from 'antd'
interface I_userState {
  key: Number,
  nid: Number,
  name: String,
  gender: String,
  age: Number,
  schoolname: String,
  description: String
}
export default () => {
  const [data, setData] = useState<I_userState[]>([])
  useEffect(() => {
    setData([
      { key: 1, nid:1, name: 'tab', gender:'男' , age: 22, schoolname: '第一中学', description: '热爱班级活动，尊敬老师'},
      { key: 2, nid:2, name: 'shift', gender:'男' , age: 22, schoolname: '第一中学', description: '热爱班级活动，尊敬老师'},
      { key: 3, nid:6, name: 'ctrl', gender:'男' , age: 22, schoolname: '第一中学', description: '热爱班级活动，尊敬老师'},
      { key: 4, nid:4, name: 'caps lock', gender:'男' , age: 22, schoolname: '第一中学', description: '热爱班级活动，尊敬老师'},
      { key: 5, nid:5, name: 'enter', gender:'女' , age: 22, schoolname: '第一中学', description: '热爱班级活动，尊敬老师'},
      { key: 6, nid:7, name: 'enter', gender:'女' , age: 22, schoolname: '第一中学', description: '热爱班级活动，尊敬老师'},
      { key: 7, nid:3, name: 'enter', gender:'女' , age: 22, schoolname: '第一中学', description: '热爱班级活动，尊敬老师'},
      { key: 8, nid:8, name: 'enter', gender:'女' , age: 22, schoolname: '第一中学', description: '热爱班级活动，尊敬老师'},
      { key: 9, nid:9, name: 'enter', gender:'女' , age: 22, schoolname: '第一中学', description: '热爱班级活动，尊敬老师'},
      { key: 10, nid:10, name: 'enter', gender:'女' , age: 22, schoolname: '第一中学', description: '热爱班级活动，尊敬老师'},
      { key: 11, nid:11, name: 'enter', gender:'女' , age: 22, schoolname: '第一中学', description: '热爱班级活动，尊敬老师'},
      { key: 12, nid:12, name: 'enter', gender:'女' , age: 22, schoolname: '第一中学', description: '热爱班级活动，尊敬老师'},
      { key: 13, nid:5, name: 'enter', gender:'女' , age: 22, schoolname: '第一中学', description: '热爱班级活动，尊敬老师'}
    ])
  }, [])
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: String) => <span style={{color: 'red'}}>{text}</span>,
    },
    {
      title: 'Id',
      dataIndex: 'nid',
      key: 'nid',
      render: (text: String) => <span style={{color: 'blur'}}>{text}</span>,
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '学校',
      dataIndex: 'schoolname',
      key: 'schoolname'
    },
    {
      title: '爱好',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: '操作',
      render: (item: any,record: any, index: number) => (
        <>
          <Popconfirm
            title="你确定要删除? 不可恢复"
            okText="确定"
            cancelText="取消"
            onConfirm={() => {
              onConfirm(record, index);
            }}
          >
            <Button type="primary" size="small" style={{marginRight: '10px'}}>删除</Button>
          </Popconfirm>
          <Button type="primary" size="small">查看详情</Button>
        </>
      )
    }
  ];
  const onConfirm = (record: I_userState[], index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }
  return (
    <Card title="Table表格" className="auto-height">
      <Table columns={columns} dataSource={data} bordered size="small"/>
    </Card>
  )
}