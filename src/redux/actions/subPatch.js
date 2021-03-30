import {
  GET_DATA_SUBPATCH, SET_LOADING_SUBPATCH, SET_SEARCH_PARAMS_SUBPATCH,
} from '../actionTypes';

const getListAction = (data) => ({
  type: GET_DATA_SUBPATCH,
  data,
});
const setLoadingAction = (data) => ({
  type: SET_LOADING_SUBPATCH,
  data,
});
const setSearchParamsAction = (data) => ({
  type: SET_SEARCH_PARAMS_SUBPATCH,
  data,
});

export {
  getListAction,
  setLoadingAction,
  setSearchParamsAction,
};
