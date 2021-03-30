/*
 * @Author: zhangyanlong
 * @Date: 2021-03-22 23:58:03
 * @LastEditTime: 2021-03-23 01:19:12
 * @LastEditors: zhangyanlong
 * @Description:
 */
import {
  Form, Select, Button, Input,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getEngineerList } from '../../../redux/actionsAsync/engineer';
import { setSearchParamsAction, setFormVisiableAction, setFormTypeAction } from '../../../redux/actions/engineer';
import { defaultSearchParams } from '../config';

const { Option } = Select;

const Search = () => {
  const dispatch = useDispatch();
  const params = useSelector((state) => state.engineer.searchParams);
  const [form] = Form.useForm();

  useEffect(() => {
    const searchParamsAction = setSearchParamsAction({ searchParams: defaultSearchParams });
    dispatch(searchParamsAction);
    const engineerList = getEngineerList({ params: defaultSearchParams });
    dispatch(engineerList);
  }, []);

  const onFinish = (values) => {
    const obj = {};
    obj[values.type] = values.value;
    const searchParams = { ...params, ...obj };
    const searchParamsAction = setSearchParamsAction({ searchParams });
    dispatch(searchParamsAction);
    const engineerList = getEngineerList({ params: searchParams });
    dispatch(engineerList);
  };

  const onReset = () => {
    const searchParamsAction = setSearchParamsAction({ searchParams: defaultSearchParams });
    dispatch(searchParamsAction);
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
      <Form.Item
        initialValue="code"
        name="type"
      >
        <Select style={{ width: 150 }}>
          <Option value="code">标注工程师编号</Option>
          <Option value="phone">标注工程师账号</Option>
          <Option value="name">标注工程师姓名</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="value"
      >
        <Input style={{ width: 150 }} />
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
        <Button type="primary" onClick={showFormModal}>
          新增工程师
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Search;
