import api from '../api';
import axiosWrap from '../../common/axiosWrap';

export function getMainBatchListService(params, args) {
  return axiosWrap.get(api.mainBatch.getMianPatchList, params, args);
}
export function getPositionListService(params, args) {
  return axiosWrap.get(api.mainBatch.getPositionList, params, args);
}
export function getCheckNumbersService(params, args) {
  return axiosWrap.get(api.mainBatch.getCheckNumbers, params, args);
}
export function addBatchService(data, args) {
  return axiosWrap.post(api.mainBatch.addBatch, data, args);
}
export function getBatchDetailService(params, args) {
  return axiosWrap.get(api.mainBatch.batchDetail, params, args);
}
export function getEditInfoService(params, args) {
  return axiosWrap.get(api.mainBatch.editInfo, params, args);
}
export function batchAllotService(data, args) {
  return axiosWrap.post(api.mainBatch.batchAllot, data, args);
}
