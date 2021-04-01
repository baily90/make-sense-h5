import {
  GET_DATA_MAINBATCH, SET_LOADING_MAINBATCH, SET_SEARCH_PARAMS_MAINBATCH, GET_CONFIG_MAINBATCH,
} from '../actionTypes';

const getListAction = (data) => ({
  type: GET_DATA_MAINBATCH,
  data,
});
const setLoadingAction = (data) => ({
  type: SET_LOADING_MAINBATCH,
  data,
});
const setSearchParamsAction = (data) => ({
  type: SET_SEARCH_PARAMS_MAINBATCH,
  data,
});
const getConfigAction = (data) => ({
  type: GET_CONFIG_MAINBATCH,
  data,
});

export {
  getListAction,
  setLoadingAction,
  setSearchParamsAction,
  getConfigAction,
};
