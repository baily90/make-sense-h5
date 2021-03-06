import { useSelector, useDispatch } from 'react-redux';
import {
  Modal, Form, Input, Button, Checkbox,
} from 'antd';
import { useEffect, useState } from 'react';
import {
  getConfig, addUser, updateUser, getEngineerList,
} from '../../../redux/actionsAsync/engineer';
import { setFormVisiableAction } from '../../../redux/actions/engineer';

const { Group } = Checkbox;
const { Item } = Form;

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
      title="???????????????"
      visible={isFormVisible}
      footer={null}
      onCancel={closeFormModal}
      destroyOnClose
    >
      <Form
        {...layout}
        form={form}
        onFinish={onFinish}
        preserve={false}
      >
        <Item
          label="????????????"
        >
          <Item
            name={formType === 'detail' && !isShowPhone ? 'phoneSecret' : 'phone'}
            noStyle
            rules={[{ required: true, message: '?????????????????????' }]}
          >
            <Input disabled={formType === 'detail'} maxLength={11} style={{ width: 200 }} />
          </Item>
          {formType === 'detail' && <Button type="link" onClick={() => { setIsShowPhone(true); }}>??????</Button>}
        </Item>
        <Item
          label="???????????????"
          name="name"
          rules={[{ required: true, message: '????????????????????????' }]}
        >
          <Input disabled={formType === 'detail'} />
        </Item>
        <Item
          label="????????????"
          name="productIds"
          rules={[{ required: true, message: '?????????????????????' }]}
        >
          <Group disabled={formType === 'detail'} options={productIdsOptions} />
        </Item>
        <Item
          label="??????"
          name="roleIds"
          rules={[{ required: true, message: '???????????????' }]}
        >
          <Group disabled={formType === 'detail'} options={roleIdsOptions} />
        </Item>
        <Item {...tailLayout}>
          {formType !== 'detail' ? (
            <Button type="primary" htmlType="submit" loading={loading}>
              {formType === 'add' ? '????????????' : '??????'}
            </Button>
          ) : (
            <Button onClick={closeFormModal}>
              ??????
            </Button>
          )}
        </Item>
      </Form>

    </Modal>
  );
};

export default FormComp;
