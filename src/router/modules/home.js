import { HomeOutlined } from '@ant-design/icons';
import Home from '../../views/home';

export default [
  {
    title: '首页',
    path: '/home',
    icon: <HomeOutlined />,
    isMenu: true,
    component: Home,
  },
];
