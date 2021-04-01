import { PartitionOutlined } from '@ant-design/icons';
import MainBatch from '../../views/mainBatch';

export default [
  {
    title: '主批次管理',
    path: '/mainBatch',
    icon: <PartitionOutlined />,
    isMenu: true,
    component: MainBatch,
  },
];
