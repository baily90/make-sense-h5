import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import { createSelector } from 'reselect';
import DynamicTable from '../../../components/DynamicTable';
import { columns } from '../config';

const loadingSelector = createSelector(
  (state) => state.subBatch.loading,
  (loading) => {
    console.log(loading);
    return loading;
  },
);
const dataSourceSelector = createSelector(
  (state) => state.subBatch.dataSource,
  (dataSource) => {
    console.log(dataSource);
    return dataSource;
  },
);

const List = () => {
  // const dispatch = useDispatch();
  const dataSource = useSelector(dataSourceSelector);
  const loading = useSelector(loadingSelector);
  // const sizeChange = (pageSize) => {
  //   console.log(`sizeChange, pageSize:${pageSize}`);
  // };
  const changeFunc = (current, pageSize) => {
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
