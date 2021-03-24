/*
 * @Author: zhangyanlong
 * @Date: 2021-03-22 23:58:43
 * @LastEditTime: 2021-03-23 10:16:05
 * @LastEditors: zhangyanlong
 * @Description:
 */
import { useEffect, useState } from 'react';

import { unstable_batchedUpdates as batchedUpdates } from 'react-dom';
import DynamicTable from '../../../components/DynamicTable';
import columns from '../config/columns';

const List = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const arr = [];
  '1234567890qwertyuioasdfghjklzxcvbnm'.split('').forEach((item, index) => {
    arr.push({
      key: index,
      c1: 'BZS0000001',
      c2: '吴彦祖',
      c3: '186****3660',
      c4: '甲状腺、颈动脉',
      c5: '2020-10-24',
      c6: '正常',
    });
  });
  useEffect(() => {
    setTimeout(() => {
      batchedUpdates(() => {
        setDataSource(arr);
        setIsLoading(false);
      });
    }, 1000);
  }, []);

  const sizeChange = (pageSize) => {
    console.log(`sizeChange, pageSize:${pageSize}`);
  };
  const changeFunc = (current, pageSize) => {
    console.log(`changeFunc, current: ${current}, pageSize:${pageSize}`);
  };
  return (
    <DynamicTable
      dataSource={dataSource}
      columns={columns}
      sizeChange={sizeChange}
      changeFunc={changeFunc}
      loading={isLoading}
    />
  );
};

export default List;
