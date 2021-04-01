import {
  GET_DATA_MAINPATCH, SET_LOADING_MAINPATCH, SET_SEARCH_PARAMS_MAINPATCH,
} from '../actionTypes';

const getListAction = (data) => ({
  type: GET_DATA_MAINPATCH,
  data,
});
const setLoadingAction = (data) => ({
  type: SET_LOADING_MAINPATCH,
  data,
});
const setSearchParamsAction = (data) => ({
  type: SET_SEARCH_PARAMS_MAINPATCH,
  data,
});

export {
  getListAction,
  setLoadingAction,
  setSearchParamsAction,
};
