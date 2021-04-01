/*
 * @Author: zhangyanlong
 * @Date: 2021-03-22 23:58:43
 * @LastEditTime: 2021-03-23 10:16:05
 * @LastEditors: zhangyanlong
 * @Description:
 */
import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';
import DynamicTable from '../../../components/DynamicTable';
import { columns } from '../config';
import { getEngineerList } from '../../../redux/actionsAsync/engineer';
import { setSearchParamsAction } from '../../../redux/actions/engineer';

const List = () => {
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.engineer.searchParams);
  const dataSource = useSelector((state) => state.engineer.dataSource);
  const loading = useSelector((state) => state.engineer.loading);

  // const sizeChange = (pageSize) => {
  //   const params = { ...searchParams, page: 1, perPage: pageSize };
  //   const searchParamsAction = setSearchParamsAction({ searchParams: params });
  //   dispatch(searchParamsAction);
  //   const engineerList = getEngineerList({ params });
  //   dispatch(engineerList);
  //   console.log(`sizeChange, pageSize:${pageSize}`);
  // };
  const changeFunc = (current, pageSize) => {
    const params = { ...searchParams, page: current, perPage: pageSize };
    const searchParamsAction = setSearchParamsAction({ searchParams: params });
    dispatch(searchParamsAction);
    const engineerList = getEngineerList({ params });
    dispatch(engineerList);
    console.log(`changeFunc, current: ${current}, pageSize:${pageSize}`);
  };
  console.log('渲染List');
  return (
    <Spin spinning={loading}>
      <DynamicTable
        rowKey="id"
        dataSource={dataSource.data}
        columns={columns}
        paginationData={{ total: dataSource.total, perPage: dataSource.perPage, currentPage: dataSource.currentPage }}
      // sizeChange={sizeChange}
        changeFunc={changeFunc}
      />
    </Spin>
  );
};

export default List;
