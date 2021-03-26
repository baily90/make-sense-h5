import Operate from './components/Operate';

export const columns = [
  {
    title: '工程师编号',
    dataIndex: 'code',
    key: 'code',
    width: 150,
  },
  {
    title: '工程师姓名',
    dataIndex: 'name',
    key: 'name',
    width: 150,
  },
  {
    title: '账号',
    dataIndex: 'phone',
    key: 'phone',
    width: 150,
  },
  {
    title: '标注部位',
    dataIndex: 'products',
    key: 'products',
    width: 250,
  },
  {
    title: '入驻时间',
    dataIndex: 'settledDate',
    key: 'settledDate',
    width: 200,
  },
  {
    title: '账户状态',
    dataIndex: 'statusDesc',
    key: 'statusDesc',
    width: 100,
    // render: (text, record) => <>{JSON.stringify(record)}</>,
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 420,
    render: (text, record) => <Operate record={record} actions={actions}>action</Operate>,
  },
];

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
    code: 'reset',
    name: '重置密码',
    type: 'default',
  },
  {
    code: 'destroy',
    name: '销户',
    type: 'danger',
  },
  {
    code: 'log',
    name: '日志',
    type: 'default',
  },
];

export const defaultSearchParams = {
  page: 1,
  perPage: 20,
  code: '',
  name: '',
  phone: '',
};
