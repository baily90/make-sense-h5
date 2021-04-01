import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { createSelector } from 'reselect';
import DynamicTable from '../../../components/DynamicTable';
import { columns } from '../config';
import { getMainPatchList } from '../../../redux/actionsAsync/mainPatch';
import { setSearchParamsAction } from '../../../redux/actions/mainPatch';

const loadingSelector = createSelector(
  (state) => state.mainPatch.loading,
  (loading) => loading,
);
const dataSourceSelector = createSelector(
  (state) => state.mainPatch.dataSource,
  (dataSource) => dataSource,
);

const List = () => {
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.mainPatch.searchParams);
  const dataSource = useSelector(dataSourceSelector);
  const loading = useSelector(loadingSelector);

  // const sizeChange = (pageSize) => {
  //   const params = { ...searchParams, page: 1, perPage: pageSize };
  //   const searchParamsAction = setSearchParamsAction({ searchParams: params });
  //   dispatch(searchParamsAction);
  //   const engineerList = getMainPatchList({ params });
  //   dispatch(engineerList);
  //   console.log(`sizeChange, pageSize:${pageSize}`);
  // };
  const changeFunc = (current, pageSize) => {
    const params = { ...searchParams, page: current, perPage: pageSize };
    const searchParamsAction = setSearchParamsAction({ searchParams: params });
    dispatch(searchParamsAction);
    const engineerList = getMainPatchList({ params });
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
