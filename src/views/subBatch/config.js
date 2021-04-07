import Operate from './components/Operate';
// 列表表头配置
export const columns = [
  {
    title: '子批次编码',
    dataIndex: 'subBatchCode',
    key: 'subBatchCode',
    width: 150,
  },
  {
    title: '任务名称',
    dataIndex: 'name',
    key: 'name',
    width: 180,
  },
  {
    title: '标注工程师',
    dataIndex: 'engineerName',
    key: 'engineerName',
    width: 100,
  },
  {
    title: '部位',
    dataIndex: 'regionName',
    key: 'regionName',
    width: 100,
  },
  {
    title: '所属主批次',
    dataIndex: 'batchCode',
    key: 'batchCode',
    width: 150,
  },
  {
    title: '总数量',
    dataIndex: 'total',
    key: 'total',
    width: 110,
  },
  {
    title: '剩余标注数量',
    dataIndex: 'residualDistributeNum',
    key: 'residualDistributeNum',
    width: 110,
  },
  {
    title: '状态',
    dataIndex: 'statusDesc',
    key: 'statusDesc',
    width: 100,
  },
  {
    title: '分发时间',
    dataIndex: 'distributeTime',
    key: 'distributeTime',
    width: 150,
  },
  {
    title: '最近一次提交时间',
    dataIndex: 'lastSubmitTime',
    key: 'lastSubmitTime',
    width: 150,
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 280,
    render: (text, record) => <Operate record={record} actions={actions}>action</Operate>,
  },
];
// 操作按钮
export const actions = [
  {
    code: 'detail',
    name: '详情',
    type: 'primary',
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
  perPage: 10,
  code: '',
  name: '',
  phone: '',
};
