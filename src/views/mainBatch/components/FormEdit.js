import {
  Modal, Form, Button, Checkbox, Space, Input, message, InputNumber,
} from 'antd';
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  batchAllot,
  getMainBatchList,
} from '../../../redux/actionsAsync/mainBatch';
import { setFormEditVisiableAction } from '../../../redux/actions/mainBatch';
import EngineerModal from './EngineerModal';

const { Group } = Checkbox;
const { Item } = Form;

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const FormAdd = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const editDetail = useSelector((state) => state.mainBatch.editDetail);
  const searchParams = useSelector((state) => state.mainBatch.searchParams);
  const isFormEditVisiable = useSelector((state) => state.mainBatch.isFormEditVisiable);

  const [loading, setLoaing] = useState(false);
  const [total, setTotal] = useState(editDetail.residualDistributeNum);
  const [used, setUsed] = useState(0);
  const [isEngineerModalVisiable, setIsEngineerModalVisiable] = useState(false);

  useEffect(() => {
    setTotal(editDetail.residualDistributeNum);
    setUsed(0);
  }, [editDetail]);

  const propertiesOptions = editDetail.properties && editDetail.properties.map((item) => ({ label: item.text, value: item.id }));
  const engineersOptions = editDetail.engineers && editDetail.engineers.map((item) => ({ label: item.name, value: item.id }));
  // useEffect(() => {
  //   if (!isFormAddVisiable) {
  //     form.resetFields();
  //     dispatch(setPostionAction({ positions: [] }));
  //     dispatch(setMaxNumbersAction({ maxNumbers: undefined }));
  //   }
  // }, [isFormAddVisiable]);

  const onFinish = (values) => {
    const batchs = form.getFieldValue('batchs');
    if (!batchs || batchs.length === 0) {
      message.warning('请选择工程师');
      return;
    }
    setLoaing(true);
    dispatch(batchAllot({ batchId: editDetail.batchId, ...values }, () => {
      setLoaing(false);
      dispatch(setFormEditVisiableAction({ isFormEditVisiable: false }));
      dispatch(getMainBatchList({ params: searchParams }));
    }, () => {
      setLoaing(false);
    }));
  };

  const closeFormModal = () => {
    dispatch(setFormEditVisiableAction({ isFormEditVisiable: false }));
  };

  const avatarHandler = () => {
    const batchs = form.getFieldValue('batchs');
    if (!batchs || batchs.length === 0) {
      message.warning('请选择工程师');
      return;
    }
    const balance = editDetail.residualDistributeNum % batchs.length;
    const avatar = Math.floor(editDetail.residualDistributeNum / batchs.length);

    const arr = batchs.map((item, index) => {
      if (index === 0) {
        item.num = avatar + balance;
      } else {
        item.num = avatar;
      }

      return item;
    });
    form.setFieldsValue({ batchs: arr });
    setUsed(editDetail.residualDistributeNum);
  };

  const onSetSelectedEngineers = (values) => {
    batchedUpdates(() => {
      setIsEngineerModalVisiable(false);
      const arr = values.map((item) => ({ engineerName: item.label, engineerId: item.value }));
      form.setFieldsValue({ batchs: arr });
      setUsed(0);
    });
  };

  const onNumberChange = () => {
    const batchs = form.getFieldValue('batchs');
    const sumNums = batchs.reduce((sum, batch) => sum + batch.num, 0);
    setUsed(sumNums);
  };

  return (
    <Modal
      width={800}
      title="批次编辑"
      visible={isFormEditVisiable}
      footer={null}
      onCancel={closeFormModal}
      destroyOnClose
    >
      <Form
        form={form}
        onFinish={onFinish}
        preserve={false}
      >
        <Item label="部位">
          {editDetail.regionName}
        </Item>
        <Item label="待发放">
          {editDetail.residualDistributeNum}
        </Item>
        <Item
          label="选择特征"
          name="propertyIds"
          rules={[{ required: true, message: '请选择选择特征' }]}
        >
          <Group options={propertiesOptions} />
        </Item>
        <Space style={{ marginBottom: 8 }}>
          <Button onClick={() => setIsEngineerModalVisiable(true)}>选择工程师</Button>
          <Button onClick={avatarHandler}>平均分配</Button>
          <div>
            总数量：
            {total}
          </div>
          <div>
            已分配数量:
            {used}
          </div>
        </Space>

        <Form.List name="batchs">
          {(fields) => (
            <>
              {fields.map(({
                key, name, fieldKey,
              }) => (
                <Space key={key} style={{ marginBottom: 8 }}>
                  <Item
                    label="工程师"
                    name={[name, 'engineerName']}
                    fieldKey={[fieldKey, 'engineerName']}
                  >
                    <Input style={{ width: 100, border: 0 }} readOnly />
                  </Item>
                  <Item
                    label="标注数量"
                    name={[name, 'num']}
                    fieldKey={[fieldKey, 'num']}
                    rules={[{ required: true, message: '请输入标注数量' }]}
                  >
                    <InputNumber min={0} onChange={onNumberChange} />
                  </Item>
                  <Item
                    label="子批次标题"
                    name={[name, 'title']}
                    fieldKey={[fieldKey, 'title']}
                  >
                    <Input />
                  </Item>
                </Space>
              ))}
            </>
          )}
        </Form.List>
        <Item {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>
            提交
          </Button>
        </Item>
      </Form>
      <EngineerModal
        isEngineerModalVisiable={isEngineerModalVisiable}
        engineersOptions={engineersOptions}
        closeModal={() => setIsEngineerModalVisiable(false)}
        submit={(val) => onSetSelectedEngineers(val)}
      />
    </Modal>
  );
};

export default FormAdd;
