import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { createSelector } from 'reselect';
import DynamicTable from '../../../components/DynamicTable';
import { columns } from '../config';
import { getMainBatchList } from '../../../redux/actionsAsync/mainBatch';
import { setSearchParamsAction } from '../../../redux/actions/mainBatch';

const loadingSelector = createSelector(
  (state) => state.mainBatch.loading,
  (loading) => loading,
);
const dataSourceSelector = createSelector(
  (state) => state.mainBatch.dataSource,
  (dataSource) => dataSource,
);

const List = () => {
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.mainBatch.searchParams);
  const dataSource = useSelector(dataSourceSelector);
  const loading = useSelector(loadingSelector);

  // const sizeChange = (pageSize) => {
  //   const params = { ...searchParams, page: 1, perPage: pageSize };
  //   const searchParamsAction = setSearchParamsAction({ searchParams: params });
  //   dispatch(searchParamsAction);
  //   const engineerList = getMainBatchList({ params });
  //   dispatch(engineerList);
  //   console.log(`sizeChange, pageSize:${pageSize}`);
  // };
  const changeFunc = (current, pageSize) => {
    const params = { ...searchParams, page: current, perPage: pageSize };
    const searchParamsAction = setSearchParamsAction({ searchParams: params });
    dispatch(searchParamsAction);
    const engineerList = getMainBatchList({ params });
    dispatch(engineerList);
    console.log(`changeFunc, current: ${current}, pageSize:${pageSize}`);
  };

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
