import api from '../api';
import axiosWrap from '../../common/axiosWrap';

export function getSubBatchListService(params, args) {
  return axiosWrap.get(api.subBatch.getSubBatchList, params, args);
}
export function getSubBatchDetailService(params, args) {
  return axiosWrap.get(api.subBatch.getSubBatchDetail, params, args);
}
