import {
  Modal, Form, Input, Button, Select, Checkbox, DatePicker,
} from 'antd';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import {
  getPosition,
  getMaxNumbers,
  addBatch,
} from '../../../redux/actionsAsync/mainBatch';
import { setFormAddVisiableAction } from '../../../redux/actions/mainBatch';

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
  const [loading, setLoaing] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const isFormAddVisible = useSelector((state) => state.mainBatch.isFormAddVisible);
  const config = useSelector((state) => state.mainBatch.config);
  const positions = useSelector((state) => state.mainBatch.positions);
  const maxNumbers = useSelector((state) => state.mainBatch.maxNumbers);
  const productIdsOptions = config.products.map((item) => ({ label: item.name, value: item.id }));
  const regionPositionsOptions = positions.map((item) => ({ label: item.name, value: item.id }));

  const onRegionChange = (regionId) => {
    dispatch(getPosition(regionId));
  };

  const queryMaxNumbers = () => {
    form.validateFields(['name', 'dingCode', 'regionId', 'regionPositions', 'startTime', 'endTime']).then((values) => {
      const params = {
        regionId: values.regionId,
        regionPosition: values.regionPositions.join(','),
        startTime: moment(values.startTime).format('YYYY-MM-DD'),
        endTime: moment(values.endTime).format('YYYY-MM-DD'),
      };
      dispatch(getMaxNumbers({ params }));
    }).catch((e) => {
      console.log(e);
    });
  };

  const onFinish = (values) => {
    values.startTime = moment(values.startTime).format('YYYY-MM-DD');
    values.endTime = moment(values.endTime).format('YYYY-MM-DD');
    dispatch(addBatch(values, () => {
      console.log('success');
      setLoaing(false);
      dispatch(setFormAddVisiableAction({ isFormAddVisible: false }));
      // dispatch(getEngineerList({ params }));
    }, () => {
      console.log('error');
      setLoaing(false);
    }));
  };

  const closeFormModal = () => {
    dispatch(setFormAddVisiableAction({ isFormAddVisible: false }));
  };

  return (
    <Modal
      title="新建批次"
      visible={isFormAddVisible}
      footer={null}
      onCancel={closeFormModal}
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
          <span style={{ marginRight: 20 }}>
            {maxNumbers ? `共${maxNumbers}份` : ''}
          </span>
          <Button type="primary" onClick={queryMaxNumbers}>
            查询
          </Button>
        </Item>
        <Item
          label="批次数量"
          name="numbers"
          rules={[{
            validator(_, value) {
              if (!value) {
                return Promise.reject(new Error('请输入批次数量'));
              }
              if (!maxNumbers) {
                return Promise.reject(new Error('请先查询批次总数'));
              }
              if (value <= Number(maxNumbers)) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(`最多可输入${maxNumbers}`));
            },
          }]}
        >
          <Input />
        </Item>
        <Item {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>
            提交
          </Button>
        </Item>
      </Form>

    </Modal>
  );
};

export default FormAdd;
