import Operate from './components/Operate';
// 列表表头配置
export const columns = [
  {
    title: '批次编码',
    dataIndex: 'code',
    key: 'code',
    width: 150,
  },
  {
    title: '任务名称',
    dataIndex: 'name',
    key: 'name',
    width: 180,
  },
  {
    title: '钉钉申请编号',
    dataIndex: 'dingCode',
    key: 'dingCode',
    width: 180,
  },
  {
    title: '包含部位',
    dataIndex: 'regionName',
    key: 'regionName',
    width: 150,
  },
  {
    title: '原数量/例',
    dataIndex: 'total',
    key: 'total',
    width: 150,
  },
  {
    title: '分发剩余数量/例',
    dataIndex: 'residualDistributeNum',
    key: 'residualDistributeNum',
    width: 150,
  },
  {
    title: '剩余标注数量/例',
    dataIndex: 'residualMarkNum',
    key: 'residualMarkNum',
    width: 150,
  },
  {
    title: '状态',
    dataIndex: 'statusDesc',
    key: 'statusDesc',
    width: 100,
  },
  {
    title: '创建时间',
    dataIndex: 'createDate',
    key: 'createDate',
    width: 150,
  },
  {
    title: '分发时间',
    dataIndex: 'distributeDate',
    key: 'distributeDate',
    width: 150,
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 340,
    render: (text, record) => <Operate record={record} actions={actions}>action</Operate>,
  },
];
// 操作按钮
export const actions = [
  {
    code: 'edit',
    name: '编辑',
    type: 'primary',
  },
  {
    code: 'detail',
    name: '详情',
    type: 'default',
  },
  {
    code: 'stop',
    name: '停止标注',
    type: 'danger',
  },
  {
    code: 'log',
    name: '日志',
    type: 'default',
  },
];

// 搜索条件默认值
export const defaultSearchParams = {
  page: 1,
  perPage: 20,
  code: '',
  regionId: '',
  status: '',
};
