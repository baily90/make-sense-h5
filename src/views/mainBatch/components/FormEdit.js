import {
  Modal, Form, Button, Checkbox, Space, Input,
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
    console.log({ batchId: editDetail.batchId, ...values });
    setLoaing(true);
    dispatch(batchAllot({ batchId: editDetail.batchId, ...values }, () => {
      console.log('success');
      setLoaing(false);
      dispatch(setFormEditVisiableAction({ isFormEditVisiable: false }));
      dispatch(getMainBatchList({ params: searchParams }));
    }, () => {
      console.log('error');
      setLoaing(false);
    }));
  };

  const closeFormModal = () => {
    dispatch(setFormEditVisiableAction({ isFormEditVisiable: false }));
  };

  const avatarHandler = () => {
    console.log(form);
    // const { length } = form.getFieldValue('batchs');
    // const temp = editDetail.residualDistributeNum / length;
    // console.log(temp);
  };

  const onSetSelectedEngineers = (values) => {
    batchedUpdates(() => {
      setIsEngineerModalVisiable(false);
      form.setFieldsValue({ batchs: values });
    });
  };

  return (
    <Modal
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
                  <Item>
                    姓名：
                  </Item>
                  <Item
                    name={[name, 'num']}
                    fieldKey={[fieldKey, 'num']}
                    rules={[{ required: true, message: '请输入标注数量' }]}
                  >
                    <Input placeholder="标注数量" style={{ width: 100 }} />
                  </Item>
                  <Item
                    name={[name, 'last']}
                    fieldKey={[fieldKey, 'last']}
                  >
                    <Input placeholder="子批次标题" />
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
