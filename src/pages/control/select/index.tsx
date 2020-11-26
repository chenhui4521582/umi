import React from 'react';
import { Select, Card , Row, Col, Space} from 'antd';
const { Option } = Select;
export default (props: any) => {
  return (
    <>
      <Card 
        title="Select选择器"
        className="auto-height"
      > 
        <Space>
            <Select defaultValue="jack" style={{width: '200px'}}>
              <Option value="jack">jack</Option>
              <Option value="lucy">lucy</Option>
              <Option value="Yiminghe">Yiminghe</Option>
            </Select>
            <Select 
              showSearch
              defaultValue="jack"
              style={{width: '200px'}} 
              filterOption={(input: any, option: any) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }
            >
              <Option value="jack">jack</Option>
              <Option value="lucy">lucy</Option>
              <Option value="Yiminghe">Yiminghe</Option>
            </Select>
        </Space>
      </Card>


    </>
  )
}