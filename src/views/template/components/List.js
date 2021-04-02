import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';
import DynamicTable from '../../../components/DynamicTable';
import { columns } from '../config';
import { getTemplateList } from '../../../redux/actionsAsync/template';
import { setSearchParamsAction } from '../../../redux/actions/mainBatch';

const List = () => {
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.template.searchParams);
  const dataSource = useSelector((state) => state.template.dataSource);
  const loading = useSelector((state) => state.template.loading);

  const changeFunc = (current, pageSize) => {
    const params = { ...searchParams, page: current, perPage: pageSize };
    const searchParamsAction = setSearchParamsAction({ searchParams: params });
    dispatch(searchParamsAction);
    const engineerList = getTemplateList({ params });
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
        changeFunc={changeFunc}
      />
    </Spin>

  );
};

export default List;
