import {
  Modal, Descriptions, Button,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setFormDetailVisiableAction } from '../../../redux/actions/mainBatch';

const { Item } = Descriptions;
const FormDetail = () => {
  const dispatch = useDispatch();
  const isFormDetailVisible = useSelector((state) => state.mainBatch.isFormDetailVisiable);
  const {
    batch, selected, template, allocInfo,
  } = useSelector((state) => state.mainBatch.detail);
  const closeFormModal = () => {
    dispatch(setFormDetailVisiableAction({ isFormDetailVisiable: false }));
  };

  return (
    <Modal
      title="主批次详情"
      visible={isFormDetailVisible}
      footer={[
        <Button onClick={closeFormModal}>关闭</Button>,
      ]}
      onCancel={closeFormModal}
    >
      <Descriptions title="基础信息" column={1}>
        <Item label="批次编码">{batch.code}</Item>
        <Item label="任务名称">{batch.name}</Item>
        <Item label="钉钉申请编号">{batch.dingCode}</Item>
        <Item label="创建时间">{batch.createTime}</Item>
      </Descriptions>
      <Descriptions title="选择数据" column={1}>
        <Item label="部位">{selected.regionName}</Item>
        <Item label="部位方向">
          {
            selected.positions && selected.positions.map((item) => item)
          }
        </Item>
        <Item label="开始时间">{selected.beginTime}</Item>
        <Item label="结束时间">{selected.endTime}</Item>
        <Item label="所需数量">{selected.numbers}</Item>
      </Descriptions>
      <Descriptions title="模板信息" column={1}>
        {
          template.map((item) => <Item>{item}</Item>)
        }
      </Descriptions>
      <Descriptions title="人员分配" column={1}>
        {allocInfo.map((item) => (
          <Item>
            <Descriptions column={1}>
              <Item label={item.engineerName}>
                {item.num}
                例
              </Item>
              <Item label="子批次标题">{item.title}</Item>
            </Descriptions>
          </Item>
        ))}
      </Descriptions>
    </Modal>
  );
};
export default FormDetail;
