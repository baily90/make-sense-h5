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
    console.log(form);
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      layout="inline"
      form={form}
      initialValues={{ type: 'code' }}
      onFinish={onFinish}
    >
      <Form.Item
        name="type"
      >
        <Select style={{ width: 150 }}>
          <Option value="code">标注工程师编号</Option>
          <Option value="no">标注工程师账号</Option>
          <Option value="name">标注工程师姓名</Option>
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
