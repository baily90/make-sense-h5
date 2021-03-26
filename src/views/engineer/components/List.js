/*
 * @Author: zhangyanlong
 * @Date: 2021-03-22 23:58:43
 * @LastEditTime: 2021-03-23 10:16:05
 * @LastEditors: zhangyanlong
 * @Description:
 */
import { useSelector } from 'react-redux';
import DynamicTable from '../../../components/DynamicTable';
import columns from '../config/columns';

const List = () => {
  const dataSource = useSelector((state) => state.engineer.dataSource);
  const loading = useSelector((state) => state.engineer.loading);

  const sizeChange = (pageSize) => {
    console.log(`sizeChange, pageSize:${pageSize}`);
  };
  const changeFunc = (current, pageSize) => {
    console.log(`changeFunc, current: ${current}, pageSize:${pageSize}`);
  };
  console.log('渲染List');
  return (
    <DynamicTable
      rowKey="id"
      loading={loading}
      dataSource={dataSource.data}
      columns={columns}
      paginationData={{ total: dataSource.total, perPage: dataSource.perPage, currentPage: dataSource.currentPage }}
      sizeChange={sizeChange}
      changeFunc={changeFunc}
    />
  );
};

export default List;
