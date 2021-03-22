import { HomeOutlined } from '@ant-design/icons';
import Engineer from '../../views/engineer';

export default [
  {
    title: '工程师管理',
    path: '/engineer',
    icon: <HomeOutlined />,
    isMenu: true,
    component: Engineer,
  },
];
