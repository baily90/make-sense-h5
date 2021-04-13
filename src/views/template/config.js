import Operate from './components/Operate';
// 列表表头配置
export const columns = [
  {
    title: '特征ID',
    dataIndex: 'id',
    key: 'id',
    width: 180,
  },
  {
    title: '部位',
    dataIndex: 'regionName',
    key: 'regionName',
    width: 150,
  },
  {
    title: '特征名称',
    dataIndex: 'name',
    key: 'name',
    width: 150,
  },
  {
    title: '类型',
    dataIndex: 'typeDesc',
    key: 'typeDesc',
    width: 120,
  },
  {
    title: '状态',
    dataIndex: 'statusDesc',
    key: 'statusDesc',
    width: 120,
  },
  {
    title: '特征内容',
    dataIndex: 'contents',
    key: 'contents',
    width: 250,
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 250,
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
    code: 'up',
    name: '上架',
    type: 'danger',
  },
  {
    code: 'down',
    name: '下架',
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
  regionId: '',
  status: '',
};
