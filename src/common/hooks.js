import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

export const useDynamicTableSize = () => {
  const fetchDom = document.querySelector('#taxDynamicTable');
  return useMemo(() => {
    if (isEmpty(fetchDom)) return { width: 0, height: 0 };
    const cssTypes = fetchDom.getBoundingClientRect();
    return { width: cssTypes.width, height: `calc(100vh - ${cssTypes.top + 110}px)` };
  }, [fetchDom]);
};

export const useConfirm = (content, onOkCB) => {
  Modal.confirm({
    title: '提示',
    icon: <ExclamationCircleOutlined />,
    content,
    okText: '确认',
    cancelText: '取消',
    onOk: () => onOkCB(),
  });
};
export const useQuery = () => new URLSearchParams(useLocation().search);
