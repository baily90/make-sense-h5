import {
  Modal, Descriptions, Button,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setFormVisiableAction } from '../../../redux/actions/subBatch';

const { Item } = Descriptions;
const FormDetail = () => {
  const dispatch = useDispatch();
  const isFormDetailVisiable = useSelector((state) => state.subBatch.isFormDetailVisiable);
  const {
    batch, properties, markInfo,
  } = useSelector((state) => state.subBatch.detail);
  const closeFormModal = () => {
    dispatch(setFormVisiableAction({ isFormDetailVisiable: false }));
  };

  return (
    <Modal
      title="子批次详情"
      visible={isFormDetailVisiable}
      footer={[
        <Button onClick={closeFormModal}>关闭</Button>,
      ]}
      onCancel={closeFormModal}
    >
      <Descriptions title="基础信息" column={1}>
        <Item label="子批次编码">{batch.code}</Item>
        <Item label="任务名称">{batch.name}</Item>
        <Item label="标注工程师">{batch.engineerName}</Item>
        <Item label="部位">{batch.regionName}</Item>
        <Item label="所属主批次">{batch.parentCode}</Item>
        <Item label="创建时间">{batch.createTime}</Item>
      </Descriptions>
      <Descriptions title="模板信息" column={1}>
        {
          properties.map((item) => <Item>{item}</Item>)
        }
      </Descriptions>
      <Descriptions title="特征信息" column={1}>
        <Item label="分发数量">{markInfo.distributeNum}</Item>
        <Item label="待标注数量">{markInfo.residualMarkNum}</Item>
        <Item label="待审核数量">{markInfo.needCheckNum}</Item>
        <Item label="无效数量">{markInfo.invalidNum}</Item>
        <Item label="审核标注工程师">{markInfo.engineers}</Item>
      </Descriptions>
    </Modal>
  );
};
export default FormDetail;
