/*
 * @Author: zhangyanlong
 * @Date: 2021-03-22 23:58:43
 * @LastEditTime: 2021-03-23 10:16:05
 * @LastEditors: zhangyanlong
 * @Description:
 */
import { Table } from 'antd';

const List = () => {
  const dataSource = [
  ];
  '1234567890qwertyuio'.split('').forEach((item, index) => {
    dataSource.push({
      key: index,
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    });
  });

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <Table
      size="middle"
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export default List;
