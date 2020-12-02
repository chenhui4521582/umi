import React, { useState } from 'react';
import { Row, Col, Card, Button, Form, Modal, Select, Tree, Empty, message } from 'antd';
import { queryTreeData } from '@/services/global'
const { Option } = Select;
const formatData = (data: any[]) => {
  return data?.map((item: any) => {
    const { name, code, sort, childrenNode } = item;
    const result = {
      ...item,
      title: `${sort}-${name}`,
      key: code
    }
    if (!!childrenNode.length) {
      result['children'] = formatData(item.childrenNode);
    }
    return result;
  })
}
export default () => {
  const [treeData, setTreeData] = useState([])
  const [curSelcet, setCurSelect] = useState<String>('')
  const treeSelect = (selectedKeys: any, info: any) => {
    console.log(selectedKeys)
    console.log(info)
  }
  /** 菜单管理选择回调 **/
  const menuChange = (value: String) => {
    setCurSelect(value);
  }
  const _queryTreeData = async () => {
    if (curSelcet) {
      const res = await queryTreeData();
      console.log(formatData(res))
      setTreeData(formatData(res));
      return
    }
    message.warning('请选择菜单')
  }
  return (
    <Card
      className="auto-height"
    >
      <Row>
        <Col span={11}>
          <Card title="菜单管理" style={{ minHeight: '300px' }}>
            <Select
              style={{width: 200}}
              showSearch
              placeholder="请选择"
              optionFilterProp="children"
              onChange={ menuChange }
              filterOption={(input, option: any) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
            <Button type="primary" style={{ marginLeft: '10px' }} onClick={_queryTreeData}>查询</Button>
          </Card>
        </Col>
        <Col span={12} offset={1} style={{ height: '100%' }}>
          <Card title="项目资源" style={{ minHeight: '300px' }}>

            {
              !!treeData.length ?
              <Tree
                treeData={treeData}
                showLine
                showIcon
                onSelect={treeSelect}
              />
              :
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            }


          </Card>
        </Col>
      </Row>
      
    </Card>
  )
}