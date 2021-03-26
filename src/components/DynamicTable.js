import React, { memo } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import { useDynamicTableSize } from '../common/hooks';

const DynamicTable = memo(({
  dataSource, rowKey, paginationData, sizeChange, changeFunc, ...props
}) => {
  const { width, height } = useDynamicTableSize();
  console.log('渲染DynamicTable', width, height, dataSource);
  return (
    <Table
      {...props}
      id="taxDynamicTable"
      bordered
      size="small"
      dataSource={dataSource}
      rowKey={(record) => record[rowKey]}
      scroll={{ scrollToFirstRowOnChange: true, x: width, y: height }}
      style={{ height }}
      pagination={{
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: () => `共${paginationData.total}条`,
        pageSize: Number(paginationData.perPage),
        current: Number(paginationData.currentPage),
        total: Number(paginationData.total),
        size: 'small',
        onShowSizeChange: (current, pageSize) => sizeChange(pageSize),
        onChange: (current, pageSize) => changeFunc(current, pageSize),
      }}
    />
  );
});

DynamicTable.defaultProps = {
  style: {},
  rowKey: 'id',
  dataSource: [],
  loading: false,
  sizeChange: () => {},
  changeFunc: () => {},
  rowSelection: null,
  paginationData: {
    perPage: 20,
    total: 0,
    currentPage: 1,
  },
};
DynamicTable.propTypes = {
  style: PropTypes.object,
  dataSource: PropTypes.array,
  rowKey: PropTypes.string,
  loading: PropTypes.bool,
  sizeChange: PropTypes.func,
  changeFunc: PropTypes.func,
  rowSelection: PropTypes.object,
  paginationData: PropTypes.shape({
    perPage: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    total: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    currentPage: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
};
export default DynamicTable;
