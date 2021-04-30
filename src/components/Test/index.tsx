/*
 * @Descripttion: 
 * @Author: xiao wang
 * @Date: 2021-04-12 17:51:35
 * @LastEditors: xiao wang
 * @LastEditTime: 2021-04-14 13:13:11
 * @FilePath: \react-typescript\src\components\Test\index.tsx
 */
import { Form, Input } from 'antd';
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const Test = () => {
  return (
    <Form {...layout}  >

      <Form.Item label="speed" name={333}>
        <Input />
      </Form.Item>

      <Form.Item label="latitude">
        <Input />
      </Form.Item>

      <Form.Item label="longitude">
        <Input />
      </Form.Item>

      <Form.Item label="elevation">
        <Input />
      </Form.Item>

      <Form.Item label="fuel">
        <Input />
      </Form.Item>

      <Form.Item label="damage">
        <Input />
      </Form.Item>


    </Form>
  );
};


export default Test;