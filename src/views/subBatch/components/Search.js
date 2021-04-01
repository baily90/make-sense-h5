import {
  Form, Select, Button, Input,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getSubBatchList } from '../../../redux/actionsAsync/subBatch';
import { setSearchParamsAction } from '../../../redux/actions/subBatch';
import { defaultSearchParams } from '../config';

const { Option } = Select;

const Search = () => {
  const dispatch = useDispatch();
  const params = useSelector((state) => state.subBatch.searchParams);
  const [form] = Form.useForm();

  useEffect(() => {
    const searchParamsAction = setSearchParamsAction({ searchParams: defaultSearchParams });
    dispatch(searchParamsAction);
    const engineerList = getSubBatchList({ params: defaultSearchParams });
    dispatch(engineerList);
  }, []);

  const onFinish = (values) => {
    const obj = {};
    obj[values.type] = values.value;
    const searchParams = { ...params, ...obj };
    const searchParamsAction = setSearchParamsAction({ searchParams });
    dispatch(searchParamsAction);
    const engineerList = getSubBatchList({ params: searchParams });
    dispatch(engineerList);
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      layout="inline"
      form={form}
      onFinish={onFinish}
    >
      <Form.Item
        initialValue="1"
        name="type1"
      >
        <Select style={{ width: 120 }}>
          <Option value="1">主批次编码</Option>
          <Option value="2">子批次编码</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="value"
      >
        <Input style={{ width: 150 }} />
      </Form.Item>
      <Form.Item
        initialValue="1"
        name="type2"
      >
        <Select style={{ width: 120 }}>
          <Option value="1">甲状腺</Option>
          <Option value="2">颈动脉</Option>
        </Select>
      </Form.Item>
      <Form.Item
        initialValue="1"
        name="type3"
      >
        <Select style={{ width: 120 }}>
          <Option value="1">全部状态</Option>
          <Option value="2">待分发</Option>
          <Option value="3">待标注</Option>
          <Option value="4">标注中</Option>
          <Option value="5">取消标注</Option>
          <Option value="6">标注完成</Option>
        </Select>
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
