import { useSelector, useDispatch } from 'react-redux';
import {
  Modal, Form, Input, Button, Select,
} from 'antd';
import { useEffect, useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {
  addTemplate, updateTemplate, getTemplateList,
} from '../../../redux/actionsAsync/template';
import { setFormVisiableAction } from '../../../redux/actions/template';

const { Option } = Select;
const { Item } = Form;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const FormComp = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loading, setLoaing] = useState(false);
  const isFormVisible = useSelector((state) => state.template.isFormVisible);
  const config = useSelector((state) => state.template.config);
  const detail = useSelector((state) => state.template.detail);
  const formType = useSelector((state) => state.template.formType);
  const params = useSelector((state) => state.template.searchParams);

  const productIdsOptions = config.products.map((item) => ({ label: item.name, value: item.id }));

  useEffect(() => {
    if (formType !== 'add') {
      form.setFieldsValue(detail);
    }
  }, [detail]);
  useEffect(() => {
    if (!isFormVisible) {
      form.resetFields();
    }
  }, [isFormVisible]);
  console.log(`form-${formType}`, detail);

  const closeFormModal = () => {
    dispatch(setFormVisiableAction({ isFormVisible: false }));
  };
  const onFinish = (values) => {
    console.log(values);
    setLoaing(true);
    let action = () => {};
    if (formType === 'edit') {
      action = updateTemplate({ id: detail.id, ...values }, () => {
        setLoaing(false);
        dispatch(setFormVisiableAction({ isFormVisible: false }));
        dispatch(getTemplateList({ params }));
      }, () => {
        setLoaing(false);
      });
    } else {
      action = addTemplate(values, () => {
        setLoaing(false);
        dispatch(setFormVisiableAction({ isFormVisible: false }));
        dispatch(getTemplateList({ params }));
      }, () => {
        setLoaing(false);
      });
    }
    dispatch(action);
  };

  return (
    <Modal
      title="????????????"
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
          name="name"
          rules={[{ required: true, message: '?????????????????????' }]}
        >
          <Input style={{ width: 200 }} />
        </Item>
        <Item
          label="??????"
          name="regionId"
          rules={[{ required: true, message: '?????????????????????' }]}
        >
          <Select style={{ width: 150 }} placeholder="????????????">
            {productIdsOptions.map((item) => <Option key={item.value} value={item.value}>{item.label}</Option>)}
          </Select>
        </Item>
        <Item
          label="????????????"
          initialValue="1"
          name="type"
          rules={[{ required: true, message: '???????????????' }]}
        >
          <Select style={{ width: 100 }}>
            <Option value="1">??????</Option>
            <Option value="2">??????</Option>
          </Select>
        </Item>
        <Form.List
          name="options"
          initialValue={['']}
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 1) {
                  return Promise.reject(new Error('??????????????????'));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Item
                  label={`??????${index + 1}`}
                  required
                  key={field.key}
                >
                  <Item
                    {...field}
                    rules={[
                      {
                        required: true,
                        message: '??????????????????',
                      },
                    ]}
                    noStyle
                  >
                    <Input placeholder="?????????" style={{ width: 200 }} />
                  </Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      style={{ marginLeft: 10 }}
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Item>
              ))}
              <Item {...formItemLayoutWithOutLabel}>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: '60%' }}
                  icon={<PlusOutlined />}
                >
                  ???????????????
                </Button>
              </Item>
            </>
          )}
        </Form.List>

        <Item {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>
            {formType === 'add' ? '????????????' : '??????'}
          </Button>
        </Item>
      </Form>

    </Modal>
  );
};

export default FormComp;
