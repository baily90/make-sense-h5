import { useSelector, useDispatch } from 'react-redux';
import {
  Modal, Form, Input, Button, Checkbox,
} from 'antd';
import { useEffect, useState } from 'react';
import {
  getConfig, addUser, updateUser, getEngineerList,
} from '../../../redux/actionsAsync/engineer';
import { setFormVisiableAction } from '../../../redux/actions/engineer';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormComp = () => {
  const [isShowPhone, setIsShowPhone] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loading, setLoaing] = useState(false);
  const isFormVisible = useSelector((state) => state.engineer.isFormVisible);
  const config = useSelector((state) => state.engineer.config);
  const detail = useSelector((state) => state.engineer.detail);
  const formType = useSelector((state) => state.engineer.formType);

  const params = useSelector((state) => state.engineer.searchParams);
  const productIdsOptions = config.products.map((item) => ({ label: item.name, value: item.id }));
  const roleIdsOptions = config.roles.map((item) => ({ label: item.name, value: item.id }));

  useEffect(() => {
    dispatch(getConfig());
  }, []);
  useEffect(() => {
    if (formType !== 'add') {
      form.setFieldsValue(detail);
    }
  }, [detail]);
  useEffect(() => {
    if (!isFormVisible) {
      form.resetFields();
      setIsShowPhone(false);
    }
  }, [isFormVisible]);
  console.log(`form-${formType}`, detail);

  const closeFormModal = () => {
    dispatch(setFormVisiableAction({ isFormVisible: false }));
  };
  const onFinish = (values) => {
    setLoaing(true);
    let action = () => {};
    if (formType === 'edit') {
      action = updateUser({ id: detail.id, ...values }, () => {
        setLoaing(false);
        dispatch(setFormVisiableAction({ isFormVisible: false }));
        dispatch(getEngineerList({ params }));
      }, () => {
        setLoaing(false);
      });
    } else {
      action = addUser(values, () => {
        setLoaing(false);
        dispatch(setFormVisiableAction({ isFormVisible: false }));
        dispatch(getEngineerList({ params }));
      }, () => {
        setLoaing(false);
      });
    }
    dispatch(action);
  };
  console.log(detail);
  return (
    <Modal
      title="标注工程师"
      visible={isFormVisible}
      footer={null}
      onCancel={closeFormModal}
      destroyOnClose
    >
      <Form
        {...layout}
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          label="手机号码"
        >
          <Form.Item
            name={formType === 'detail' && !isShowPhone ? 'phoneSecret' : 'phone'}
            noStyle
            rules={[{ required: true, message: '请输入手机号码' }]}
          >
            <Input disabled={formType === 'detail'} maxLength={11} style={{ width: 200 }} />
          </Form.Item>
          {formType === 'detail' && <Button type="link" onClick={() => { setIsShowPhone(true); }}>详情</Button>}
        </Form.Item>
        <Form.Item
          label="工程师姓名"
          name="name"
          rules={[{ required: true, message: '请输入工程师姓名' }]}
        >
          <Input disabled={formType === 'detail'} />
        </Form.Item>
        <Form.Item
          label="标注部位"
          name="productIds"
          rules={[{ required: true, message: '请选择标注部位' }]}
        >
          <Checkbox.Group disabled={formType === 'detail'} options={productIdsOptions} />
        </Form.Item>
        <Form.Item
          label="角色"
          name="roleIds"
          rules={[{ required: true, message: '请选择角色' }]}
        >
          <Checkbox.Group disabled={formType === 'detail'} options={roleIdsOptions} />
        </Form.Item>
        <Form.Item {...tailLayout}>
          {formType !== 'detail' ? (
            <Button type="primary" htmlType="submit" loading={loading}>
              {formType === 'add' ? '立即创建' : '保存'}
            </Button>
          ) : (
            <Button onClick={closeFormModal}>
              关闭
            </Button>
          )}
        </Form.Item>
      </Form>

    </Modal>
  );
};

export default FormComp;
