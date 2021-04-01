import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import DynamicTable from '../../../components/DynamicTable';
import { columns } from '../config';

const List = () => {
  // const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.subBatch.dataSource);
  const loading = useSelector((state) => state.subBatch.loading);
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
