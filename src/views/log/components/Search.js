import {
  Form, Select, Button, Input,
} from 'antd';
import { useQuery } from '../../../common/hooks';

const { Option } = Select;
const Search = () => {
  const [form] = Form.useForm();
  const query = useQuery();
  const initialValues = {
    type: query.get('type'),
    code: query.get('code'),
  };

  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      layout="inline"
      form={form}
      onFinish={onFinish}
      initialValues={initialValues}
    >
      <Form.Item
        label="日志模块"
        name="type"
      >
        <Select style={{ width: 180 }} placeholder="选择查询日志模块">
          <Option value="1">工程师管理</Option>
          <Option value="2">主批次管理</Option>
          <Option value="3">子批次管理</Option>
          <Option value="4">标注模板管理</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="查询编号"
        name="code"
      >
        <Input style={{ width: 200 }} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          查询
        </Button>
      </Form.Item>
      <Form.Item>
        <Button htmlType="reset" onClick={onReset}>
          重置
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Search;
