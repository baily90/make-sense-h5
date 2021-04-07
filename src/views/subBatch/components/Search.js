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
    const searchParams = {
      regionId: values.regionId, status: values.status, page: params.page, perPage: params.perPage,
    };
    searchParams[values.type] = values.value;
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
        initialValue="batchCode"
        name="type"
      >
        <Select style={{ width: 120 }}>
          <Option value="batchCode">主批次编码</Option>
          <Option value="subBatchCode">子批次编码</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="value"
      >
        <Input style={{ width: 150 }} />
      </Form.Item>
      <Form.Item
        initialValue=""
        name="regionId"
      >
        <Select style={{ width: 120 }}>
          <Option value="">全部部位</Option>
          <Option value="1">甲状腺</Option>
          <Option value="2">颈动脉</Option>
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
    </Form>
  );
};

export default Search;
