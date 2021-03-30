import api from '../api';
import axiosWrap from '../../common/axiosWrap';

export function getEngineerListService(params, args) {
  return axiosWrap.get(api.engineer.getEngineerList, params, args);
}
export function getEngineerDetailService(params, args) {
  return axiosWrap.get(api.engineer.getEngineerDetail, params, args);
}
export function getEngineerConfigService(params, args) {
  return axiosWrap.get(api.engineer.getEngineerConfig, params, args);
}
export function addUserService(data, args) {
  return axiosWrap.post(api.engineer.addUser, data, args);
}
export function updateUserService(data, args) {
  return axiosWrap.post(api.engineer.updateUser, data, args);
}
