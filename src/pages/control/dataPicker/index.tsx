import React from 'react';
import {Card, DatePicker, Form, Row, Col, Button, Divider} from 'antd'
import 'moment/locale/zh-cn';
import locale from 'antd/lib/date-picker/locale/zh_CN';
export default () => {
  const onChange = () => {

  }
  const onOk = () => {

  }
  const [form] = Form.useForm()
  return (
    <Card
      title="DataPicker日期选择框"
      className="auto-height"
    > 
      <Form
        form={form}
      >
        <Row>
          <Col>
            <Form.Item
              label="选择开始时间"
              name="startTime"
            >
              <DatePicker 
                locale={locale}
                onChange={onChange} onOk={onOk} 
              />
            </Form.Item>

          </Col>
          <Col offset={1}>
            <Form.Item
              label="选择结束时间"
              name="endTime"
            >
              <DatePicker 
                locale={locale}
                onChange={onChange} onOk={onOk} 
              />
            </Form.Item>
          </Col>
          <Col offset={1}>
            <Form.Item >
              <Button type="primary" htmlType="submit">查询</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Divider/>
      <Form
        form={form}
      >
        <Row>
          <Col>
            <Form.Item
              label="选择开始时间"
              name="startTime"
              rules={[
                {required: true, message: '请输入'}
              ]}
            >
              <DatePicker 
                showTime
                locale={locale}
                onChange={onChange} onOk={onOk} 
              />
            </Form.Item>

          </Col>
          <Col offset={1}>
            <Form.Item
              label="选择结束时间"
              name="endTime"
            >
              <DatePicker 
                showTime
                locale={locale}
                onChange={onChange} onOk={onOk} 
              />
            </Form.Item>
          </Col>
          <Col offset={1}>
            <Form.Item >
              <Button type="primary" htmlType="submit">查询</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}