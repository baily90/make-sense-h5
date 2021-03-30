import { LayoutOutlined } from '@ant-design/icons';
import Template from '../../views/template';

export default [
  {
    title: '标注模板管理',
    path: '/template',
    icon: <LayoutOutlined />,
    isMenu: true,
    component: Template,
  },
];
