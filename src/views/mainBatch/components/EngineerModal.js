import React from 'react';
import {
  Modal, Form, Button, Checkbox,
} from 'antd';
import propTypes from 'prop-types';

const { Group } = Checkbox;
const { Item } = Form;
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const EngineerModal = ({
  isEngineerModalVisiable, engineersOptions, closeModal, submit,
}) => {
  const onFinish = (values) => {
    const selectedEngineers = engineersOptions.filter((item) => values.engineers.includes(item.value));
    submit(selectedEngineers);
  };
  return (
    <Modal
      title="选择工程师"
      visible={isEngineerModalVisiable}
      footer={null}
      onCancel={closeModal}
    >
      <Form
        onFinish={onFinish}
      >
        <Item
          label="选择工程师"
          name="engineers"
          rules={[{ required: true, message: '请选择工程师' }]}
        >
          <Group options={engineersOptions} />
        </Item>
        <Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </Item>
      </Form>
    </Modal>
  );
};

EngineerModal.propTypes = {
  isEngineerModalVisiable: propTypes.bool.isRequired,
  engineersOptions: propTypes.array.isRequired,
  closeModal: propTypes.func.isRequired,
  submit: propTypes.func.isRequired,
};

export default EngineerModal;
