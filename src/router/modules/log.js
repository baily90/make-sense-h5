import { InsertRowBelowOutlined } from '@ant-design/icons';
import Log from '../../views/log';

export default [
  {
    title: '操作日志',
    path: '/log',
    icon: <InsertRowBelowOutlined />,
    isMenu: true,
    order: 500,
    component: Log,
  },
];
