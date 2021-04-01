import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';
import DynamicTable from '../../../components/DynamicTable';
import { columns } from '../config';
import { getMainBatchList } from '../../../redux/actionsAsync/mainBatch';
import { setSearchParamsAction } from '../../../redux/actions/mainBatch';

const List = () => {
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.mainBatch.searchParams);
  const dataSource = useSelector((state) => state.mainBatch.dataSource);
  const loading = useSelector((state) => state.mainBatch.loading);

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
