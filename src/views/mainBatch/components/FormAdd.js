import {
  Modal, Form, Input, Button, Select, Checkbox, DatePicker,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {
  getPosition,
} from '../../../redux/actionsAsync/mainBatch';

const { Group } = Checkbox;
const { Item } = Form;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const FormAdd = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const config = useSelector((state) => state.mainBatch.config);
  const positions = useSelector((state) => state.mainBatch.positions);
  const productIdsOptions = config.products.map((item) => ({ label: item.name, value: item.id }));
  const regionPositionsOptions = positions.map((item) => ({ label: item.name, value: item.id }));

  const onRegionChange = (regionId) => {
    dispatch(getPosition(regionId));
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Modal
      title="新建批次"
      visible
      footer={null}
      // onCancel={closeFormModal}
      destroyOnClose
    >
      <Form
        {...layout}
        form={form}
        onFinish={onFinish}
      >
        <Item
          label="任务名称"
          name="name"
          rules={[{ required: true, message: '请输入任务名称' }]}
        >
          <Input />
        </Item>
        <Item
          label="申请编号"
          name="dingCode"
          rules={[{ required: true, message: '请输入申请编号' }]}
        >
          <Input />
        </Item>
        <Item
          label="部位"
          name="regionId"
          rules={[{ required: true, message: '请选择部位' }]}
        >
          <Select style={{ width: 120 }} options={productIdsOptions} placeholder="--不限--" onChange={onRegionChange} />
        </Item>

        <Item
          label="部位方向"
          name="regionPositions"
          rules={[{ required: true, message: '请勾选部位方向' }]}
        >
          <Group options={regionPositionsOptions} />
        </Item>
        <Item
          label="开始时间"
          name="startTime"
          rules={[{ required: true, message: '请选择开始时间' }]}
        >
          <DatePicker />
        </Item>
        <Item
          label="结束时间"
          name="endTime"
          rules={[{ required: true, message: '请选择结束时间' }]}
        >
          <DatePicker />
        </Item>
        <Item
          label="批次总数"
        >
          <span style={{ marginRight: 20 }}> </span>
          <Button type="primary">
            查询
          </Button>
        </Item>
        <Item
          label="批次数量"
          name="numbers"
          rules={[{ required: true, message: '请输入批次数量' }]}
        >
          <Input />
        </Item>
        <Item {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={false}>
            提交
          </Button>
        </Item>
      </Form>

    </Modal>
  );
};

export default FormAdd;
