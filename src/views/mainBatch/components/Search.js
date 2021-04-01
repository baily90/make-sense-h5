import {
  Form, Select, Button, Input,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMainBatchList, getConfig } from '../../../redux/actionsAsync/mainBatch';
import { setSearchParamsAction } from '../../../redux/actions/mainBatch';
import { defaultSearchParams } from '../config';

const { Option } = Select;

const Search = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const config = useSelector((state) => state.mainBatch.config);
  const params = useSelector((state) => state.mainBatch.searchParams);

  const productIdsOptions = config.products.map((item) => ({ label: item.name, value: item.id }));

  productIdsOptions.unshift({ label: '全部部位', value: '' });

  useEffect(() => {
    dispatch(getConfig());
    const searchParamsAction = setSearchParamsAction({ searchParams: defaultSearchParams });
    dispatch(searchParamsAction);
    const mainBatchList = getMainBatchList({ params: defaultSearchParams });
    dispatch(mainBatchList);
  }, []);

  const onFinish = (values) => {
    const searchParams = { ...params, ...values };
    const searchParamsAction = setSearchParamsAction({ searchParams });
    dispatch(searchParamsAction);
    const mainBatchList = getMainBatchList({ params: searchParams });
    dispatch(mainBatchList);
  };
  const onReset = () => {
    const searchParamsAction = setSearchParamsAction({ searchParams: defaultSearchParams });
    dispatch(searchParamsAction);
    form.resetFields();
  };

  return (
    <Form
      layout="inline"
      form={form}
      onFinish={onFinish}
    >
      <Form.Item
        label="主批次编码"
        name="code"
      >
        <Input style={{ width: 150 }} />
      </Form.Item>
      <Form.Item
        initialValue=""
        name="regionId"
      >
        <Select style={{ width: 120 }}>
          {productIdsOptions.map((item) => <Option key={item.value} value={item.value}>{item.label}</Option>)}
          {/* <Option value="">全部部位</Option>
          <Option value="1">甲状腺</Option>
          <Option value="2">颈动脉</Option> */}
        </Select>
      </Form.Item>
      <Form.Item
        initialValue=""
        name="status"
      >
        <Select style={{ width: 120 }}>
          <Option value="">全部状态</Option>
          <Option value="1">待分发</Option>
          <Option value="2">待标注</Option>
          <Option value="3">标注中</Option>
          <Option value="4">取消标注</Option>
          <Option value="5">标注完成</Option>
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
      <Form.Item>
        <Button type="primary">
          新建批次
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Search;