import { useMemo } from 'react';
import isEmpty from 'lodash/isEmpty';

export const useDynamicTableSize = () => {
  const fetchDom = document.querySelector('#taxDynamicTable');
  return useMemo(() => {
    if (isEmpty(fetchDom)) return { width: 0, height: 0 };
    const cssTypes = fetchDom.getBoundingClientRect();
    return { width: cssTypes.width, height: `calc(100vh - ${cssTypes.top + 110}px)` };
  }, [fetchDom]);
};
export const useText = () => {};
