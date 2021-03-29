import { useSelector, useDispatch } from 'react-redux';
import {
  Modal, Form, Input, Button, Checkbox,
} from 'antd';
import { useEffect, useState } from 'react';
import { getConfig, addUser, getEngineerList } from '../../../redux/actionsAsync/engineer';
import { setFormVisiableAction } from '../../../redux/actions/engineer';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormComp = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loading, setLoaing] = useState(false);
  const isFormVisible = useSelector((state) => state.engineer.isFormVisible);
  const config = useSelector((state) => state.engineer.config);
  const detail = useSelector((state) => state.engineer.detail);

  const params = useSelector((state) => state.engineer.searchParams);
  const productIdsOptions = config.products.map((item) => ({ label: item.name, value: item.id }));
  const roleIdsOptions = config.roles.map((item) => ({ label: item.name, value: item.id }));

  useEffect(() => {
    dispatch(getConfig());
  }, []);
  console.log('form');

  const closeFormModal = () => {
    dispatch(setFormVisiableAction({ isFormVisible: false }));
  };
  const onFinish = (values) => {
    setLoaing(true);
    dispatch(addUser(() => {
      setLoaing(false);
      dispatch(setFormVisiableAction({ isFormVisible: false }));
      dispatch(getEngineerList({ params }));
    }, () => {
      setLoaing(false);
      console.log('faile');
    }));
    console.log(values);
  };
  return (
    <Modal
      title="标注工程师"
      form={form}
      visible={isFormVisible}
      footer={null}
      onCancel={closeFormModal}
      destroyOnClose
    >
      <Form
        {...layout}
        initialValues={detail}
        onFinish={onFinish}
      >
        <Form.Item
          label="手机号码"
          name="phone"
          rules={[{ required: true, message: '请输入手机号码' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="工程师姓名"
          name="name"
          rules={[{ required: true, message: '请输入工程师姓名' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="标注部位"
          name="productIds"
          rules={[{ required: true, message: '请选择标注部位' }]}
        >
          <Checkbox.Group options={productIdsOptions} />
        </Form.Item>
        <Form.Item
          label="角色"
          name="roleIds"
          rules={[{ required: true, message: '请选择角色' }]}
        >
          <Checkbox.Group options={roleIdsOptions} />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>
            立即创建
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FormComp;
