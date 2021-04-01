import Operate from './components/Operate';
// 列表表头配置
export const columns = [
  {
    title: '子批次编码',
    dataIndex: 'c1',
    key: 'c1',
    width: 150,
  },
  {
    title: '任务名称',
    dataIndex: 'c2',
    key: 'c2',
    width: 180,
  },
  {
    title: '标注工程师',
    dataIndex: 'c3',
    key: 'c3',
    width: 100,
  },
  {
    title: '部位',
    dataIndex: 'c4',
    key: 'c4',
    width: 100,
  },
  {
    title: '所属主批次',
    dataIndex: 'c5',
    key: 'c5',
    width: 150,
  },
  {
    title: '总数量',
    dataIndex: 'c6',
    key: 'c6',
    width: 110,
  },
  {
    title: '剩余标注数量',
    dataIndex: 'c7',
    key: 'c7',
    width: 110,
  },
  {
    title: '状态',
    dataIndex: 'c8',
    key: 'c8',
    width: 100,
  },
  {
    title: '分发时间',
    dataIndex: 'c9',
    key: 'c9',
    width: 150,
  },
  {
    title: '最近一次提交时间',
    dataIndex: 'c10',
    key: 'c10',
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
