import {
  Form, Select, Button,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTemplateList, getConfig } from '../../../redux/actionsAsync/template';
import { setSearchParamsAction, setFormVisiableAction, setFormTypeAction } from '../../../redux/actions/template';
import { defaultSearchParams } from '../config';

const { Option } = Select;
const { Item } = Form;

const Search = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const config = useSelector((state) => state.template.config);
  const params = useSelector((state) => state.template.searchParams);

  const productIdsOptions = config.products.map((item) => ({ label: item.name, value: item.id }));

  productIdsOptions.unshift({ label: '全部部位', value: '' });

  useEffect(() => {
    dispatch(getConfig());
    dispatch(setSearchParamsAction({ searchParams: defaultSearchParams }));
    dispatch(getTemplateList({ params: defaultSearchParams }));
  }, []);

  const onFinish = (values) => {
    const searchParams = { ...params, ...values };
    dispatch(setSearchParamsAction({ searchParams }));
    dispatch(getTemplateList({ params: searchParams }));
  };
  const onReset = () => {
    dispatch(setSearchParamsAction({ searchParams: defaultSearchParams }));
    form.resetFields();
  };

  const showFormModal = () => {
    dispatch(setFormVisiableAction({ isFormVisible: true }));
    dispatch(setFormTypeAction({ formType: 'add' }));
  };
  return (
    <Form
      layout="inline"
      form={form}
      onFinish={onFinish}
    >
      <Item
        initialValue=""
        name="regionId"
      >
        <Select style={{ width: 120 }} options={productIdsOptions} />
      </Item>
      <Item
        initialValue=""
        name="status"
      >
        <Select style={{ width: 120 }}>
          <Option value="">全部状态</Option>
          <Option value="1">已下架</Option>
          <Option value="2">上架中</Option>
        </Select>
      </Item>
      <Item>
        <Button type="primary" htmlType="submit">
          查询
        </Button>
      </Item>
      <Form.Item>
        <Button htmlType="reset" onClick={onReset}>
          重置
        </Button>
      </Form.Item>
      <Item>
        <Button type="primary" onClick={showFormModal}>
          新建模板
        </Button>
      </Item>
    </Form>
  );
};

export default Search;
