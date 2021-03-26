import api from '../api';
import axiosWrap from '../../common/axiosWrap';

export function getEngineerListService(params, args) {
  return axiosWrap.get(api.engineer.getEngineerList, params, args);
}
export const a = '';
