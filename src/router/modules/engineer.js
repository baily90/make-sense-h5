import { TeamOutlined } from '@ant-design/icons';
import Engineer from '../../views/engineer';

export default [
  {
    title: '工程师管理',
    path: '/engineer',
    icon: <TeamOutlined />,
    isMenu: true,
    component: Engineer,
  },
];
