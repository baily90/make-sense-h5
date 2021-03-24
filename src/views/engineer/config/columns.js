import Operate from '../components/Operate';
import actions from './actions';

export default [
  {
    title: '工程师编号',
    dataIndex: 'c1',
    key: 'c1',
    width: 150,
  },
  {
    title: '工程师姓名',
    dataIndex: 'c2',
    key: 'c2',
    width: 150,
  },
  {
    title: '账号',
    dataIndex: 'c3',
    key: 'c3',
    width: 150,
  },
  {
    title: '标注部位',
    dataIndex: 'c4',
    key: 'c4',
    width: 250,
  },
  {
    title: '入驻时间',
    dataIndex: 'c5',
    key: 'c5',
    width: 200,
  },
  {
    title: '账户状态',
    dataIndex: 'c6',
    key: 'c6',
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
