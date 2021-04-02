import {
  GET_DATA_TEMPLATE, SET_LOADING_TEMPLATE, SET_SEARCH_PARAMS_TEMPLATE, SET_CONFIG_TEMPLATE, SET_FORM_VISIABLE_TEMPLATE, SET_FORM_TYPE_TEMPLATE, SET_DETAIL_TEMPLATE,
} from '../actionTypes';

const getListAction = (data) => ({
  type: GET_DATA_TEMPLATE,
  data,
});
const setLoadingAction = (data) => ({
  type: SET_LOADING_TEMPLATE,
  data,
});
const setSearchParamsAction = (data) => ({
  type: SET_SEARCH_PARAMS_TEMPLATE,
  data,
});
const setConfigAction = (data) => ({
  type: SET_CONFIG_TEMPLATE,
  data,
});

const setFormVisiableAction = (data) => ({
  type: SET_FORM_VISIABLE_TEMPLATE,
  data,
});

const setFormTypeAction = (data) => ({
  type: SET_FORM_TYPE_TEMPLATE,
  data,
});

const setDetailAction = (data) => ({
  type: SET_DETAIL_TEMPLATE,
  data,
});

export {
  getListAction,
  setLoadingAction,
  setSearchParamsAction,
  setConfigAction,
  setFormVisiableAction,
  setFormTypeAction,
  setDetailAction,
};
