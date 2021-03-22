/*
 * @Author: zhangyanlong
 * @Date: 2021-03-22 23:58:03
 * @LastEditTime: 2021-03-23 01:19:12
 * @LastEditors: zhangyanlong
 * @Description:
 */
import {
  Form, Select, Button,
} from 'antd';

const { Option } = Select;

const Search = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item
        name="gender"
        label="Gender"
      >
        <Select defaultValue="male" style={{ width: 120 }}>
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          查询
        </Button>
        <Button htmlType="reset" onClick={onReset}>
          重置
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Search;
