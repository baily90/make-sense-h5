import {
  Modal, Form, Input, Button, Select, Checkbox, DatePicker,
} from 'antd';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import {
  getPosition,
  getMaxNumbers,
  addBatch,
  getMainBatchList,
} from '../../../redux/actionsAsync/mainBatch';
import { setFormAddVisiableAction, setPostionAction, setMaxNumbersAction } from '../../../redux/actions/mainBatch';

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
  const searchParams = useSelector((state) => state.mainBatch.searchParams);
  const isFormAddVisiable = useSelector((state) => state.mainBatch.isFormAddVisiable);
  const config = useSelector((state) => state.mainBatch.config);
  const positions = useSelector((state) => state.mainBatch.positions);
  const maxNumbers = useSelector((state) => state.mainBatch.maxNumbers);
  const productIdsOptions = config.products.map((item) => ({ label: item.name, value: item.id }));
  const regionPositionsOptions = positions.map((item) => ({ label: item.name, value: item.id }));

  useEffect(() => {
    if (!isFormAddVisiable) {
      form.resetFields();
      dispatch(setPostionAction({ positions: [] }));
      dispatch(setMaxNumbersAction({ maxNumbers: undefined }));
    }
  }, [isFormAddVisiable]);

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
    setLoaing(true);
    values.startTime = moment(values.startTime).format('YYYY-MM-DD');
    values.endTime = moment(values.endTime).format('YYYY-MM-DD');
    dispatch(addBatch(values, () => {
      console.log('success');
      setLoaing(false);
      dispatch(setFormAddVisiableAction({ isFormAddVisiable: false }));
      dispatch(getMainBatchList({ params: searchParams }));
    }, () => {
      console.log('error');
      setLoaing(false);
    }));
  };

  const closeFormModal = () => {
    dispatch(setFormAddVisiableAction({ isFormAddVisiable: false }));
  };

  return (
    <Modal
      title="????????????"
      visible={isFormAddVisiable}
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
          <Input />
        </Item>
        <Item
          label="????????????"
          name="dingCode"
          rules={[{ required: true, message: '?????????????????????' }]}
        >
          <Input />
        </Item>
        <Item
          label="??????"
          name="regionId"
          rules={[{ required: true, message: '???????????????' }]}
        >
          <Select style={{ width: 120 }} options={productIdsOptions} placeholder="--??????--" onChange={onRegionChange} />
        </Item>

        <Item
          label="????????????"
          name="regionPositions"
          rules={[{ required: true, message: '?????????????????????' }]}
        >
          <Group options={regionPositionsOptions} />
        </Item>
        <Item
          label="????????????"
          name="startTime"
          rules={[{ required: true, message: '?????????????????????' }]}
        >
          <DatePicker />
        </Item>
        <Item
          label="????????????"
          name="endTime"
          rules={[{ required: true, message: '?????????????????????' }]}
        >
          <DatePicker />
        </Item>
        <Item
          label="????????????"
        >
          <span style={{ marginRight: 20 }}>
            {maxNumbers ? `???${maxNumbers}???` : ''}
          </span>
          <Button type="primary" onClick={queryMaxNumbers}>
            ??????
          </Button>
        </Item>
        <Item
          label="????????????"
          name="numbers"
          rules={[{
            validator(_, value) {
              if (!value) {
                return Promise.reject(new Error('?????????????????????'));
              }
              if (!maxNumbers) {
                return Promise.reject(new Error('????????????????????????'));
              }
              if (value <= Number(maxNumbers)) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(`???????????????${maxNumbers}`));
            },
          }]}
        >
          <Input />
        </Item>
        <Item {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>
            ??????
          </Button>
        </Item>
      </Form>

    </Modal>
  );
};

export default FormAdd;
