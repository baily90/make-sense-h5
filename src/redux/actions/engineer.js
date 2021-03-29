import {
  GET_LIST_ENGINEER, SET_LOADING_ENGINEER, SET_SEARCH_PARAMS_ENGINEER, GET_CONFIG_ENGINEER, SET_FORM_VISIABLE_ENGINEER,
} from '../actionTypes';

const getListAction = (data) => ({
  type: GET_LIST_ENGINEER,
  data,
});
const setLoadingAction = (data) => ({
  type: SET_LOADING_ENGINEER,
  data,
});
const setSearchParamsAction = (data) => ({
  type: SET_SEARCH_PARAMS_ENGINEER,
  data,
});

const getConfigAction = (data) => ({
  type: GET_CONFIG_ENGINEER,
  data,
});

const setFormVisiableAction = (data) => ({
  type: SET_FORM_VISIABLE_ENGINEER,
  data,
});

export {
  getListAction,
  setLoadingAction,
  setSearchParamsAction,
  getConfigAction,
  setFormVisiableAction,
};
