import {
  GET_DATA_SUBBATCH, SET_LOADING_SUBBATCH, SET_SEARCH_PARAMS_SUBBATCH, SET_DETAIL_SUBBATCH, SET_FORM_VISIABLE_SUBBATCH,
} from '../actionTypes';

export const getListAction = (data) => ({
  type: GET_DATA_SUBBATCH,
  data,
});
export const setLoadingAction = (data) => ({
  type: SET_LOADING_SUBBATCH,
  data,
});
export const setSearchParamsAction = (data) => ({
  type: SET_SEARCH_PARAMS_SUBBATCH,
  data,
});
export const setDetailAction = (data) => ({
  type: SET_DETAIL_SUBBATCH,
  data,
});
export const setFormVisiableAction = (data) => ({
  type: SET_FORM_VISIABLE_SUBBATCH,
  data,
});
