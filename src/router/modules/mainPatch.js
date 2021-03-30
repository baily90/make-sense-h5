import { PartitionOutlined } from '@ant-design/icons';
import MainPatch from '../../views/mainPatch';

export default [
  {
    title: '主批次管理',
    path: '/mainPatch',
    icon: <PartitionOutlined />,
    isMenu: true,
    component: MainPatch,
  },
];
