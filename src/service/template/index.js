import api from '../api';
import axiosWrap from '../../common/axiosWrap';

export function getTemplateListService(params, args) {
  return axiosWrap.get(api.template.getTemplateList, params, args);
}

export function addTemplateService(data, args) {
  return axiosWrap.post(api.template.addTemplate, data, args);
}

export function updateTemplateService(data, args) {
  return axiosWrap.post(api.template.updateTemplate, data, args);
}

export function getTemplateDetailService(params, args) {
  return axiosWrap.get(api.template.getDetail, params, args);
}
