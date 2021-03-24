import React, { memo } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import { useDynamicTableSize } from '../common/hooks';

const DynamicTable = memo(({
  dataSource, rowKey, pageData, sizeChange, changeFunc, ...props
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
      rowKey={(record, index) => (rowKey ? record[rowKey] : index)}
      scroll={{ scrollToFirstRowOnChange: true, x: width, y: height }}
      style={{ height }}
      pagination={{
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: () => `共${pageData.total}条`,
        pageSize: Number(pageData.perPage),
        current: Number(pageData.currentPage),
        total: Number(pageData.total),
        size: 'small',
        onShowSizeChange: (current, pageSize) => sizeChange(pageSize),
        onChange: (current, pageSize) => changeFunc(current, pageSize),
      }}
    />
  );
});

DynamicTable.defaultProps = {
  style: {},
  rowKey: '',
  dataSource: [],
  loading: false,
  sizeChange: () => {},
  changeFunc: () => {},
  rowSelection: null,
  pageData: {
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
  pageData: PropTypes.shape({
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
