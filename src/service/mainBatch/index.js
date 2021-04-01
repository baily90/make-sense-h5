import api from '../api';
import axiosWrap from '../../common/axiosWrap';

export function getMainBatchListService(params, args) {
  return axiosWrap.get(api.mainBatch.getMianPatchList, params, args);
}
export function getPositionListService(params, args) {
  return axiosWrap.get(api.mainBatch.getPositionList, params, args);
}